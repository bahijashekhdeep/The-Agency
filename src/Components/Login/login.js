import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./login.css";
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

const LoginForm = (props) => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    // Form Validation
    if (email !== "" && password !== "") {
      if (isEmail(email) && password.length >= 6) isValid = true;
      else if (!isEmail(email)) setErrorMessage("wrong credentials, try again");
      else if (password.length < 6)
        setErrorMessage("Password must be at least 6 symbols.");
      else setErrorMessage("wrong credentials, try again");
    } else {
      setErrorMessage("Please fill in all form fields");
    }

    // Make API call to login
    if (isValid) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });

        // Handle successful login
        if (response.status === 200) {
          setIsFormValid(true);
          setShowAlert(true);
          setErrorMessage("");
          // Redirect to dashboard or home page
          // window.location.href = "/dashboard";
        } // Handle successful login
        if (response.status === 200) {
          setIsFormValid(true);
          setShowAlert(true);
          setErrorMessage("");

          // Redirect to appropriate dashboard based on user role
          if (response.data.role === "normal") {
            window.location.href = "/normal-dashboard";
          } else if (response.data.role === "super") {
            window.location.href = "/super-dashboard";
          }
        }
      } catch (error) {
        // Handle login error
        setIsFormValid(false);
        setShowAlert(true);
        setErrorMessage("wrong credentials, try again");
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
        Successfully logged in.
      </Alert>
    );
  }

  return (
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

        <div className="btnAlert">
          {showAlert && alert}
          <Button
            id="submit-button"
            type="submit"
            className="submit-button1"
            variant="outlined"
            // color="primary"
            fullWidth
            size="large"
            sx={{
              width: "184px",
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
              lineheight: "16px",
              /* identical to box height */

              color: "black",

              borderRadius: "8px",
            }}
          >
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
};

const isEmail = (email) => {
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(email)) {
    return false;
  } else {
    return true;
  }
};

export default LoginForm;
