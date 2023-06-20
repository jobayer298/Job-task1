import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Schedule from './Schedule/Schedule';
import Medical from './Medical/Medical';
import Awards from './Awards/Awards';
import Experts from './Experts/Experts';
import Feedback from './Feedback/Feedback';
import Events from './Events/Events';
import Subscribe from './Subscribe/Subscribe';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
     useEffect(() => {
       AOS.init();
     }, []);
    return (
        <div>
           <Banner></Banner>
           <Schedule></Schedule>
           <Medical></Medical>
           <Awards></Awards>
           <Experts></Experts>
           <Feedback></Feedback>
           <Events></Events>
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;