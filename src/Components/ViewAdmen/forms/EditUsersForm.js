import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import vector from "./img/Vector (2).png";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./form.css";
import { display } from "@mui/system";

const ColoredTextField = withStyles({
  root: {
    width: "100%",
    marginBottom: "20px",

    "& label.Mui-focused": {
      color: "#f18701",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f18701",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#f18701",
      },
    },
  },
})(TextField);

const ColoredCheckbox = withStyles({
  root: {
    color: "#f18701",
    "&$checked": {
      color: "#f18701",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [permissions, setPermissions] = useState({
    blog: false,
    portfolio: false,
    requests: false,
    pricing: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "passwordConfirm") {
      setPasswordConfirm(value);
    } else {
      if (name === "password" && passwordConfirm !== value) {
        return;
      }
      setUser({ ...user, [name]: value });
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setPermissions({ ...permissions, [name]: checked });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.password !== passwordConfirm) {
      alert("Passwords do not match!");
      return;
    }

    const updatedUser = { ...user, permissions: "" };

    // Concatenate the selected permissions into a comma-separated string
    if (permissions.blog) updatedUser.permissions += "Blog, ";
    if (permissions.portfolio) updatedUser.permissions += "Portfolio, ";
    if (permissions.requests) updatedUser.permissions += "Requests, ";
    if (permissions.pricing) updatedUser.permissions += "Pricing, ";

    // Remove the trailing comma and space
    updatedUser.permissions = updatedUser.permissions.replace(/,\s*$/, "");

    props.updateUser(user.id, updatedUser);

    // Reset the form fields
    setUser(props.currentUser);
    setPasswordConfirm("");
    setFormSubmitted(true);

    // Set a timer to reset the formSubmitted state value after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  return (
    <form className="edit-user-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        {" "}
        <img src={vector} alt="Lock" />
      </div>
      <ColoredTextField
        label="Name"
        variant="outlined"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <ColoredTextField
        label="Email"
        variant="outlined"
        name="email"
        value={user.email}
        onChange={handleEmailChange}
      />
      <ColoredTextField
        label="Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <ColoredTextField
        label="Confirm Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={handleInputChange}
      />

      <div className="permissions-field">
        <div className="permissions-checkboxes">
          <p className="permissions-label">Permissions:</p>
          <FormControlLabel
            control={
              <ColoredCheckbox
                checked={permissions.blog}
                onChange={handleCheckboxChange}
                name="blog"
              />
            }
           label="Blog"
          />
          <FormControlLabel
            control={
              <ColoredCheckbox
                checked={permissions.portfolio}
                onChange={handleCheckboxChange}
                name="portfolio"
              />
            }
            label="Portfolio"
          />
          <FormControlLabel
            control={
              <ColoredCheckbox
                checked={permissions.requests}
                onChange={handleCheckboxChange}
                name="requests"
              />
            }
            label="Requests"
          />
          <FormControlLabel
            control={
              <ColoredCheckbox
                checked={permissions.pricing}
                onChange={handleCheckboxChange}
                name="pricing"
              />
            }
            label="Pricing"
          />
        </div>
   
      </div>



      <div className="form-buttons">
        <Button variant="contained" color="primary" type="submit">
          Update User
        </Button>
      </div>

      {formSubmitted && (
        <p className="form-submitted-message">Form submitted successfully!</p>
      )}
    </form>
  );
};

export default EditUserForm;