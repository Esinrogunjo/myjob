import React from "react";
import AboutBody from "../compoenents/molecules/AboutBody";
import AboutTop from "../compoenents/organisms/AboutTop";
import Footer from "../compoenents/organisms/Footer";
import { Header } from "../compoenents/organisms/Header";

const About = () => {
  return (
    <div className="w-full">
      <Header />
      <AboutTop />
      <AboutBody />
      <Footer />
    </div>
  );
};

export default About;
