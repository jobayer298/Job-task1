import React, { useRef, useState } from "react";
import image from "../../../assets/images/Feedback/person.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Feedback.css";


const Feedback = () => {
  return (
    <div className="container mx-auto feedback-bg py-10 text-white rounded-xl">
      <h2 className="text-center py-6">Patient Feedback</h2>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex items-center gap-20 md:px-36">
              <img src={image} alt="" />
              <div>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan duis posuere scelerisque curabitur lorem. Viverra at
                  venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut
                  nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p>
                  TOM COOPPER <br /> <span className="text-red-500">Managing Director Or Art</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-20 md:px-36">
              <img src={image} alt="" />
              <div>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan duis posuere scelerisque curabitur lorem. Viverra at
                  venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut
                  nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p>
                  TOM COOPPER <br /> <span className="text-red-500">Managing Director Or Art</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-20 md:px-36">
              <img src={image} alt="" />
              <div>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan duis posuere scelerisque curabitur lorem. Viverra at
                  venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut
                  nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p>
                  TOM COOPPER <br /> <span className="text-red-500">Managing Director Or Art</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Feedback;
