
import SectionTitle from "../../../components/SectionTitle";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { expertData } from "./ExpertData";
const Experts = () => {
  return (
    <div className="container mx-auto my-10">
      <SectionTitle
        heading={"Our Medical Experts"}
        subheading={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus  felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      ></SectionTitle>

      <div className="my-16">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div>
            {expertData.map((ex) => (
              <SwiperSlide>
                <div className="card bg-base-100 shadow-lg">
                  <figure>
                    <img className=""
                      src={ex.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{ex.name}</h2>
                    <p>{ex.title}</p>
                    <p>{ex.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Experts;
