import React from "react";
import Graph from "./assets/growth-graph.png";
import Right from "./assets/digit-right.png";
import Left from "./assets/digit-left.png";

const Growth = () => {
  return (
    <div className="mb-28 px-40">
      <div className="flex items-center text-host-btn mt-20 mb-10">
        <p className="text-54 font-normal mr-5">
          Our <span className="text-54 font-semibold  ">Numbers</span>
        </p>
        <img src={Graph} alt="graph" className="w-10 h-10" />
      </div>
      <div>
        <div className="flex  ">
          <div className="text-text-color w-1/4 border-2 pt-20 pl-20 pb-10 rounded-l-3xl">
            <div className="relative">
              <p className="text-50 font-semibold z-20  ">110K+</p>
              <p className="text-2xl font-normal z-20"> Opportunities</p>
              <span className="h-32 w-32 absolute -top-14 -left-6 -z-10 bg-fe rounded-full inline-block m-1"></span>
            </div>
          </div>

          <div className=" text-text-two w-1/4 border-r-2 border-t-2 border-b-2 pt-20 pl-20 pb-10">
            <div className="relative">
              <p className="text-50 font-semibold z-20  ">110K+</p>
              <p className="text-2xl font-normal z-20"> Opportunities</p>
              <span className="h-32 w-32 absolute -top-14 -left-6 -z-10 bg-circle-two rounded-full inline-block m-1"></span>
            </div>
          </div>

          <div className=" text-host-btn w-1/4 border-r-2 border-t-2   rounded-tr-3xl pt-20 pl-20 pb-10">
            <div className="relative">
              <p className="text-50 font-semibold z-20  ">42K+</p>
              <p className="text-2xl font-normal z-20"> Organisations</p>
              <span className="h-32 w-32 absolute -top-14 -left-6 -z-10 bg-circle-three rounded-full inline-block m-1"></span>
            </div>
          </div>
          <div className="w-1/5 pl-3 pt-6">
            <img src={Right} alt="graph" className=" " />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/5 pr-4 pt-6">
            <img src={Left} alt="graph" className=" " />
          </div>
          <div className="text-text-four w-1/4 border-l-2 border-r-2 border-b-2 pt-20 pl-20 pb-10 rounded-bl-3xl">
            <div className="relative">
              <p className="text-50 font-semibold z-20  ">19.1Mn+</p>
              <p className="text-2xl font-normal z-20"> Assessments</p>
              <span className="h-32 w-32 absolute -top-14 -left-6 -z-10 bg-circle-four rounded-full inline-block m-1"></span>
            </div>
          </div>

          <div className=" text-text-five w-1/4 border-r-2 border-t-2  border-b-2 pt-20 pl-20 pb-10">
            <div className="relative">
              <p className="text-50 font-semibold z-20  ">110K+</p>
              <p className="text-2xl font-normal z-20"> Opportunities</p>
              <span className="h-32 w-32 absolute -top-14 -left-6 -z-10 bg-circle-five rounded-full inline-block m-1"></span>
            </div>
          </div>

          <div className=" text-text-six w-1/4 border-r-2 border-t-2 border-b-2 rounded-tr-3xl rounded-br-3xl pt-20 pl-20 pb-10">
            <div className="relative">
              <p className="text-50 font-semibold z-20  ">42K+</p>
              <p className="text-2xl font-normal z-20"> Organisations</p>
              <span className="h-32 w-32 absolute -top-14 -left-6 -z-10 bg-circle-six rounded-full inline-block m-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
