import Footer from "../compoenents/organisms/Footer";
import { Header } from "../compoenents/organisms/Header";
import BioList from "../compoenents/organisms/profile/BioList";

import Sidebar from "../compoenents/organisms/profile/Sidebar";
import Education from "../compoenents/organisms/profile/Education";
import ExperienceList from "../compoenents/organisms/profile/lists/ExperienceList";
import Skills from "../compoenents/organisms/profile/lists/Skills";
import Certification from "../compoenents/organisms/profile/lists/Certification";
import Interest from "../compoenents/organisms/profile/lists/Interest";

const Profile = () => {
  const hanadleClick = () => {};
  return (
    <div className="w-full h-screen overflow-auto">
      <Header />
      <div
        className="w-full grid"
        style={{ gridTemplateColumns: "17.375rem auto" }}
      >
        <Sidebar />
        <div className=" flex flex-col pt-[1.375rem] ml-[3.5625rem] mr-[4.1875rem] pr-[2.8125rem] ">
          <BioList />
          <ExperienceList />
          <Education />
          <Certification />
          <Skills />
          <Interest />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
