import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "../../atoms/vectors/profile/LogoutIcon";
import MyApplicationIcon from "../../atoms/vectors/profile/MyApplicationIcon";
import ProfileIcon from "../../atoms/vectors/profile/ProfileIcon";

const Sidebar = () => {
  const { pathname } = useLocation();
  const linkClass = "profile-active-link";

  return (
    <div className="flex flex-col min-h-[30rem] profile-box-shadow  pt-[3.6875rem]">
      <Link
        className={`ml-[1.5625rem] mr-[2.6875rem] ${
          pathname === "/profile" && linkClass
        } w-[12.875rem] h-12 flex items-center`}
        to={"/profile"}
      >
        <ProfileIcon className="w-6 h-6 mx-4" />
        <span className="text-xl font-normal leading-[1.875rem] tracking-[0.2px]">
          Profile
        </span>
      </Link>
      <Link
        className={`ml-[1.5625rem] mr-[2.6875rem] ${
          pathname === "/myapplications" && linkClass
        } w-[12.875rem] h-12 flex items-center`}
        to={"/myapplications"}
      >
        <MyApplicationIcon className="w-6 h-6 mx-4" />
        My Applications
      </Link>
      <Link
        className={`ml-[1.5625rem] mr-[2.6875rem] ${
          pathname === "/logout" && linkClass
        } w-[12.875rem] h-12 flex items-center`}
        to={"/"}
      >
        <LogoutIcon className="w-6 h-6 mx-4" />
        Logout
      </Link>
    </div>
  );
};

export default Sidebar;
