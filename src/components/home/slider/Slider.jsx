import "./slider.scss";
// import images from "./dataSlider";

import left from "./icon/back.png";
import right from "./icon/next.png";

const Slider = () => {
  const images = [
    "./sliderImg/1img.jpeg",
    "./sliderImg/4img.jpeg",
    "./sliderImg/2img.jpeg",
    "./sliderImg/3img.jpeg",
  ];

  return (
    <div className="slider">
      <div className="item">
        <img className="slider-img" src={images[0]} alt="" />;
        <img className="slider-img" src={images[1]} alt="" />;
      </div>
      <div className="slider__button">
        <div className="slider__button-left">
          <img src={left} alt="" />
        </div>
        <div className="slider__button-right">
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
