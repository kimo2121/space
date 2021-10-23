import React, { Component } from "react";
import Slider from "react-slick";
import "./styles.css";
import flag from "../../assets/images/flag.png";
import flyingBull from "../../assets/images/flyingBull.png";
import guiter from "../../assets/images/guiter.png";
import spaceBull from "../../assets/images/spaceBull.png";
import person from "../../assets/images/person.png";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-component">
      <Slider {...settings}>
        <div className="each-slide">
          <img src={flyingBull} alt="" />
        </div>
        <div className="each-slide">
          <img src={person} alt="" />
        </div>
        <div className="each-slide">
          <img src={spaceBull} alt="" />
        </div>
        <div className="each-slide">
          <img src={guiter} alt="" />
        </div>
        <div className="each-slide">
          <img src={flag} alt="" />
        </div>
      </Slider>
    </div>
  );
};
export default SliderComponent;
