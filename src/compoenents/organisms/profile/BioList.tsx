import React from "react";
import Button from "../../atoms/forms/Button";
import Line from "./Line";
import ProfileTop from "./ProfileTop";

const BioList = () => {
  return (
    <div className="flex flex-col gap-6 text-[#454545] font-normal text-[1.375rem] leading-[1.425625rem] tracking-[0.3px] mt-[2.59375rem] mb-[6.8125rem]">
      <ProfileTop />
      <div className="mt-[4.07rem] text-[#424242] mb-[0.585625rem] justify-self-start ml-[1.679375rem]">
        Personal Information
      </div>
      <Line />
      <div className="flex">
        <span className="w-[11rem] mr-[4.375rem]">Email</span>
        <span className="">rabiuhassan706@gmail.com</span>
      </div>
      <div className="flex">
        <span className="w-[11rem] mr-[4.375rem]">Phone number</span>
        <span className="">08074069788</span>
      </div>
      <div className="flex">
        <span className="w-[11rem] mr-[4.375rem]">Phone number 2</span>
        <span className="">07067399644</span>
      </div>
      <div className="flex">
        <span className="w-[11rem] mr-[4.375rem]">Home address</span>
        <span className="">Alagbado, Ilorin</span>
      </div>
      <div className="flex">
        <span className="w-[11rem] mr-[4.375rem]">State</span>
        <span className="">Kwara</span>
      </div>
      <div className="flex">
        <span className="w-[11rem] mr-[4.375rem]">Country</span>
        <span className="">Nigeria</span>
        <span className="flex-grow"></span>
        <Button
          label="Edit"
          className="bg-primary text-baseText mr-[2.5625rem] px-20 py-[0.8125rem] rounded-bottonRadius  "
        />
      </div>
    </div>
  );
};

export default BioList;
