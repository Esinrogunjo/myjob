import React from "react";
import Input from "../compoenents/atoms/forms/Input";

import SearchIcon from "../compoenents/atoms/vectors/SearchIcon";
import RecentJobs from "../compoenents/organisms/RecentJobs";
import HomeFrom from "../compoenents/organisms/responsivness/home/HomeFrom";
import TopText from "../compoenents/organisms/responsivness/home/TopText";

const Home = () => {
  return (
    <main className="mx-auto max-w-[70.5rem] flex flex-col items-center md:mt-[8.9375rem] mt-[2.60625rem] ">
      <div className="grid  grid-cols-[auto_auto] w-full  home-form">
        <TopText />
        <HomeFrom />
      </div>
      <span className=" hidden md:block text-[#00717D] text-2xl leading-9 font-normal mt-[11.25rem] p-12">
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
