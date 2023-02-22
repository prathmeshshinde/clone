import React from "react";
import Left from "./assets/left-arrow.png";
import Right from "./assets/right-arrow.png";
import Rotating from "./assets/Rotating.jpg";
import RotatingBanner from "./assets/Rotating-Banner.jpg";
import MentorshipBg from "./assets/mentorships-bg.png";
import PracticeBg from "./assets/practice-bg.png";
import LearnBg from "./assets/learn-bg.png";

const Content = () => {
  return (
    <div className="px-32">
      <div className="flex justify-center items-center mt-20">
        <img
          src={Left}
          alt="arrow"
          className="w-10 h-8 p-2 rounded-full bg-white drop-shadow-lg"
        />

        <img
          src={Rotating}
          alt="arrow"
          className=" w-6/12 p-6 drop-shadow-lg rounded-28"
        />

        <img
          src={RotatingBanner}
          alt="arrow"
          className="w-6/12 p-6  drop-shadow-lg rounded-28 "
        />

        <img
          src={Right}
          alt="company"
          className="w-10 h-8 p-2 rounded-full bg-white drop-shadow-lg"
        />
      </div>

      <div className="flex justify-center mb-20">
        <span className="h-2 w-2 bg-gray-400 rounded-full inline-block m-1"></span>
        <span className="h-2 w-2 bg-gray-400 rounded-full inline-block m-1"></span>
        <span className="h-2 w-2 bg-black rounded-full inline-block m-1"></span>
        <span className="h-2 w-2 bg-gray-400 rounded-full inline-block m-1"></span>
      </div>

      <div className="flex justify-center relative mb-10 ">
        <div className="flex justify-center">
          <img src={LearnBg} alt="arrow" className=" p-6  drop-shadow-lg " />
          <p className="absolute text-learn-text top-52 z-10 p-3 text-3xl font-semibold">
            Learn
          </p>
        </div>

        <div className="flex justify-center">
          <img src={PracticeBg} alt="arrow" className=" p-6  drop-shadow-lg " />
          <p className="absolute text-prac-text top-52 z-10 p-3 text-3xl font-semibold">
            Practice
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={MentorshipBg}
            alt="arrow"
            className=" p-6  drop-shadow-lg "
          />
          <p className="absolute text-mentor-text top-52 z-10 p-3 text-3xl font-semibold">
            Mentorships
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
