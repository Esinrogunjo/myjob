import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../atoms/images/Avatar";
import Logo from "../atoms/vectors/Logo";

export const Header = () => {
  const [login, setLogin] = useState(true);
  const { pathname } = useLocation();
  const handleLogin = () => {
    setLogin(!login);
  };
  console.log(pathname);

  return (
    <header className="bg-headerBg w-full h-[7.3125rem] flex items-center ">
      <nav className=" flex items-center justify-center mx-10 w-full">
        <div className="flex items-center gap-x-[3.35625rem]">
          <Link to="/">
            <Logo width={"12.625rem"} height={"3.5rem"} />
          </Link>

          {login && pathname != "/profile" && (
            <Link to="/profile">
              <Avatar
                width={"11.875rem"}
                height={"4.1875rem"}
                onClick={handleLogin}
              />
            </Link>
          )}
        </div>

        <div className="flex gap-x-[1.625rem] text-[#00717D] ml-[20rem] items-center self-end">
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
            onMouseEnter={handleLogin}
          >
            {login ? "Sign Out" : "Login"}
          </Link>
        </div>
      </nav>
    </header>
  );
};
