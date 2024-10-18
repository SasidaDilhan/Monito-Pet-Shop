import React, { useEffect, useState } from "react";
import { getCustomers } from "../api/customerAPI";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../styles.css";

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";

const App = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomerData = async () => {
      try {
        const cusData = await getCustomers();
        setCustomers(cusData);
      } catch (error) {
        console.log("Fetching customer data failed: " + error);
      }
    };

    getCustomerData();
  }, []);

  return (
    <>
      <div className=" p-2">
        <p className=" text-[24px] font-bold text-custom-blue">Our Lovely Customers</p>
      </div>
      <div className=" p-2">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-5"
      >
        {customers.length > 0 ? (
          customers.map((cus, index) => (
            <SwiperSlide key={index}>
              <div className="relative lg:hidden block md:block">
                <img className="w-full" src={cus.image} alt="Customer" />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="relative">
              <p>No customers found.</p>
            </div>
          </SwiperSlide>
        )}

        {/* Dynamic Customer Slides */}
      </Swiper>
      </div>
    </>
  );
};

export default App;
