const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// router.get('/:userId', UserController.getUserById);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/", UserController.getAllUsers);
router.post("/logout", UserController.logout);
module.exports = router;
