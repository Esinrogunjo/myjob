import React from "react";
import LogoAbout from "../atoms/vectors/LogoAbout";

const AboutTop = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-[2.79375rem] mb-[5.5rem] justify-center">
      <LogoAbout className="md:mt-[9.8125rem] md:w-[31.764375rem]" />
      <div className="md:mr-[13.5625rem] mt-[6.25rem] bg-primary text-baseText  pt-2 px-6">
        <h3 className="font-bold ">Our news update</h3>
        <div className="font-normal text-sm leading-8 tracking-[-0.025rem] ml-6 max-w-[29.125rem]">
          The most elegant expression of Apple <br /> Watch returns with two
          iconic materials <br />
          — titanium and ceramic. The most elegant <br />
          expression of Apple Watch returns with two <br />
          iconic materials
          <br />— titanium and ceramic.
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
