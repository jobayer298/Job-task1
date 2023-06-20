
import img from '../../../assets/images/Banner/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6.jpg'
import './Schedule.css'
import SingleSchedule from '../../../components/SingleSchedule';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Schedule = () => {
    return (
      <div className="my-11 container mx-auto">
        <div className="grid grid-cols-2 place-items-center">
          <div>
            <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <SingleSchedule
                    time={"8.50"}
                    name={"General Practitioner"}
                    doctorName={"Dr. Robbert Algazali"}
                  ></SingleSchedule>
                  <SingleSchedule
                    time={"8.50"}
                    name={"General Practitioner"}
                    doctorName={"Dr. Robbert Algazali"}
                  ></SingleSchedule>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
          </div>
          <div className="bg md:w-1/2">
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Schedule;


 