import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./changpassword.css";
import vector from "./img/Vector (2).png";
import { withStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";

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
        marginBottom: "0px",
      },
    },
  },
})(TextField);

const ChangePasswordForm = (props) => {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Please fill in all form fields."
  );

  const submitForm = async (e) => {
    e.preventDefault();

    // Reset state
    setShowAlert(false);

    let isValid = false;

    // Validate verification code
    if (verificationCode !== "1234") {
      // Replace "1234" with the actual verification code sent by email
      setErrorMessage("Invalid verification code. Please try again.");
    } else if (name !== "" && email !== "" && newPassword !== "") {
      if (isEmail(email) && newPassword.length >= 6) isValid = true;
      else if (!isEmail(email))
        setErrorMessage("Please enter a valid email address.");
      else if (newPassword.length < 6)
        setErrorMessage("Password must be at least 6 characters long.");
      else setErrorMessage("Please fill in all form fields.");
    } else {
      setErrorMessage("Please fill in all form fields.");
    }

    // Make API call to change password
    if (isValid) {
      try {
        const response = await axios.post(
          "https://example.com/api/change-password",
          {
            name: name,
            email: email,
            password: newPassword,
          }
        );

        // Handle successful password change
        if (response.status === 200) {
          setIsFormValid(true);
          setShowAlert(true);
          setErrorMessage("");
          // Redirect to dashboard or home page
          // window.location.href = "/dashboard";
        }
      } catch (error) {
        // Handle password change error
        setIsFormValid(false);
        setShowAlert(true);
        setErrorMessage(
          "An error occurred while changing your password. Please try again later."
        );
      }
    } else {
      setIsFormValid(false);
      setShowAlert(true);
    }
  };

  // Change alert messages on invalid form
  let alert = (
    <Alert style={{}} severity="error">
      {errorMessage}
    </Alert>
  );

  // Change alert messages on valid form
  if (isFormValid) {
    alert = (
      <Alert style={{}} severity="success">
        Your password has been successfully changed.
      </Alert>
    );
  }

  // Render front and back forms based on isFlipped value
  let frontForm = (
    <div className="login-container">
      <form onSubmit={(e) => submitForm(e)} className="login-form">
        <div className="form-heading">
          {" "}
          <img src={vector} alt="Lock" />
      
        </div>

        {/* Alert */}
        {/* {showAlert && alert} */}

        <div className="form-controls">
          <p className="req">field required</p>
          <ColoredTextField
            className="form-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name-field"
            label="Enter your name"
            variant="outlined"
            size="small"
            required
          />
          <p className="req" sx={{ marginTop: "" }}>
            {" "}
            field required
          </p>
          <ColoredTextField
            className="form-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email-field"
            label="Enter your email address"
            variant="outlined"
            size="small"
            required
          />
          <p className="req">field required</p>
          <ColoredTextField
            className="form-field"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            id="new-password-field"
            label="Enter a new password"
            variant="outlined"
            size="small"
            type="password"
            required
          />
          <div className="btnAlert">
            {showAlert && alert}
            <Button
              id="verify-button"
              type="button"
              className="submit-button1"
              variant="outlined"
              sx={{
                width: "95%",
                backgroundColor: "#f18701",
                color: "black",
                marginTop:"40px",
             
                "&:hover": {
                  backgroundColor: "#f18701",
                  borderRadius:"none"
                },
              }}
              onClick={() => setIsFlipped(true)}
            >
              Change Password
            </Button>
          </div>
        </div>
      </form>
    </div>
  );

  let backForm = (
    <div className="login-container">
      <form
        onSubmit={(e) => submitForm(e)}
        className="login-form2"
      
      >
        <div className="form-heading">
          {" "}
          <img src={vector} alt="Lock" />
        </div>

        {/* Alert */}
        {showAlert && alert}

        <div className="form-controls">
          <p className="req">field required</p>
          <ColoredTextField
            className="form-field"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            id="verification-code-field"
            label="Enter verification code sent by email"
            variant="outlined"
            size="small"
            required
          />

          <div className="btnAlert">
            {showAlert && alert}
            <Button
              id="submit-button"
              type="submit"
              className="submit-button1"
              variant="outlined"
              fullWidth
              size="large"
              sx={{
                width: "98%",
                backgroundColor: "#f18701",
                marginTop: "40px",
                color: "black",
                "&:hover": {
                  backgroundColor: "#f18701",
                },
              }}
            >
              Verfiy
            </Button>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className="flip-container">
      <div className={`flipper ${isFlipped ? "flipped" : ""}`}>
        <div className="front">{frontForm}</div>
        <div className="back">{backForm}</div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;

// Helper function to validate email address
function isEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
