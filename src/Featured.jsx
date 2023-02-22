import React from "react";
import Left from "./assets/left-arrow.png";
import Right from "./assets/right-arrow.png";
import Code from "./assets/codegoda.jpg";
import Flipkart from "./assets/flipkart.png";
import News from "./assets/newsletter.jpg";
import { ReactComponent as Calendar } from "./assets/calendar.svg";
import { ReactComponent as People } from "./assets/people.svg";

const Featured = () => {
  return (
    <div className="px-40">
      <div className="hello">
        <div className="flex justify-between items-center bg-featured">
          <div>
            <p className="text-3xl font-semibold text-host-btn ">
              Featured Opportunities
            </p>
            <p className="text-lg font-normal text-host-btn">
              Participate in these exceptional opportunities curated for the
              exceptional you!
            </p>
          </div>
          <div className="flex">
            <img
              src={Left}
              alt="arrow"
              className="w-10 h-10 p-3 rounded-full bg-arrow drop-shadow-lg mx-5 border-solid border-slate-50"
            />
            <img
              src={Right}
              alt="company"
              className="w-10 h-10 p-3 rounded-full bg-arrow drop-shadow-lg mx-5 border-solid border-slate-50"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="border-solid border-border-color border-2 rounded-2xl">
            <div>
              <img src={Code} alt="company" className="rounded-2xl " />
            </div>
            <div className="flex  flex-wrap">
              <p className=" flex flex-warp my-3 ml-5 mr-20 text-host-btn text-base font-semibold">
                Agoda is back with Codegoda - Exciting rewards up for grab!!
              </p>
            </div>
            <div className="flex mb-4 mx-5 ">
              <div className="flex items-center bg-arrow rounded-3xl py-1.5 px-2.5 mr-2">
                <People />
                <p className="text-xs ml-1.5 font-normal    ">
                  6,088 Registered
                </p>
              </div>
              <div className="flex items-center bg-arrow rounded-3xl py-1.5 px-2.5">
                <Calendar />
                <p className="text-xs ml-1.5">1 month left</p>
              </div>
            </div>
          </div>
          <div className="border-solid border-border-color border-2 rounded-2xl">
            <div>
              <img src={Flipkart} alt="company" className="rounded-2xl " />
            </div>
            <div className="flex  flex-wrap">
              <p className=" flex flex-warp my-3 ml-5 mr-20 text-host-btn text-base font-semibold">
                Flipkart 4.0. is now Live | Exciting Prizes up for Grabs,
                register now!
              </p>
            </div>
            <div className="flex mb-4 mx-5 ">
              <div className="flex items-center bg-arrow rounded-3xl py-1.5 px-2.5 mr-2">
                <People />
                <p className="text-xs ml-1.5 font-normal">5,450 Registered</p>
              </div>
              <div className="flex items-center bg-arrow rounded-3xl py-1.5 px-2.5">
                <Calendar />
                <p className="text-xs ml-1.5">1 month left</p>
              </div>
            </div>
          </div>
          <div className="border-solid border-border-color border-2 rounded-2xl">
            <div>
              <img src={News} alt="company" className="rounded-2xl " />
            </div>
            <div className="flex  flex-wrap">
              <p className=" flex flex-warp my-3 ml-5 mr-20 text-host-btn text-base font-semibold">
                Unstop Awards 2023 is now live! Unstop Awards 2023 is now live!
              </p>
            </div>
            <div className="flex mb-4 mx-5 ">
              <div className="flex items-center bg-arrow rounded-3xl py-1.5 px-2.5 mr-2">
                <People />
                <p className="text-xs ml-1.5 font-normal    ">
                  2,945 Registered
                </p>
              </div>
              <div className="flex items-center bg-arrow rounded-3xl py-1.5 px-2.5">
                <Calendar />
                <p className="text-xs ml-1.5">1 month left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
