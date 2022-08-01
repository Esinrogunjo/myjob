import React from "react";
import Button from "../../../atoms/forms/Button";
import Input from "../../../atoms/forms/Input";
import SearchIcon from "../../../atoms/vectors/SearchIcon";

const HomeFrom = () => {
  return (
    <div className="md:w-[36.5rem] flex flex-col w-screen">
      <div className=" flex mb-[0.9375rem] px-2  md:hidden  mt-[1.125rem] w-[98%] h-inputHeight  bg-[#F5F5F5] items-center mx-auto">
        <Input
          name="search"
          placeholder="Search the web"
          className="flex-grow mr-2 pl-2"
          type={"text"}
        />
        <SearchIcon
          width={"2.5rem"}
          height={"2rem"}
          className="cursor-pointer"
        />
      </div>
      <div className="md:mt-[3.0625rem] justify-center gap-6  flex md:gap-x-[1.875rem] mx-2 md:mx-0">
        <div className=" flex w-full  h-inputHeight md:w-homeInput rounded-textRounded bg-[#F5F5F5] px-2">
          <Input placeholder="Company" type={"text"} className="flex-grow" />
        </div>
        <div className="flex w-full h-inputHeight md:w-homeInput rounded-textRounded bg-[#F5F5F5] px-2">
          <select className="flex-grow">
            <option value="">Filter</option>
            <option>Latest</option>
          </select>
        </div>
      </div>

      <div className=" mt-5 md:hidden md:mt-[3.0625rem] justify-center gap-6  flex md:gap-x-[1.875rem] mx-2 md:mx-0">
        <div className=" flex w-full md:w-homeInput  px-2">
          <span className="text-[#00717D] text-2xl leading-9 font-normal">
            Lorem ipsum dolor sit amet, cons ect etur adipiscing elit. Mi pellen
            te sque eros nec{" "}
          </span>
        </div>
        <div className="flex w-full items-center">
          <Button label="Sign up" className="w-full bg-primary text-baseText" />
        </div>
      </div>

      <div className=" hidden  md:flex  mt-[2.4375rem] w-full h-inputHeight  bg-[#F5F5F5] px-2 items-center">
        <Input
          name="search"
          placeholder="Search the web"
          className="flex-grow"
          type={"text"}
        />
        <SearchIcon
          width={"1.553125rem"}
          height={"1.62125rem"}
          className="cursor-pointer"
        />
      </div>
      <div className=" hidden md:block text-[#00717D] text-2xl leading-9 font-normal mt-[3.75rem] p-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque
        eros nec
      </div>
    </div>
  );
};

export default HomeFrom;
