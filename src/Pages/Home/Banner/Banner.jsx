import React from 'react';
import Button from '../../../components/Button';
import './Banner.css'
import img1 from '../../../assets/images/Banner/kisspng-physician-uniform-scrubs-white-coat-medicine-foreign-doctor-material-5a68c8b33322b6.jpg'
import img2 from '../../../assets/images/Banner/kisspng-physician-nursing-medicine-health-care-foreign-doctor-5a6b98c3c69386 1.png'
import icon from '../../../assets/images/Logo/icon.png'
import { FaUser } from "react-icons/fa";


const Banner = () => {
    return (
      <section className="container mx-auto">
        <div className="md:grid grid-cols-2 place-items-center">
          <div className="space-y-5">
            <h2 className="font-bold text-black text-4xl">
              Find the care you need
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              sapiente dignissimos quaerat sed quia neque quae omnis porro
              libero optio reprehenderit, veniam aliquam quasi! Fugit
              accusantium assumenda voluptatibus pariatur commodi?
            </p>
            <Button text="Make Appointment"></Button>
          </div>
          <div>
            <div className="relative first-bg flex">
              <img className="h-[508px]" src={img1} alt="" />
              <img className="h-[508px]" src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-28 place-items-center my-10">
          <div>
            <div className="relative bg-image">
              <img className="h-[508px]" src={img2} alt="" />
              <div className="font-bold grid place-items-center rounded-2xl bg-slate-50  shadow-2xl py-3 w-[250px] absolute top-0 left-[-112px] z-10">
                <div className="flex items-center gap-10 ">
                  <div className="bg-indigo-500 text-white w-[30px] h-[30px] rounded-full grid place-items-center ">
                    <FaUser />
                  </div>
                  <div>
                    <p>Consult online</p>
                    <p>Best solution</p>
                  </div>
                </div>
              </div>
              <div className="font-bold grid place-items-center rounded-2xl bg-slate-50  shadow-2xl py-3 w-[250px] absolute bottom-[40px] left-[240px]">
                <div className="flex items-center gap-10 ">
                  <div className="bg-indigo-500 text-white w-[30px] h-[30px] rounded-full grid place-items-center ">
                    <FaUser />
                  </div>
                  <div>
                    <p>Consult online</p>
                    <p>Best solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-9">
            <h2 className="font-bold text-black text-4xl">
              Sick kid? How to deal with a Child's fever: 4 steps
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <img src={icon} alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={icon} alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={icon} alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={icon} alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Banner;