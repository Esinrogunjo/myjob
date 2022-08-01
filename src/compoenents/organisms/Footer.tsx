import React from "react";
import FacebookIcon from "../atoms/vectors/FacebookIcon";
import FacebookIconSmall from "../atoms/vectors/FacebookIconSmall";
import InstagramIcon from "../atoms/vectors/InstagramIcon";
import InstagramIconSmall from "../atoms/vectors/InstagranIconSmall";
import Logo from "../atoms/vectors/Logo";
import LogoSmall from "../atoms/vectors/LogoSmall";
import TwitterIcon from "../atoms/vectors/TwitterIcon";
import TwitterIconSmall from "../atoms/vectors/TwitterIconSmall";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-baseText flex flex-col pt-[3.6875rem]">
      <div className="grid grid-cols-2 md:grid-cols-[auto_auto_auto_auto_auto] gap-4">
        <div className="mx-[2.375rem] md:ml-[3.3375rem] font-medium col-span-2 md:col-span-1  ">
          <div className="md:block flex justify-center">
            <Logo className="hidden md:block" fill="#ffffff" />
            <LogoSmall fill="#ffffff" className="block md:hidden" />
          </div>

          <div className=" mt-5 md:ml-[4.1625rem] md:mt-[1.0625rem] text-baseText text-sm font-normal md:text-lightGray leading-5 md:text-[18px] md:gap-y-2">
            My jobs provide real opportunities to graduates and unemployed
            individuals to search and acquire Jobs in their career and areas of
            interest
          </div>
        </div>
        <div className="font-medium ml-[2.375rem] ">
          <span className=" font-normal text-sm leading-[0.875rem] md:text-xl md:leading-6 ">
            Recruitment
          </span>
          <div className=" mt-5 flex flex-col text-sm leading-3 text-lightGray md:leading-5 md:text-[18px] gap-y-2">
            <span>Become Affiliate</span>
            <span>Go Unlimited</span>
            <span>Services</span>
          </div>
        </div>
        <div className="font-medium mr-[2.375rem]">
          <span className="font-normal text-sm leading-[0.875rem] md:text-xl md:leading-6">
            Major Careers
          </span>
          <div className="mt-5 flex flex-col text-sm leading-3 text-lightGray md:leading-5 md:text-[18px] gap-y-2">
            <span>Business Stories</span>
            <span>Learning</span>
            <span>Social Media</span>
          </div>
        </div>
        <div className="font-medium ml-[2.375rem]">
          <span className="font-normal text-sm leading-[0.875rem] md:text-xl md:leading-6 ">
            Most recruiting companies
          </span>
          <div className="mt-5 flex flex-col text-sm leading-3 text-lightGray md:leading-5 md:text-[18px] gap-y-2">
            <span>Design Systems</span>
            <span>Themes &amp; Templates</span>
            <span>Mockups</span>
            <span>Presentations</span>
            <span>Wireframes Kits</span>
            <span>UI Kits</span>
          </div>
        </div>
        <div className="mr-[2.375rem] md:mr-28 font-medium">
          <span className="font-normal text-sm leading-[0.875rem] md:text-xl md:leading-6 ">
            Who got jobs here
          </span>
          <div className="mt-5 flex flex-col text-sm leading-3 text-lightGray md:leading-5 md:text-[18px] gap-y-2">
            <span>License</span>
            <span>Refund Policy</span>
            <span>About Us</span>
            <span>Contacts</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-t-lightGray mt-[1.875rem]">
        <span className="my-[2.8125rem] ml-[7.5rem] text-lightGray leading-3 text-[0.65131875rem] md:leading-5 font-medium ">
          Copyright © 2020
        </span>
        <div className="hidden md:flex gap-x-[0.875rem] my-[2.8125rem] mr-28">
          <FacebookIcon height={"3.125rem"} width={"3.125rem"} />
          <InstagramIcon height={"3.125rem"} width={"3.125rem"} />
          <TwitterIcon height={"3.125rem"} width={"3.125rem"} />
        </div>
        <div className="md:hidden flex gap-x-[0.875rem] my-[2.8125rem] mr-28">
          <FacebookIconSmall />
          <InstagramIconSmall />
          <TwitterIconSmall />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
