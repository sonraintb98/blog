import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaSkype,
} from "react-icons/fa";

const AppFooter = () => {
  return (
    <>
      <div className="bg-gray-50 h-1/4 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Follow<span className="text-blue-600">Me</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaSkype className="text-2xl cursor-pointer hover:text-blue-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Resume</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Education
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Work Experience
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Skills & Expertise
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Hobbies & Soft skills
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Project</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Web
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Flutter
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Activity
            </li>
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li> */}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Contact</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Email: hoaisonkt1998@gmail.com
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Phone: 0945006158
            </li>
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li> */}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
        <h1 className="text-gray-800 font-semibold">
          Copyright @ NGUYEN HOAI SON
        </h1>
      </div>
    </>
  );
};

export default AppFooter;
