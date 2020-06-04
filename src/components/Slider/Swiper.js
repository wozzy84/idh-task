import React from "react";
import Swiper from "react-id-swiper";
import { useState } from "react";
import { workers } from "../../assets/workers-data";

const Slider = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const [swiper, updateSwiper] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (swiper !== null) {
      swiper.slideTo("3");
    }
  };

  return (
    <>
      <Swiper {...params} getSwiper={updateSwiper}>
        {workers.map((el, index) => {
          return (
            <div key={index} className="slide">
              <div className="slide__text-container">
                <p className="slide__job">{el.position}</p>
                <p className="slide__name">{el.name}</p>
              </div>
            </div>
          );
        })}
      </Swiper>
      <button onClick={handleClick}>Klik</button>
      <div className="test"></div>
    </>
  );
};

export default Slider;
