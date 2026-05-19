import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    month: "",
    day: "",
    year: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created (simulation) 🚀");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Email */}
      <Form.Group className="mb-3">
        <Form.Label className="text-light">Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Username */}
      <Form.Group className="mb-3">
        <Form.Label className="text-light">Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Password */}
      <Form.Group className="mb-3">
        <Form.Label className="text-light">Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      {/* DOB */}
      <div className="d-flex gap-2 mb-4 mt-4">
        <Form.Select name="month" onChange={handleChange}>
          <option>Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </Form.Select>

        <Form.Select name="day" onChange={handleChange}>
          <option>Day</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i}>{i + 1}</option>
          ))}
        </Form.Select>

        <Form.Select name="year" onChange={handleChange}>
          <option>Year</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
          <option>2008</option>
          <option>2007</option>
          <option>2006</option>
          <option>2005</option>
          <option>2004</option>
          <option>2003</option>
          <option>2002</option>
          <option>2001</option>
          <option>2000</option>
          <option>1999</option>
          <option>1998</option>
          <option>1997</option>
          <option>1996</option>
          <option>1995</option>
          <option>1994</option>
          <option>1993</option>
          <option>1992</option>
          <option>1991</option>
          <option>1990</option>
          <option>1989</option>
          <option>1988</option>
          <option>1987</option>
          <option>1986</option>
          <option>1985</option>
          <option>1984</option>
          <option>1983</option>
          <option>1982</option>
          <option>1981</option>
          <option>1980</option>
        </Form.Select>
      </div>

      {/* Button */}
      <Button className="w-100" type="submit mb-3 mt-3">
        Create Account
      </Button>

      {/* Footer */}
      <p className="text-center text-secondary mt-3 small">
        Already have an account?{" "}
        <a href="/" className="text-primary">
          Log in
        </a>
      </p>
    </Form>
  );
};

export default RegisterForm;
