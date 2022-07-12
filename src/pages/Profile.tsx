import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "../compoenents/atoms/vectors/profile/logoutIcon";
import MyApplicationIcon from "../compoenents/atoms/vectors/profile/myApplicationIcon";
import ProfileIcon from "../compoenents/atoms/vectors/profile/profileIcon";
import Footer from "../compoenents/organisms/Footer";
import { Header } from "../compoenents/organisms/Header";

const Profile = () => {
  return (
    <div className="w-full ">
      <Header />
      <div
        className="w-full grid"
        style={{ gridTemplateColumns: "17.375rem auto" }}
      >
        <div className="flex flex-col min-h-[30rem] profile-box-shadow  pt-[3.6875rem]">
          <Link
            className="ml-[1.5625rem] mr-[2.6875rem] profile-active-link w-[12.875rem] h-12 flex items-center"
            to={"/"}
          >
            <ProfileIcon className="w-6 h-6 mx-4" />
            <span className="text-xl font-normal leading-[1.875rem] tracking-[0.2px]">
              {" "}
              Profile
            </span>
          </Link>
          <Link
            className="ml-[1.5625rem] mr-[2.6875rem]  w-[12.875rem] h-12 flex items-center"
            to={"/"}
          >
            <MyApplicationIcon className="w-6 h-6 mx-4" />
            My Applications
          </Link>
          <Link
            className="ml-[1.5625rem] mr-[2.6875rem]  w-[12.875rem] h-12 flex items-center"
            to={"/"}
          >
            <LogoutIcon className="w-6 h-6 mx-4" />
            Logout
          </Link>
        </div>
        <div className=" flex flex-col items-center pt-[1.375rem] ml-[3.5625rem] mr-[4.1875rem] pr-[2.8125rem] bg-slate-400">
          jhvdskfjhsdkfjh
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
