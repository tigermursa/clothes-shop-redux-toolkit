// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic movement
    autoplaySpeed: 3000, // Set the time between each slide (in milliseconds)
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-96 object-cover"
            src="/public/freestocks-_3Q3tsJ01nc-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-96 object-cover"
            src="/public/malemoder-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-96 object-cover"
            src="/public/male-model2.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
