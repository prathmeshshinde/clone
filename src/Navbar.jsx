import React from "react";
import { ReactComponent as Unstop } from "./assets/unstop.svg";
import { ReactComponent as Search } from "./assets/search.svg";
import Reading from "./assets/reading.png";
import target from "./assets/target.png";
import statistics from "./assets/statistics.png";
import light from "./assets/idea.png";
import jobs from "./assets/briefcase.png";
import { ReactComponent as Host } from "./assets/host-icon.svg";
import { ReactComponent as Login } from "./assets/login_icon.svg";
import { ReactComponent as Ham } from "./assets/hamburger.svg";

const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 z-20 px-32 bg-white">
      <div className="flex justify-between items-center bg-white ">
        <div className="flex items-center">
          <Unstop className=" w-24 scale-175" />
          <div className="border-l-2 border-left-border pl-2 my-2 ml-2">
            <p className="text-sm">Formerly</p>
            <p className="text-sm font-medium">Dare2Compete</p>
          </div>
          <div className="pl-6">
            <label>
              <Search className=" absolute w-5 -top-3 left-2.5" />
              <input
                type="text"
                placeholder="Search Opportunites "
                className="border-2 border-input-border bg-bg-input rounded-lg pl-10 pr-10  py-1"
              />
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="px-3 flex flex-col items-center">
            <img src={Reading} alt="reading" className="w-5" />
            <p>Learn</p>
          </div>
          <div className="px-3 flex flex-col items-center">
            <img src={target} alt="target" className="w-5" />
            <p>Practice</p>
          </div>
          <div className="px-3 flex flex-col items-center">
            <img src={statistics} alt="stats" className="w-5" />
            <p>Compete</p>
          </div>
          <div className="px-3 flex flex-col items-center">
            <img src={light} alt="light" className="w-5" />
            <p>Mentorship</p>
          </div>
          <div className="px-3 flex flex-col items-center">
            <img src={jobs} alt="jobs" className="w-5" />
            <p>Jobs</p>
          </div>

          <button className="bg-host-btn flex items-center px-5 rounded-full mx-3">
            <Host />
            <p className="px-2 text-white">Host</p>
          </button>
          <button className="bg-login-btn flex items-center px-5 rounded-full">
            <p className="px-2 text-white">Login</p>
            <Login />
          </button>
          <button className=" flex items-center px-3 rounded-full">
            <Ham />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
