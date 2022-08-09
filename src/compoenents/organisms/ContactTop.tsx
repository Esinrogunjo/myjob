import React from "react";
import LogoContactSmall from "../atoms/vectors/contact/LogoContactSmall";
import LocationIcon from "../atoms/vectors/LocationIcon";

const ContactTop = () => {
  return (
    <div className=" flex flex-col md:grid md:grid-cols-[auto_auto] md:mx-[9.375rem] md:my-[5.5rem]">
      <LogoContactSmall className="mx-auto mt-9 md:hidden" />
      <div className="flex ml-10 md:ml-0 flex-col  gap-y-[1.0625rem] text-primary">
        <span className="font-semibold text-5xl leading-[3.625rem] tracking-[1.5px] ">
          CONTACT US
        </span>
        <span className="font-normal text-[1.375rem] flex flex-col">
          We love catching up with our
          <br /> supporters and want to make <br />
          speaking to us as easy as possible.
        </span>
      </div>
      <div className="text-baseText bg-primary md:rounded-[0.625rem] p-6  md:w-[29.125rem] w-full">
        <span className="3.625 text-2xl font-bold">Where you can find us</span>
        <div className="flex flex-col text-xl font-medium leading-[1.5125rem]">
          <div className="flex mr-[0.6875rem]">
            <LocationIcon className="w-[3.125rem] h-[3.125rem]" />
            <span className="mb-[0.9375rem]">
              Lorem Ipsum Lorem Ipsum Lorem
              <br />
              Ipsum Lorem Ipsum
            </span>
          </div>

          <span className="ml-[3.8125rem]">
            - Hi. My name is Khoa. I am a...
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactTop;
