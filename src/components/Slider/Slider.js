import React from "react";
import Swiper from "react-id-swiper";
import { workers } from "../../assets/workers-data";
import { useSelector, useDispatch } from "react-redux";

const Slider = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const initialSlide = useSelector((state) => state.setSlide);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "OPEN_MODAL",
      open: false,
    });
    dispatch({
      type: "SET_SLIDE",
      id: 0,
    });
  };

  return (
    <>
      <Swiper {...params} activeSlideKey={initialSlide}>
        {workers.map((el, index) => {
          return (
            <div key={index} id={index} className="slide">
              <button className="close-btn" onClick={handleClick}></button>
              <div className="slide__text-container">
                <p className="slide__job">{el.position}</p>
                <p className="slide__name">{el.name}</p>
              </div>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
