import React from "react";
import { ReactComponent as Unstop } from "./assets/unstop_logo.svg";
import Host from "./assets/host-icon.svg";
import Mail from "./assets/mail.png";
import Phone from "./assets/phone.png";
import Instagram from "./assets/instagram.svg";
import Linkedin from "./assets/linkedin.svg";
import Facebook from "./assets/facebook.svg";
import Telegram from "./assets/telegram.svg";
import Discord from "./assets/discord.svg";
import Twitter from "./assets/twitter.svg";
import Youtube from "./assets/youtube.svg";
import Send from "./assets/send.png";
import Google from "./assets/google.svg";
import Apple from "./assets/app-store.svg";
import DC from "./assets/d2c.svg";
import Pay from "./assets/payments.svg";
import Gdpr from "./assets/gdpr.png";
import Iso1 from "./assets/iso1.svg";
import Iso2 from "./assets/iso2.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex">
        <div className=" bg-footer-bg text-white w-2/5 flex justify-center items-center">
          <div>
            <Unstop />
            <p className="text-base my-6">
              Built with <span className="text-lg">💖</span> in India for the
              world
            </p>
            <p className="text-xl font-semibold my-4">Stay Connected </p>
            <p className="flex items-center text-base text-footer-text my-4">
              <img src={Mail} alt="mail" className="w-4 h-4 mr-2" />
              sales@unstop.com
            </p>
            <p className="flex items-center text-footer-text my-4">
              <img src={Phone} alt="mail" className="w-4 h-4 mr-2" />
              +91-9311777388
              <span className="text-sm ml-2">(Mon to Fri, 9 AM to 6 PM)</span>
            </p>
            <div className="flex my-6">
              <img src={Instagram} alt="mail" className="w-5 h-5 mr-8 " />
              <img src={Linkedin} alt="mail" className="w-5 h-5 mr-8" />
              <img src={Facebook} alt="mail" className="w-5 h-5 mr-8" />
              <img src={Telegram} alt="mail" className="w-5 h-5 mr-8" />
              <img src={Discord} alt="mail" className="w-5 h-5 mr-8" />
              <img src={Twitter} alt="mail" className="w-5 h-5 mr-8" />
              <img src={Youtube} alt="mail" className="w-5 h-5 mr-8" />
            </div>
            <p className="text-xl font-semibold my-5">Stay Updated</p>
            <p className="text-footer-text my-6">
              We'll send you updates on the latest<br></br> opportunities to
              showcase your talent and get<br></br> hired and rewarded
              regularly.
            </p>
            <button className="my-6 bg-button-bg text-host-btn text-sm flex justify-between items-center rounded-lg pl-4 w-80">
              Sign up for our newsletter
              <img
                src={Send}
                alt="mail"
                className="w-10 h-10 p-2 ml-2 bg-host-btn rounded-tr-lg rounded-br-lg"
              />
            </button>
            <div className="flex">
              <button className=" text-sm bg-footer-button flex justify-between items-center rounded-lg p-2 mr-2 my-2 ">
                Share Your Story Now
              </button>
              <button className=" text-sm bg-footer-button flex justify-between items-center rounded-lg my-2 mr-1 px-2 ">
                <img
                  src={Host}
                  alt="mail"
                  className="w-8 h-8 p-2  bg-footer-button rounded-lg"
                />
                Publish Opportunity
              </button>
            </div>
            <p className="text-xl font-semibold mt-7 mb-5">
              Download Unstop App
            </p>
            <div className="flex mb-7">
              <img src={Google} alt="mail" className=" w-36 mr-3 rounded-lg" />
              <img src={Apple} alt="mail" className=" w-36 mr-3" />
            </div>
            <p className="text-sm mt-7">
              Best Viewed in Latest Versions of Edge, Mozilla,<br></br> Chrome,
              Opera & Safari. V: 2.22.2023.18.2
            </p>
            <p className="text-xs mt-10">
              Copyright © 2023 FLIVE Consulting Pvt Ltd - All rights reserved.
            </p>
          </div>
        </div>
        <div className="bg-host-btn w-3/5">
          <div className="flex">
            <div className="m-10">
              <div>
                <p className="text-white font-semibold text-xl">
                  Our Solutions
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Brand
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Source
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Engage
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Assess
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Hire
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-xl">Our Products</p>
                <p className="text-footer-text text-base font-medium py-2">
                  Technology Platform
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Online Recruitment Platform
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Quizzing / Assessments
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Online Hackathons / Coding
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Business Simulation Games
                </p>
              </div>
            </div>

            <div className="m-10">
              <div>
                <p className="text-white font-semibold text-xl">Participate</p>
                <p className="text-footer-text text-base font-medium py-2">
                  Competitions & Challenges
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Quizzes
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Hackathons
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Workshops & Webinars
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Conferences
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Cultural Events
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  College Festivals
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-xl">Apply</p>
                <p className="text-footer-text text-base font-medium py-2">
                  Internships
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Jobs
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Scholarships
                </p>
              </div>
            </div>
            <div className="m-10">
              <div>
                <p className="text-white font-semibold text-xl">Learn</p>
                <p className="text-footer-text text-base font-medium py-2">
                  Courses
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Articles
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Workshops
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Technopedia
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-xl">Practice</p>
                <p className="text-footer-text text-base font-medium py-2">
                  MCQ Mock Tests
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  5 Days Interview Prep
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Mock Interviews
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Code & Ace Hiring<br></br> Assessments
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  100-Day of Coding
                  <br></br> Sprint
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="m-10">
              <p className="text-white font-semibold text-xl">Our Properties</p>
              <p className="text-footer-text text-base font-medium py-2">
                Unstop Awards 2023
              </p>
              <p className="text-footer-text text-base font-medium py-2">
                Unstop Campus Employer<br></br>
                Branding Report 2022
              </p>
              <p className="text-footer-text text-base font-medium py-2">
                Education Loan<br></br>
                EMI Calculator
              </p>
              <p className="text-footer-text text-base font-medium py-2">
                Unstop Igniters Club
              </p>
              <p className="text-footer-text text-base font-medium py-2">
                Online Hackathon Festival
              </p>
            </div>
            <div className="m-10">
              <div className="flex">
                <p className="text-footer-text text-base font-medium py-2 pr-4 border-footer-text">
                  <p className="about-us">About Us</p>
                </p>
                <hr className="w-0 h-1 bg-footer-text"></hr>
                <p className="text-footer-text text-base font-medium py-2 ">
                  <p className="about-us">Contact Us</p>
                </p>
                <p className="text-footer-text text-base font-medium py-2 px-4">
                  Careers
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  We're hiring
                </p>
              </div>
              <div className="flex">
                <p className="text-footer-text text-base font-medium py-2 pr-4">
                  <p className="about-us">Clientele</p>
                </p>
                <p className="text-footer-text text-base font-medium py-2 ">
                  Partner With Us
                </p>
              </div>
              <div className="flex">
                <p className="text-footer-text text-base font-medium py-2 pr-4">
                  <p className="about-us">Partners</p>
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  <p className="about-us">FAQs</p>
                </p>
                <p className="text-footer-text text-base font-medium py-2 pl-4">
                  Branding Guidelines
                </p>
              </div>
              <div className="flex">
                <p className="text-footer-text text-base font-medium py-2">
                  Testimonials
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Featured Partners
                </p>
              </div>
              <p className="text-footer-text text-base font-medium py-2">
                Unstop Rewards Program
              </p>
              <p className="text-footer-text text-base font-medium py-2">
                Unstop on Shark Tank
              </p>
              <div className="flex">
                <p className="text-footer-text text-base font-medium py-2">
                  Terms & Conditions
                </p>
                <p className="text-footer-text text-base font-medium py-2">
                  Privacy Policy
                </p>
              </div>
              <p className="text-footer-text text-base font-medium py-2">
                Sitemap
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between px-40">
          <div className="flex ">
            <img src={DC} alt="dc" className="w-96" />
            <img src={Pay} alt="dc" className="w-96" />
          </div>
          <div className="flex">
            <img src={Gdpr} alt="dc" className="w-20 my-2 mx-2" />
            <img src={Iso1} alt="dc" className="w-20 my-2 mx-2 " />
            <img src={Iso2} alt="dc" className="w-20 my-2 mx-2 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
