import React from "react";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const page = () => {
  return (
    <div className="h-auto w-full flex md:flex-col flex-col justify-around items-center">
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
        <span className=" text-black font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-sm smx:text-xs animate-spin">
          Work Experience
        </span>
        <WorkExperience />
      </div>
    </div>
  );
};

export default page;
