import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles.css";

import Pet1 from "../assets/pet1.png";
import Pet2 from "../assets/pet2.png";
import Pet3 from "../assets/pet3.png";
import Pet4 from "../assets/pet4.png";
import Pet5 from "../assets/pet5.png";
import Pet6 from "../assets/pet6.png";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const OnePet = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={Pet1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet6} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Pet1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pet6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OnePet;
