import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { BsChatLeftDots } from "react-icons/bs";
import "../styles.css";
import { IoShareSocialOutline } from "react-icons/io5";

import Pet1 from "../assets/pet1.png";
import Pet2 from "../assets/pet2.png";
import Pet3 from "../assets/pet3.png";
import Pet4 from "../assets/pet4.png";
import Pet5 from "../assets/pet5.png";
import Pet6 from "../assets/pet6.png";
import Icon1 from "../assets/petIcon1.png";
import Icon2 from "../assets/petIcon2.png";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Customers from "./Customers";
import Puppies from "./Puppies";
import Footer from "./Footer";

const OnePet = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className=" md:hidden">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
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
          <img src={Pet4} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
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
          <img src={Pet4} />
        </SwiperSlide>
      </Swiper>
      <div className=" p-2">
      <div className=" flex p-2 mt-10  space-x-10">
        <div className=" flex flex-col justify-start">
          <p className=" text-[24px] font-extrabold">Shiba Inu Sepia</p>
          <p className=" text-[20px] font-bold">34.000.000 VND</p>
        </div>
        <img width={67} height={67} src={Pet6} />
      </div>
      <div className=" px-4 flex justify-between gap-4 ">
        <button className=" border border-black p-2 rounded-[57px] bg-custom-blue text-white w-[138px]">
          Contact Us
        </button>

        <button className=" flex items-center justify-center gap-4 border border-custom-blue p-2 rounded-[57px] text-custom-blue font-semibold w-[233px]">
          <BsChatLeftDots />
          Chat with Monito
        </button>
      </div>
      <div className=" flex justify-between font-bold px-5 mt-5 mb-5">
        <p>Information </p>
        <div className=" flex gap-2 items-center">
          <IoShareSocialOutline />
          <p>Share</p>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <td>SKU</td>
            <td>: #1000078</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>: Female</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>: 2 Months</td>
          </tr>

          <tr>
            <td>Size</td>
            <td>: Small</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>: Appricot & Tan</td>
          </tr>
          <tr>
            <td>Vaccinated</td>
            <td>: Yes</td>
          </tr>

          <tr>
            <td>Dewormed</td>
            <td>: Yes</td>
          </tr>
          <tr>
            <td>Cert</td>
            <td>: Yes (MKA)</td>
          </tr>
          <tr>
            <td>Microchip</td>
            <td>: Yes</td>
          </tr>

          <tr>
            <td>Location</td>
            <td>: Vietnam</td>
          </tr>
          <tr>
            <td>Published Date</td>
            <td>: 12-Oct-2022</td>
          </tr>
          <tr>
            <td>Additional Information</td>
            <td>
              : Pure breed Shih Tzu. Good body structure. With MKA cert and
              microchip. Father from champion lineage.
            </td>
          </tr>
        </table>
      </div>
      <div class=" space-y-5 flex flex-col justify-center p-2 bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] h-[76px] w-282px mt-5 to-[#FFE7BA] bg-[length:100%] bg-[0%_6%,75%_100%]  mx-5">
        <div className="flex items-center gap-3 font-bold text-custom-blue">
          <img width={24} src={Icon1} />
          <p className=" text-[14px] ">100% health guarantee for pets</p>
        </div>
        <div className="flex items-center gap-3 font-bold text-custom-blue" >
          <img width={24} src={Icon2} />
          <p className=" text-[14px]">100% guarantee of pet identification</p>
        </div>
      </div>
      </div>

      <Customers />

      <div className=" p-2">
        <p className=" text-[24px] font-bold text-custom-blue">See more puppies</p>
      </div>

      <Puppies />
      <Footer />
      </div>
    </>
  );
};

export default OnePet;
