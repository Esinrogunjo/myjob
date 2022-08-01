import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../atoms/images/Avatar";
import Logo from "../atoms/vectors/Logo";
import LogoSmall from "../atoms/vectors/LogoSmall";
import MenuIcon from "../atoms/vectors/MenuIcon";
import MobileSidebar from "./responsivness/MobileSidebar";

export const Header = () => {
  const [login, setLogin] = useState(false);
  const [openSideNav, setOpenSideNav] = useState(false);
  const { pathname } = useLocation();
  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <header className="bg-headerBg w-screen h-[7.1875rem] md:h-[7.3125rem]">
      {openSideNav && <MobileSidebar setOpenSideNav={setOpenSideNav} />}
      <nav className=" flex items-center justify-between  md:mx-10 h-[100%]">
        <MenuIcon
          className="ml-6 md:hidden"
          onClick={() => setOpenSideNav(true)}
        />
        <div className="flex items-center justify-between h-full md:w-[40%] ">
          <Link to="/">
            <Logo className="hidden md:block w-full h-[3.5rem] " />
          </Link>
          <Link to="/">
            <LogoSmall className="block md:hidden " />
          </Link>

          {login && pathname != "/profile" && pathname != "myapplications" && (
            <Link to="/profile">
              <Avatar
                width={"11.875rem"}
                height={"4.1875rem"}
                onClick={handleLogin}
                className="hidden md:block"
              />
            </Link>
          )}
        </div>

        <div className="hidden md:flex gap-x-[1.625rem]  h-full items-center text-[#00717D] ml-[20rem]  self-end md:w-1/2  ">
          <Link to={"/"}>Home</Link>
          <Link to={"/news"}>News</Link>
          <Link to={"/jobs"}>Jobs</Link>
          <Link to={"/about"}>About us</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link
            to={"/"}
            className={
              login
                ? "bg-btnRed text-baseText py-3 px-10 rounded-[0.3125rem] ml-[2.375rem] font-medium text-xl leading-10"
                : "bg-primary py-3 px-10 text-baseText rounded-[0.3125rem] ml-[2.375rem] font-medium text-xl leading-10"
            }
            onClick={handleLogin}
          >
            {login ? "Sign Out" : "Login"}
          </Link>
        </div>
        <Link
          to={"/"}
          className={
            login
              ? " md:hidden block text-btnRed py-3 px-10 rounded-[0.3125rem] ml-[2.375rem] font-medium text-xl leading-10"
              : "md:hidden block py-3 px-10 text-primary rounded-[0.3125rem] ml-[2.375rem] font-medium text-xl leading-10"
          }
          onClick={handleLogin}
        >
          {login ? "Sign Out" : "Login"}
        </Link>
      </nav>
    </header>
  );
};
