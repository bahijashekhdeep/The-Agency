import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./CreatAcount.css";
import vector from "./img/Vector (2).png";
import { withStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";

const ColoredTextField = withStyles({
  root: {
    width: "95%",
    "& label.Mui-focused": {
      color: "#f18701 ",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f18701 ",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#f18701 ",
      },
    },
  },
})(TextField);

const RedCheckbox = withStyles({
  root: {
    color: "#f18701",
    "&:hover": {
      backgroundColor: "red",
    },
    "&$checked": {
      color: "#F18701",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const AccountForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Please fill in all form fields."
  );
  const [permissions, setPermissions] = useState({
    permission1: false,
    permission2: false,
    permission3: false,
    permission4: false,
  });

  const validateForm = () => {
    let isValid = false;

    if (email !== "" && password !== "") {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= 6) {
        isValid = true;
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } else {
      setErrorMessage("Please fill in all form fields.");
    }

    return isValid;
  };

const submitForm = async (e) => {
  e.preventDefault();

  setShowAlert(false);

  const isValid = validateForm();

  if (isValid) {
    try {
      const response = await axios.post(
        "https://example.com/api/create-account",
        {
          name: name,
          email: email,
          password: password,
          permissions: permissions,
        }
      );

      if (response.status === 200) {
        setIsFormValid(true);
        setShowAlert(true);
        setErrorMessage("A new admin account was added"); // Updated success message
      }
    } catch (error) {
      setIsFormValid(false);
      setShowAlert(true);
      setErrorMessage("Please try again later");
    }
  } else {
    setIsFormValid(false);
    setShowAlert(true);
  }
};


  const handlePermissionChange = (event) => {
    setPermissions({
      ...permissions,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="login-containers">
      <form onSubmit={(e) => submitForm(e)} className="creat-form">
        <div className="form-heading">
          <img src={vector} alt="Lock" />
        </div>

        <div className="creat-controls">
          <p className="req"> field required</p>
          <ColoredTextField
            className="form-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name-field"
            label="Enter your name"
            variant="outlined"
            size="small"
            required
          />
          <p className="req"> field required</p>
          <ColoredTextField
            className="form-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email-field"
            label="Enter your email"
            variant="outlined"
            size="small"
            required
          />
          <p className="req"> field required</p>
          <ColoredTextField
            className="form-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password-field"
            label="Enter your password"
            variant="outlined"
            size="small"
            required
          />
        </div>

        <div className="permissions">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "35px",
            }}
          >
            <p style={{ marginRight: "20px" }}>permissions</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RedCheckbox
                name="permission1"
                checked={permissions.permission1}
                onChange={handlePermissionChange}
              />
              <label htmlFor="permission1" className="checkbox-label">
                blog
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RedCheckbox
                name="permission2"
                checked={permissions.permission2}
                onChange={handlePermissionChange}
              />
              <label htmlFor="permission2" className="checkbox-label">
                portfolio
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RedCheckbox
                name="permission3"
                checked={permissions.permission3}
                onChange={handlePermissionChange}
              />
              <label htmlFor="permission3" className="checkbox-label">
                requests
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RedCheckbox
                name="permission4"
                checked={permissions.permission4}
                onChange={handlePermissionChange}
              />
              <label htmlFor="permission4" className="checkbox-label">
                pricing
              </label>
            </div>
          </div>

          <div className="btnAlert">
            {showAlert && (
              <Alert style={{ display:"flex", justifyContent:"center"}} severity={isFormValid ? "success" : "error"}>
                {errorMessage}
              </Alert>
            )}
            <Button
              id="submit-button"
              type="submit"
              className="submit-button1"
              variant="outlined"
              fullWidth
              size="large"
              sx={{
                maxWidth: "95%",
                height: "47px",
                marginTop: "30px",
                border: "2px solid #000000",
                borderImage:
                  "linear-gradient(132.37deg, #F71175 -1.41%, #BE68D6 20.07%, #A68DFF 29.56%, #9172EC 37.06%, #390099 50.88%, #804560 60.97%, #F7B801 70.65%, #F18701 83.69%, #F35B04 100%)",
                borderImageSlice: 1,
                background:
                  "linear-gradient(229.64deg, #F7B801 9.04%, #F18701 81.7%, #F56F23(163.25%)",

                fontFamily: "Metropolis",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "16px",
                /* identical to box height */

                color: "black",

                borderRadius: "8px",
              }}
            >
              Create Account
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
