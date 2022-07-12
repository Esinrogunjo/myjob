import React from "react";
import Input from "../compoenents/atoms/forms/Input";
import logoBig from "../compoenents/atoms/images/LogoBig.png";
import SearchIcon from "../compoenents/atoms/vectors/SearchIcon";
import RecentJobs from "../compoenents/organisms/RecentJobs";

const Home = () => {
  return (
    <main className="mx-auto max-w-[70.5rem] flex flex-col items-center mt-[8.9375rem]">
      <div className="grid" style={{ gridTemplateColumns: "auto auto" }}>
        <div className="flex flex-col  text-[#ABABAB] font-medium text-5xl leading-[4.28125rem]  pr-[0.8125rem]">
          <img src={logoBig} alt="" className="w-[26.75rem] h-[13rem]" />
          <span>Jobs for every </span>
          <span>GRADUATE</span>
        </div>
        <div className="w-[36.5rem] flex flex-col">
          <div className="mt-[3.0625rem] flex gap-x-[1.875rem]">
            <div className=" flex h-inputHeight w-homeInput rounded-textRounded bg-[#F5F5F5] px-2">
              <Input
                placeholder="Company"
                type={"text"}
                className="flex-grow"
              />
            </div>
            <div className="flex h-inputHeight w-homeInput rounded-textRounded bg-[#F5F5F5] px-2">
              <select className="flex-grow">
                <option value="">Filter</option>
                <option>Latest</option>
              </select>
            </div>
          </div>

          <div className="flex mt-[2.4375rem] w-full h-inputHeight  bg-[#F5F5F5] px-2 items-center">
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
          <div className="text-[#00717D] text-2xl leading-9 font-normal mt-[3.75rem] p-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
            pellentesque eros nec
          </div>
        </div>
      </div>
      <span className="text-[#00717D] text-2xl leading-9 font-normal mt-[11.25rem] p-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque
        eros nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
        pellentesque eros nec Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mi pellentesque eros nec Lorem ipsum dolor sit amet, consectetur.
        adipiscing elit. Mi pellentesque eros nec.
      </span>
      <RecentJobs />
    </main>
  );
};

export default Home;
