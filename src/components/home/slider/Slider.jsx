import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide from "./sliderdata.js";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.scss";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
// чи можеш проаналізувати код даного файлу Slider.jsx

const Slider = () => {
  return (
    <div className="container">
      <h1>popular food</h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slide.map((obj) => (
          <SwiperSlide key={obj.id}>
            <img src={obj.src} alt="slide_image" />
            <div className="tranding-slide-content">
              <h1 className="food-price">{obj.price}</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">{obj.name}</h2>
                <h3 className="food-rating">
                  <span>{obj.rating}</span>
                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
