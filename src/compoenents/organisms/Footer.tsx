import React from "react";
import FacebookIcon from "../atoms/vectors/FacebookIcon";
import InstagramIcon from "../atoms/vectors/InstagramIcon";
import Logo from "../atoms/vectors/Logo";
import TwitterIcon from "../atoms/vectors/TwitterIcon";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-baseText flex flex-col pt-[3.6875rem]">
      <div
        className="grid"
        style={{ gridTemplateColumns: "auto auto auto auto auto" }}
      >
        <div className="ml-[3.3375rem] font-medium">
          <Logo width={"12.725rem"} height={"3.5rem"} fill="#ffffff" />
          <div className="ml-[4.1625rem] mt-[1.0625rem] text-lightGray leading-5 text-[18px] gap-y-2">
            My jobs provide <br />
            real opportunities to <br />
            graduates and unemployed <br />
            individuals to search and acquire <br />
            Jobs in their career and areas <br /> of interest
          </div>
        </div>
        <div className="font-medium">
          <span className="text-xl leading-6 ">Recruitment</span>
          <div className=" mt-5 flex flex-col text-lightGray leading-5 text-[18px] gap-y-2">
            <span>Become Affiliate</span>
            <span>Go Unlimited</span>
            <span>Services</span>
          </div>
        </div>
        <div className="font-medium">
          <span className="text-xl leading-6 ">Major Careers</span>
          <div className="mt-5 flex flex-col text-lightGray leading-5 text-[18px] gap-y-2">
            <span>Business Stories</span>
            <span>Learning</span>
            <span>Social Media</span>
          </div>
        </div>
        <div className="font-medium">
          <span className="text-xl leading-6 ">Most recruiting companies</span>
          <div className="mt-5 flex flex-col text-lightGray leading-5 text-[18px] gap-y-2">
            <span>Design Systems</span>
            <span>Themes &amp; Templates</span>
            <span>Mockups</span>
            <span>Presentations</span>
            <span>Wireframes Kits</span>
            <span>UI Kits</span>
          </div>
        </div>
        <div className="mr-28 font-medium">
          <span className="text-xl leading-6 ">Who got jobs here</span>
          <div className="mt-5 flex flex-col text-lightGray leading-5 text-[18px] gap-y-2">
            <span>License</span>
            <span>Refund Policy</span>
            <span>About Us</span>
            <span>Contacts</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-t-lightGray mt-[1.875rem]">
        <span className="my-[2.8125rem] ml-[7.5rem] text-lightGray leading-5 font-medium ">
          Copyright © 2020
        </span>
        <div className="flex gap-x-[0.875rem] my-[2.8125rem] mr-28">
          <FacebookIcon height={"3.125rem"} width={"3.125rem"} />
          <InstagramIcon height={"3.125rem"} width={"3.125rem"} />
          <TwitterIcon height={"3.125rem"} width={"3.125rem"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
