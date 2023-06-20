import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { data } from './data';

const Medical = () => {
    return (
      <div className="container mx-auto mb-10">
        <SectionTitle
          heading={"Our Medical Care"}
          subheading={"Services We Provide"}
        ></SectionTitle>

        <div className="grid md:grid-cols-4 gap-4 my-10 place-items-center">
          {data.map((d, index) => (
            <div data-aos="zoom-in" key={index}>
              <div>
                <img className="" src={d.image} alt="" />
                <p className="text-center font-bold bg-indigo-600 text-white p-2">
                  {d.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-7 text-center">
          <button className="btn text-white bg-[#FF8B42]">
            Load more department
          </button>
        </div>
      </div>
    );
};

export default Medical;