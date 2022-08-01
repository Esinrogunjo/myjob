import React from "react";
import Footer from "../compoenents/organisms/Footer";
import { Header } from "../compoenents/organisms/Header";
import NewsTop from "../compoenents/organisms/news/NewsTop";
import SingleJob from "../compoenents/organisms/news/SingleJob";
import Home from "./Home";
import { jobs } from "../compoenents/atoms/data/sample";

const News = () => {
  return (
    <div className="w-full h-screen overflow-auto">
      <Header />
      <NewsTop />
      <div>
        <h2 className="block md:hidden font-sans text-primary font-medium text-xl leading-10 ml-4 mb-[1.625rem]">
          Latest news &amp; discussions
        </h2>

        {jobs.map((job, i) => (
          <SingleJob job={job} key={`JOb-${i}`} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default News;
