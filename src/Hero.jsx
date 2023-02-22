import React from "react";
import Learn from "./assets/home-hero-learn.png";
import Practice from "./assets/home-hero-practice.png";
import Mentorship from "./assets/home-hero-mentorships.png";
import Compete from "./assets/home-hero-compete.png";
import Jobs from "./assets/home-hero-jobs.png";
import Blogs from "./assets/home-hero-blogs.png";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-80 font-inter px-40 mt-20">
        <div className=" flex-1 text-host-btn">
          <p className=" font-normal text-40">Connecting</p>

          <p className="font-bold text-50 pb-5">
            Talent, Colleges,<br></br>Recruiters
          </p>
          <hr className="w-56 h-1 bg-yellow-400"></hr>
          <p className="font-normal text-xl pt-5">
            Explore opportunities from across the globe to learn, <br></br>
            showcase skills, gain CV points, & get hired by your<br></br> dream
            company.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1  ">
          <div className="relative">
            <img src={Learn} alt="learn" className="w-44" />
            <p className=" absolute top-2 z-10 p-3 font-semibold">Learn</p>
          </div>
          <div className="relative">
            <img src={Practice} alt="learn" className="w-44" />
            <p className=" absolute top-2 z-10 p-3 font-semibold">Practice</p>
          </div>
          <div className="relative">
            <img src={Mentorship} alt="learn" className="w-44" />
            <p className=" absolute top-2 z-10 p-3 font-semibold">Mentorship</p>
          </div>
          <div className="relative">
            <img src={Compete} alt="learn" className="w-44" />
            <p className=" absolute top-2 z-10 p-3 font-semibold">Compete</p>
          </div>
          <div className="relative">
            <img src={Jobs} alt="learn" className="w-44" />
            <p className=" absolute top-2 z-10 p-3 font-semibold">Jobs</p>
          </div>
          <div className="relative">
            <img src={Blogs} alt="learn" className="w-44" />
            <p className=" absolute top-2 z-10 p-3 font-semibold">Blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
