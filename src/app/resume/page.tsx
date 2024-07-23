import React from "react";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skill from "./Skill";

const page = () => {
  return (
    <div className="h-auto w-full flex md:flex-col flex-col items-center">
      <div className="p-5">
        <span className=" text-black font-bold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg smx:text-lg">
          RESUME
        </span>
      </div>
      {/* Education */}
      <div className="p-5 border-b border-gray-400">
        <span className=" text-black font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-sm smx:text-xs">
          Education
        </span>
        <Education />
      </div>
      {/* Work Experience */}
      <div className="p-5 border-b border-gray-400">
        <span className=" text-black font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-sm smx:text-xs">
          Work Experience
        </span>
        <WorkExperience />
      </div>
      {/* Skill & Experties */}
      <div className="p-5 border-b border-gray-400">
        <span className=" text-black font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-sm smx:text-xs">
          Skill & Experties
        </span>
        <Skill />
      </div>
    </div>
  );
};

export default page;
