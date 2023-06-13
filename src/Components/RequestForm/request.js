import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import "./request.css";
import Typography from "@mui/material/Typography";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

export default function ContactForm(props) {
  const [form, setForm] = useState(initialFormState);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (!form.name) {
      errors.name = "Name is required";
    }
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }
    if (!form.phone) {
      errors.phone = "Phone is required";
    } else if (!/^[0-9]+$/.test(form.phone)) {
      errors.phone = "Phone is invalid";
    }
    if (!form.company) {
      errors.company = "Company is required";
    }
    return errors;
  };

  const handleFormSubmit = () => {
    const errors = validateForm();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      fetch("http://your-backend-api-endpoint.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + props.authToken,
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Form data submitted successfully!");
            setForm(initialFormState);
            setSubmitted(true);
          } else {
            console.error("Error submitting form data");
          }
        })
        .catch((error) => {
          console.error("Error submitting form data:", error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
      setOpen(false);
      setForm(initialFormState);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setForm(initialFormState);
    setErrors({});
  };
  

  return (
    <>
      {submitted && (
        <Typography variant="subtitle1" color="success">
          Your message has been sent successfully!
        </Typography>
      )}
      <Typography
        onClick={() => setOpen(true)}
        component="h1"
        variant="h2"
        align="center"
        color="white"
        gutterBottom
        sx={{
          color: "white",
          fontFamily: "Inter",
          fontSize: "13px",
          fontWeight: "600",
          lineHeight: "13px",
          letterSpacing: " 0em",
          textAlign: " left",
        }}
      >
        Contact Us
      </Typography>
      <Dialog className="formrequest" open={open} onClose={handleClose}>
        <DialogTitle className="DialogTitle">Contact Us</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={form.name}
            onChange={(e) =>
              setForm((prevState) => ({ ...prevState, name: e.target.value }))
            }
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={(e) =>
              setForm((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            label="Phone"
            fullWidth
            margin="normal"
            value={form.phone}
            onChange={(e) =>
              setForm((prevState) => ({
                ...prevState,
                phone: e.target.value,
              }))
            }
            error={errors.phone ? true : false}
            helperText={errors.phone}
          />
          <TextField
            label="Company"
            fullWidth
            margin="normal"
            value={form.company}
            onChange={(e) =>
              setForm((prevState) => ({
                ...prevState,
                company: e.target.value,
              }))
            }
            error={errors.company ? true : false}
            helperText={errors.company}
          />
        </DialogContent>
        <DialogActions className="DialogActions ">
          <Typography
            className="btnform1"
            onClick={() => setOpen(false)}
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Cancel
          </Typography>
          <Typography
            className="btnform2"
            onClick={handleFormSubmit}
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {isSubmitting ? "Submitting..." : "Contact Us"}
          </Typography>
        </DialogActions>
      </Dialog>
    </>
  );
}
