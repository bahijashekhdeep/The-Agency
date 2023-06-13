import React, { useState } from "react";
import Title from "./atoms/Title.js";
import SubmitBtn from "./atoms/SubmitBtn.js";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./newss.css";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      agree: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      agree: Yup.boolean()
        .required("Required")
        .oneOf([true], "You must accept the terms"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await response.json();

        if (response.ok) {
          console.log("Form submission successful");
          setDisplayMessage(true);
        } else {
          console.error("Form submission error:", data.error);
          alert(
            "There was an error submitting theform. Please try again later."
          );
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert(
          "There was an error submitting the form. Please try again later."
        );
      }
    },
  });

  const [content, setContent] = useState({
    mainTitle: "Contact us",
    subTitle: "Subscribe to the newsletter to stay informed of the latest news",
    submitBtn: "Subscribe",
  });

  const [displayMessage, setDisplayMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit} className="newsForm">
          <div className="tab-des">
            {/* <Title text={content.mainTitle} type="title" /> */}
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              className="name"
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "29px",
              }}
            >
              Contact Us
            </Typography>
            <Title text={content.subTitle} type="subTitle" />
            <div className="form-group">
              {!displayMessage && (
                <div className="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    {...formik.getFieldProps("email")}
                    required
                  />
                </div>
              )}

              {displayMessage && (
                <div className="bodyCopy">
                  <p>
                    Thank you for subscribing! Look out for the latest news on
                    your favorite shows.
                  </p>
                </div>
              )}

              {!displayMessage && <SubmitBtn text={content.submitBtn} />}
            </div>

            {!displayMessage && (
              <div className="gdpr">
                <div>
                  <input
                    className="contact"
                    id="gdpr"
                    name="agree"
                    type="checkbox"
                    checked={formik.values.agree}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gdpr">
                    <span className="aw">
                      I agree to receive information from{" "}
                    </span>{" "}
                    <span className="aw">
                      Interactive Nerd Communications in accordance
                    </span>{" "}
                    <span className="aw">
                      with the following{" "}
                      <a href="https://www.google.com/">Privacy Policy</a>
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
