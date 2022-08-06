import React from "react";
import Footer from "../compoenents/organisms/Footer";
import { Header } from "../compoenents/organisms/Header";

import SingleJob from "../compoenents/organisms/news/SingleJob";

import { jobs } from "../compoenents/atoms/data/sample";

import SingleJobDetail from "../compoenents/organisms/news/SingleJobDetail";
import DetailsTop from "../compoenents/organisms/news/DetailsTop";
import { useParams } from "react-router-dom";

const jobDetails = () => {
  let { id } = useParams();
  let jobToSend = jobs[Number(id)] ? jobs[Number(id)] : jobs[0];
  return (
    <div className="w-full h-screen overflow-auto">
      <Header />
      <DetailsTop job={jobToSend} />
      <SingleJobDetail job={jobToSend} />
      <div>
        <h3 className="ml-10 md:ml-[14.0625rem] md:mt-40 font-medium text-[2rem] text-[#424242] leading-[2.441875rem] tracking-[1px] ">
          Related Jobs search
        </h3>

        {jobs.map((job, i) => (
          <SingleJob job={job} key={`JOb-${i}`} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default jobDetails;
