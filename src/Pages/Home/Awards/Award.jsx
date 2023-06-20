import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const Award = ({icon, number, name}) => {
  const [count , setCount] = useState(false)
    return (
      <div className="space-y-2">
        <p className="text-7xl w-[70px] mx-auto">
          <FaUser />
        </p>
        <h4 className="border-b-4 text-3xl pb-2 border-white">
          <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
            { count && <CountUp duration={2.75} end={number} />}
          </ScrollTrigger>
        </h4>
        <h4 className="text-3xl">{name}</h4>
      </div>
    );
};

export default Award;