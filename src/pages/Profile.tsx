import React from "react";
import { Link } from "react-router-dom";
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
        <div className="flex flex-col">
          <Link to={"/"}>Profile</Link>
          <Link to={"/"}>My Applications</Link>
          <Link to={"/"}>Logout</Link>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
