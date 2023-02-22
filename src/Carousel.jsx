import React from "react";
import Agoda from "./assets/agoda.png";
import Airtel from "./assets/airtel.png";
import Hero from "./assets/hero-motor.png";
import Kpmg from "./assets/KPMG.png";
import Nestle from "./assets/nestle.png";
import Pepsi from "./assets/pepsi.png";
import Tata from "./assets/tata.png";

const Carousel = () => {
  return (
    <div>
      <div className="flex justify-between border-y-2 py-8 px-10 font-inter">
        <div>
          <p className="font-normal text-base">Industry veterans</p>
          <p className="font-semibold text-lg">trust us:</p>
        </div>

        <img src={Agoda} alt="company" className="w-32 h-14 p-2" />
        <img src={Airtel} alt="company" className="w-32 h-14 p-2" />
        <img src={Hero} alt="company" className="w-32 h-14 p-2" />
        <img src={Kpmg} alt="company" className="w-32 h-14 p-2" />
        <img src={Nestle} alt="company" className="w-32 h-14 p-2" />
        <img src={Pepsi} alt="company" className="w-32 h-14 p-2" />
        <img src={Tata} alt="company" className="w-32 h-14 p-2" />
      </div>
    </div>
  );
};

export default Carousel;
