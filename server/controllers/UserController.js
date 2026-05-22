const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { email, displayName, username, password, dateOfBirth } = req.body;

    // validation
    if (
      !email ||
      !displayName ||
      !username ||
      !password ||
      !dateOfBirth.day ||
      !dateOfBirth.month ||
      !dateOfBirth.year
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // check email
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // check username
    const usernameExists = await User.findOne({ username });

    if (usernameExists) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = await User.create({
      email,
      displayName,
      username,
      password: hashedPassword,
      dateOfBirth: {
        day: dateOfBirth.day,
        month: dateOfBirth.month,
        year: dateOfBirth.year,
      },
    });
    newUser.avatar = `https://i.pravatar.cc/150?u=${newUser._id}`;
    await newUser.save();

    res.status(201).json({
      message: "Account created successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // 2. find user
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // 3. check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // 4. success
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        displayName: user.displayName,
        username: user.username,
        avatar: user.avatar,
      },
    });
    user.status = "online";
    await user.save();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const logout = async (req, res) => {
  try {
    const { userId } = req.body;

    await User.findByIdAndUpdate(userId, {
      status: "offline",
    });

    res.json({
      message: "Logged out",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
  logout,
};
