import React from "react";
import cercile from "./194929_facebook_social media_icon.png";
import LinkedIn from "./2083190_instagram_media_photo_photography_share_icon.png";

import Instagram from "./1218170_linkedin_icon.png";
import phone from "./Vector (8).png";
import email from "./Vector (7).png";
import { Link } from "@mui/material";
import "./footer.css";
export default function App() {
  return (
    <footer
      className="bottom"
      style={{
        background: "#D9D9D9",
        color: "#ffffff",
        textAlign: "justify",
        width: "100%",
        margin: 0,
        padding: 0,
        borderSize: "border-box",
      }}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </head>
      <div className="containers">
        <div className="row">
          <div className="col-md-3 col-12" style={{ marginTop: 40 }}>
            <h4 style={{ color: "#282828" }}> keep in touch </h4>

            <i
              aria-hidden="true"
              style={{
                padding: 10,
                color: "#282828",
                float: "left",
                fontSize: 25,
              }}
            >
              <Link href="#" color="inherit">
                {" "}
                <img
                  src={cercile}
                  alt="Facebook icon"
                  style={{ marginRight: 8, width: "24px" }}
                />
              </Link>
            </i>
            <i
              aria-hidden="true"
              style={{
                padding: 10,
                color: "white",
                float: "left",
                fontSize: 25,
              }}
            >
              <Link href="#" color="inherit">
                {" "}
                <img
                  src={LinkedIn}
                  alt="LinkedIn icon"
                  style={{ marginRight: 8, width: "24px" }}
                />
              </Link>
            </i>
            <i
              aria-hidden="true"
              style={{
                padding: 10,
                color: "white",
                float: "left",
                fontSize: 25,
              }}
            >
              <Link href="#" color="inherit">
                {" "}
                <img
                  src={Instagram}
                  alt="LinkedIn icon"
                  style={{ marginRight: 8, width: "24px" }}
                />
              </Link>
            </i>
          </div>
          <div className="col-md-3 col-12" style={{ marginTop: 40 }}>
            <h4 style={{ color: "#282828" }}> Sales </h4>
            <ul className="list-unstyled">
              <li>
                {" "}
                <img src={email} alt="Phone icon" />
                theagencysales@gmail.com{" "}
              </li>
              <li>
                {" "}
                <img src={phone} alt="Phone icon" style={{ marginRight: 8 }} />
                00963-099************{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12" style={{ marginTop: 40 }}>
            <h4 style={{ color: "#282828" }}> Public Relationship </h4>
            <ul className="list-unstyled">
              <li>
                {" "}
                <img src={email} alt="Phone icon" style={{ marginRight: 8 }} />
                theagency.rela@gmail.com{" "}
              </li>{" "}
              <li>
                {" "}
                <img src={phone} alt="Phone icon" style={{ marginRight: 8 }} />
                00963-9948******************{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12" style={{ marginTop: 40 }}>
            <h4 style={{ color: "#282828" }}> Human Resources </h4>
            <ul>
              <li>
                <img src={email} alt="Phone icon" style={{ marginRight: 8 }} />
                the agencyhuman@gmail.com{" "}
              </li>

              <li>
                <img src={phone} alt="Phone icon" style={{ marginRight: 8 }} />
                00963-99******************{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="footer2  col-md-12 col-12"
        style={{
          fontSize: 16,
          color: "lightgrey",
          height: "58px",
          lineHeight: "16px",
        }}
      >
        &copy; 2022-2023 The Agency All Right Reserved
      </div>
    </footer>
  );
}
