import React from 'react';
import icon from "../../assets/images/Logo/vector.png"
import { FaDownload, FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaTwitter, FaVoicemail } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import './Footer.css'

const Footer = () => {
    return (
      <div>
        <ScrollToTop color='white' smooth />
        <footer className="footer p-10 bg-[#273240] text-white">
          <div className="text-white">
            <h3 className="flex items-center gap-2 text-[#FF8B42]">
              {" "}
              <img src={icon} alt="" /> Doctor Guide
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Nulla ut cras velit senectus id tellus aliquam <br /> enim felis.
              Sed commodo cursus tellus sapien, viverra <br /> imperdiet morbi
              dignissim. Consequat in metus arcu eget.
            </p>
            <div className="flex gap-5 items-center">
              <p className="bg-[#FF8B42] text-white h-[30px] w-[30px] rounded-md grid place-items-center text-2xl">
                <FaFacebook />
              </p>
              <p className="bg-[#FF8B42] text-white h-[30px] w-[30px] rounded-md grid place-items-center text-2xl">
                <FaInstagram />
              </p>
              <p className="bg-[#FF8B42] text-white h-[30px] w-[30px] rounded-md grid place-items-center text-2xl">
                <FaTwitter />
              </p>
            </div>
          </div>
          <div className="text-white">
            <h5 className="">Our Services</h5>
            <p className="border-b-2 border-white pb-2">Bills & Insurance</p>
            <p className="border-b-2 border-white pb-2">Cancer Screening</p>
            <p className="border-b-2 border-white pb-2">Cardiac Surgery</p>
            <p className="border-b-2 border-white pb-2">Neurology</p>
            <p className="border-b-2 border-white pb-2">Covid-19 Vaccine</p>
          </div>
          <div className="text-white">
            <h5 className="">Contact Us</h5>
            <p className="flex gap-2">
              <span className="text-[#FF8B42]">
                <FaLocationArrow />
              </span>
              1234 Uttara Khal Pahr, <br /> Image Osman Center, <br /> Sonargao,
              Janapath,
            </p>
            <p className="flex gap-2">
              <span className="text-[#FF8B42]">
                <FaPhone />
              </span>
              +09876543211
            </p>
            <p className="flex gap-2">
              <span className="text-[#FF8B42]">
                <FaVoicemail />
              </span>
              doctorguide@example.com
            </p>
          </div>
          <div className="text-white">
            <h5 className="">Doctor Schedule</h5>
            <p>
              At vero eos et accusam et justou <br /> dolores et ea rebum tet
              clita <br />
              kasd gubergren no sea takimata.
            </p>
            <button className="flex items-center gap-2 bg-[#FF8B42] btn text-white border-0 btn-primary">
              {" "}
              <FaDownload /> View schedule
            </button>
          </div>
        </footer>
        <footer className="footer px-10 py-4 border-t bg-[#273240] text-white border-base-300 ">
          <p>Copyright © 2022. All Rights Reserved. Made with by Solutya.</p>
          <div>
            <ul className="text-white flex gap-3 items-center">
              <li>
                <Link>Latest News</Link>
              </li>
              <li>
                <Link>Privacy Policy </Link>
              </li>
              <li>
                <Link> Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
};

export default Footer;