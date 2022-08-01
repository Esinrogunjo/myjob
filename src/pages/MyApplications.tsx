import Footer from "../compoenents/organisms/Footer";
import { Header } from "../compoenents/organisms/Header";

import Line from "../compoenents/organisms/profile/Line";

import Sidebar from "../compoenents/organisms/profile/Sidebar";
import { jobs } from "../compoenents/atoms/data/sample";
import ProfileTop from "../compoenents/organisms/profile/ProfileTop";
import SingleJob from "../compoenents/organisms/news/SingleJob";
import MyApplicationsSingleJob from "../compoenents/organisms/news/MyApplicationsSingleJob";

const MyApplications = () => {
  const hanadleClick = () => {};
  return (
    <div className="w-full ">
      <Header />
      <div
        className="w-full grid h-screen overflow-auto"
        style={{ gridTemplateColumns: "17.375rem auto" }}
      >
        <Sidebar />
        <div className=" flex flex-col pt-[1.375rem] ml-[3.5625rem] mr-[4.1875rem] pr-[2.8125rem] ">
          <ProfileTop />
          <div className="mt-[4.07rem] text-[#424242] mb-[0.585625rem] justify-self-start ml-[1.679375rem]">
            My Applications
          </div>
          <div className="  border-primary flex flex-col items-center justify-self-center w-[64.0625rem] ml-1">
            {jobs.map((job, i) => (
              <MyApplicationsSingleJob job={job} key={`JOb-${i}`} />
            ))}
          </div>

          <Line />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyApplications;
