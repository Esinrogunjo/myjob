import React from "react";
import logoBig from "../../../atoms/images/LogoBig.png";
const TopText = () => {
  return (
    <>
      <span className="text-primary md:hidden font-semibold text-xl leading-[2.47875rem] col-span-2 text-center">
        Jobs for every GRADUATE
      </span>
      <div className="hidden md:flex flex-col  text-[#ABABAB] font-medium text-5xl leading-[4.28125rem]  pr-[0.8125rem]">
        <img src={logoBig} alt="" className="w-[26.75rem] h-[13rem]" />
        <span>Jobs for every </span>
        <span>GRADUATE</span>
      </div>
    </>
  );
};

export default TopText;
