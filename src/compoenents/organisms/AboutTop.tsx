import React from "react";
import LogoAbout from "../atoms/vectors/LogoAbout";
import LogoSmall from "../atoms/vectors/LogoSmall";

const AboutTop = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-[2.79375rem] md:mb-[5.5rem] md:justify-center items-center">
      <LogoAbout className=" hidden md:block md:mt-[9.8125rem] md:w-[31.764375rem] h-full " />
      <LogoSmall className="block md:hidden w-[14.375rem] my-6" />
      <div className=" md:mr-[13.5625rem] md:mt-[6.25rem] bg-primary text-baseText  pt-2 px-6 w-full md:w-auto">
        <h3 className="font-bold ">Our news update</h3>
        <div className="font-normal text-sm leading-8 tracking-[-0.025rem] ml-6 max-w-[29.125rem]">
          The most elegant expression of Apple
          <br className="hidden md:block" /> Watch returns with two iconic
          materials <br />— titanium and ceramic. The most elegant{" "}
          <br className="hidden md:block" />
          expression of Apple Watch returns with two
          <br className="hidden md:block" />
          iconic materials
          <br />— titanium and ceramic.
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
