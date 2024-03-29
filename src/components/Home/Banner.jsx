import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import slide_image_1 from "../../assets/images/img_1.jpg";
import slide_image_2 from "../../assets/images/img_2.jpg";
import slide_image_3 from "../../assets/images/img_3.jpg";
import slide_image_4 from "../../assets/images/img_4.jpg";
import slide_image_5 from "../../assets/images/img_5.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto mt-20 pt-4">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
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
        <SwiperSlide className="relative">
          <img
            src={slide_image_1}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide_image_2}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide_image_3}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide_image_4}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slide_image_5}
            alt="slide_image"
          />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Banner;
