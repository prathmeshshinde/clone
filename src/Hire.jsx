import React from "react";
import Student from "./assets/student.png";
import Pro from "./assets/professional.png";
import Team from "./assets/teams.png";
import Solo from "./assets/solo.png";
import Jobs from "./assets/job-content.png";
import Intern from "./assets/internship.png";
import Hiring from "./assets/Hiring.png";
import Paid from "./assets/paid-internship.png";

const Hire = () => {
  return (
    <div className="px-40">
      <div>
        <p className="text-3xl font-semibold text-host-btn mt-20">
          Explore Opportunities
        </p>
        <p className="text-lg font-normal text-host-btn mb-14">
          Participate, Showcase Skills & Gain CV Points through online & offline
          opportunities of your interest & make your mark!
        </p>
        <div className=" grid grid-cols-4 gap-6 relative mb-20">
          <div>
            <img src={Student} alt="student" />
            <p className="absolute top-4 z-10 p-3 text-base font-normal">
              open to
            </p>
            <p className="absolute top-10 z-10 p-3 text-lg leading-5 font-semibold">
              College<br></br> Students
            </p>
          </div>
          <div>
            <img src={Pro} alt="pro" />
            <p className="absolute top-4 z-10 p-3 text-base font-normal">
              open to
            </p>
            <p className="absolute top-10 z-10 p-3 text-lg leading-5  font-semibold">
              Working <br></br> Professionals
            </p>
          </div>
          <div>
            <img src={Team} alt="team" />
            <p className="absolute top-4 z-10 p-3 text-base font-normal">
              with
            </p>
            <p className="absolute top-10 z-10 p-3 text-lg leading-5  font-semibold">
              Team <br></br> Participation
            </p>
          </div>
          <div>
            <img src={Solo} alt="solo" />
            <p className="absolute top-4 z-10 p-3 text-base font-normal">
              with
            </p>
            <p className="absolute top-10 z-10 p-3 text-lg leading-5  font-semibold">
              Indiviual <br></br> Participation
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-3xl font-semibold text-host-btn mt-20">Get Hired</p>
        <p className="text-lg font-normal text-host-btn mb-14">
          Work with your dream companies by applying to hiring challenges and
          full-time & part-time jobs/internships.
        </p>
        <div className=" grid grid-cols-4 gap-6 relative mb-20">
          <div>
            <img src={Jobs} alt="student" />
            <p className="absolute top-4 z-10 p-3 text-base font-normal">
              Full-Time
            </p>
            <p className="absolute top-10 z-10 p-3 text-lg leading-5 font-semibold">
              Jobs<br></br>
            </p>
          </div>
          <div>
            <img src={Intern} alt="pro" />
            <p className="absolute top-4 z-10 p-3 text-base font-normal">
              Part-Time
            </p>
            <p className="absolute top-10 z-10 p-3 text-lg leading-5  font-semibold">
              Internships <br></br>
            </p>
          </div>
          <div>
            <img src={Hiring} alt="team" />
            <p className="absolute top-4 z-10 p-3 text-base font-normal">
              Hiring
            </p>
            <p className="absolute top-10 z-10 p-3 text-lg leading-5  font-semibold">
              Challenges <br></br>
            </p>
          </div>
          <div>
            <img src={Paid} alt="solo" />
            <p className="absolute top-4 z-10 p-3 text-base font-normal">
              Paid
            </p>
            <p className="absolute top-10 z-10 p-3 text-lg leading-5  font-semibold">
              Internship <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
