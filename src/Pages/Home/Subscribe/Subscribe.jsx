import React from 'react';
import image from "../../../assets/images/Subscribe/doctor.png"

const Subscribe = () => {
    return (
      <div className="my-10 container mx-auto text-white bg-[#0089BA] py-10 rounded-xl grid md:grid-cols-2 place-items-center">
        <img src={image} alt="" />
        <div className="space-y-4">
          <h2>Subscribe Now</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full  "
            />
            <button className="btn bg-[#FF8B42] border-0 absolute px-8 right-0 btn-primary text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
};

export default Subscribe;