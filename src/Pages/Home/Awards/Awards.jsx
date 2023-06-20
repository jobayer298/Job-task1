import React from "react";
import "./Awards.css";
import { FaUser } from "react-icons/fa";
import Award from "./Award";

const Awards = () => {
  return (
    <div className="py-10 award-bg flex items-center text-white">
      <div className="container py-20 mx-auto grid md:grid-cols-2 lg:grid-cols-4 text-center gap-5">
        <Award icon="" name={"Medical Experts"} number="50"></Award>
        <Award icon="" name={"Hospital Rooms"} number="500"></Award>
        <Award icon="" name={"Awwwards Win"} number="20"></Award>
        <Award icon="" name={"Happy Patients"} number="2000"></Award>
      </div>
    </div>
  );
};

export default Awards;
