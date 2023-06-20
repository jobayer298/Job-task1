import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import image1 from '../../../assets/images/Events/1.png'
import image2 from '../../../assets/images/Events/2.png'
import { FaCalendar, FaClock, FaLocationArrow } from 'react-icons/fa';

const Events = () => {
    return (
      <div className="container mx-auto my-10">
        <SectionTitle
          heading={"Upcoming Events"}
          subheading={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        ></SectionTitle>

        <div className="grid md:grid-cols-2 place-items-center gap-4 p-8 md:p-0 mt-10">
          <img className="w-3/4" src={image1} alt="" />
          <div className="space-y-5">
            <h3 className="text-black">How to lead a good healthy life</h3>
            <div className="flex gap-3 items-center">
              <p className="flex items-center gap-1">
                <span className="text-orange-500">
                  <FaCalendar />
                </span>
                15 Oct, 2019
              </p>
              <span className="text-orange-500">
                <FaClock />
              </span>
              8:00 AM - 5:00 PM
              <span className="text-orange-500">
                <FaLocationArrow />
              </span>
              Uttara, TX 70240
            </div>
            <p>
              Early had add equal china quiet visit. Appear an manner as no
              limits either praise in. In in written on charmed justice is
              amiable farther besides. Law insensible middletons unsatiable for
              apartments boy delightful unreserved. Early had add equal china
              quiet visit. Appear an manner as no limits either praise in. In in
              written on charmed justice is amiable farther besides. Law
              insensible middletons unsatiable for apartments boy delightful
              unreserved.
            </p>
            <div className="flex gap-3 ">
              <button className="btn bg-[#FF8B42] text-white">Book now</button>
              <button className="btn btn-outline text-[#FF8B42]">
                10 available
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 place-items-center p-8 mt-7">
          <div className="space-y-5">
            <h3 className="text-black">How to lead a good healthy life</h3>
            <div className="flex gap-3 items-center">
              <p className="flex items-center gap-1">
                <span className="text-orange-500">
                  <FaCalendar />
                </span>
                15 Oct, 2019
              </p>
              <span className="text-orange-500">
                <FaClock />
              </span>
              8:00 AM - 5:00 PM
              <span className="text-orange-500">
                <FaLocationArrow />
              </span>
              Uttara, TX 70240
            </div>
            <p>
              Early had add equal china quiet visit. Appear an manner as no
              limits either praise in. In in written on charmed justice is
              amiable farther besides. Law insensible middletons unsatiable for
              apartments boy delightful unreserved. Early had add equal china
              quiet visit. Appear an manner as no limits either praise in. In in
              written on charmed justice is amiable farther besides. Law
              insensible middletons unsatiable for apartments boy delightful
              unreserved.
            </p>
            <div className="flex gap-3 ">
              <button className="btn bg-[#FF8B42] text-white">Book now</button>
              <button className="btn btn-outline text-[#FF8B42]">
                10 available
              </button>
            </div>
          </div>
          <img className="w-3/4" src={image2} alt="" />
        </div>
      </div>
    );
};

export default Events;