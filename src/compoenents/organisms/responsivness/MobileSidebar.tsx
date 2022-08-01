import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutUsIcon from "../../atoms/vectors/AboutUsIcon";
import ContactIcon from "../../atoms/vectors/ContactIcon";
import HomeIcon from "../../atoms/vectors/HomeIcon";
import JobIcon from "../../atoms/vectors/JobIcon";
import LogoSmall from "../../atoms/vectors/LogoSmall";
import MenuIcon from "../../atoms/vectors/MenuIcon";
import NewsIcon from "../../atoms/vectors/NewsIcon";
import { LineLong } from "../profile/Line";
const MobileSidebar = ({
  setOpenSideNav,
}: {
  setOpenSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeOpenSideBar = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | any
  ) => {
    if (e.target.id === "InnerSideBar") setOpenSideNav(false);
  };
  return (
    <div
      id="InnerSideBar"
      onClick={(e) => closeOpenSideBar(e)}
      className=" md:hidden fixed overflow-hidden w-screen h-screen  inset-0 bg-black/50 z-20"
    >
      <div className="bg-white w-1/2 h-full mt-28 flex flex-col">
        <LogoSmall className="mx-auto mt-10 mb-12" />
        <LineLong color="#DBDBDB" />
        <Link
          to={"/"}
          className="flex ml-10 items-center cursor-pointer mb-6  "
        >
          <HomeIcon height={"1.8rem"} width={"1.8rem"} />
          <span className="ml-[0.875rem] text-primary font-normal text-base leading-7">
            Home
          </span>
        </Link>
        <Link
          to={"/news"}
          className="flex ml-10 items-center cursor-pointer  mb-6   "
        >
          <NewsIcon height={"1.8rem"} width={"1.8rem"} />
          <span className="ml-[0.875rem] text-primary font-normal text-base leading-7">
            News
          </span>
        </Link>
        <Link
          to={"/jobs"}
          className="flex ml-10 items-center cursor-pointer mb-6   "
        >
          <JobIcon height={"1.8rem"} width={"1.8rem"} />
          <span className="ml-[0.875rem] text-primary font-normal text-base leading-7">
            Jobs
          </span>
        </Link>
        <Link
          to={"/about"}
          className="flex ml-10 items-center cursor-pointer mb-6    "
        >
          <AboutUsIcon height={"1.8rem"} width={"1.8rem"} />
          <span className="ml-[0.875rem] text-primary font-normal text-base leading-7">
            About us
          </span>
        </Link>
        <Link
          to={"/contact"}
          className="flex ml-10 items-center cursor-pointer mb-6    "
        >
          <ContactIcon height={"1.8rem"} width={"1.8rem"} />
          <span className="ml-[0.875rem] text-primary font-normal text-base leading-7">
            Contact
          </span>
        </Link>
        <div className="flex items-center justify-center w-full">
          <LogoSmall className="mx-auto mt-10 mb-12 bottom-0 absolute" />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
