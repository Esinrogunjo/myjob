import React from "react";
import ContactBody from "../compoenents/organisms/ContactBody";
import ContactTop from "../compoenents/organisms/ContactTop";
import Footer from "../compoenents/organisms/Footer";
import { Header } from "../compoenents/organisms/Header";

const Contact = () => {
  return (
    <div className="w-full ">
      <Header />
      <ContactTop />
      <ContactBody />
      <Footer />
    </div>
  );
};

export default Contact;
