import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../Slider/img/Vector (13).png";
import rightArrow from "../Slider/img/Vector (12).png";
import "./slider.css";
import { dataDigitalBestSeller } from "./data";
import Typography from "@mui/material/Typography";
function SliderLinks({ setCategory }) {
  function handleClick(event, category) {
    event.preventDefault();
    setCategory(category);

    // Add active class to clicked link
    event.currentTarget.classList.add("active");

    // Remove active class from other links
    const links = event.currentTarget.parentNode.querySelectorAll("a");
    links.forEach((link) => {
      if (link !== event.currentTarget) {
        link.classList.remove("active");
      }
    });
  }

  return (
    <div className="slider-links">
      <a
        href="#"
        className="active"
        onClick={(event) => handleClick(event, "marketing")}
      >
        Marketing
      </a>
      <a href="#" onClick={(event) => handleClick(event, "branding")}>
        Branding
      </a>
      <a href="#" onClick={(event) => handleClick(event, "photography")}>
        Photography
      </a>
    </div>
  );
}
export default function Slide() {
  const [defaultImage, setDefaultImage] = useState({});
  const [category, setCategory] = useState("marketing");
  const filteredData = dataDigitalBestSeller.filter(
    (item) => item.category === category
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <img className="slick-prev" src={leftArrow} alt="" />,
    nextArrow: <img className="slick-next" src={rightArrow} alt="" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          prevArrow: null, // hide prev arrow
          nextArrow: null, // hide next arrow
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          prevArrow: null, // hide prev arrow
          nextArrow: null, // hide next arrow
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: null, // hide prev arrow
          nextArrow: null, // hidenext arrow
        },
      },
    ],
  };
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };

  return (
    <div className="MainSilders">
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
        Portfolio
      </Typography>
      <p className="desc1">take a look at the magic we do</p>
      <SliderLinks setCategory={setCategory} />
      <Slider {...settings} key={category}>
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-top">
              <img
                src={item.linkImg}
                alt={item.title}
                onError={handleErrorImage}
              />
            </div>
            <div className="card-bottom">
              <div className="card-bottom1">
                <h1>{item.title}</h1>
                <div className="card-bottom2">
                  <p>{item.desc}</p>
                  <a href="#" className="view-more-link">
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
