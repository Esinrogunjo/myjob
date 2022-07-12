import React from "react";
import Footer from "../compoenents/organisms/Footer";
import { Header } from "../compoenents/organisms/Header";
import NewsTop from "../compoenents/organisms/news/NewsTop";
import SingleJob from "../compoenents/organisms/news/SingleJob";
import Home from "./Home";
import { jobs } from "../compoenents/atoms/data/sample";

import Codevillage from "../compoenents/atoms/images/cv.png";
import Item7 from "../compoenents/atoms/images/item7.png";
import Femtech from "../compoenents/atoms/images/femtech.png";
import House from "../compoenents/atoms/images/house.png";

const News = () => {
  return (
    <div className="w-full">
      <Header />
      <NewsTop />
      {jobs.map((job, i) => (
        <SingleJob job={job} key={`JOb-${i}`} />
      ))}

      <Footer />
    </div>
  );
};

export default News;
