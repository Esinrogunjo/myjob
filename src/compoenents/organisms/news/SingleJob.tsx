import React, { useState } from "react";
import Codevillage from "../../atoms/images/cv.png";
import Item7 from "../../atoms/images/item7.png";
import Femtech from "../../atoms/images/femtech.png";
import House from "../../atoms/images/house.png";
import Share from "../../atoms/images/share.png";
import ShareIcon from "../../atoms/vectors/ShareIcon";
import Button from "../../atoms/forms/Button";
import { Link } from "react-router-dom";
import { TwitterShareButton } from "react-share";
import ShareModal from "../../molecules/ShareModal";
import SingleJobTopMobile from "./mobile/SingleJobTopMobile";

export type jobType = {
  jobInfo: {
    name: string;
    address: string;
    type: string;
    description: string;
    Negotiate: string;
    salary: string;
    posted: string;
  };
  company: {
    name: string;
    about: string;
    address: string;
  };
  summary: {
    about: string;
    image: string;
    requirement: [{ qualification: string; level: string; length: string }];
  };
};

const SingleJob = ({ job }: any) => {
  const jobDetails = job.job;
  const company = job.company;
  const summary = job.summary;
  const [showModal, setShowModal] = useState(false);
  const [deSpringed, setDeSpringed] = useState(false);

  const handleCloseModal = () => {
    setDeSpringed(true);
    setTimeout(() => {
      setShowModal(false);
      setDeSpringed(false);
    }, 900);
  };

  return (
    <div className=" mx-4  mb-[3.75rem] md:mx-auto rounded-[0.625rem] border-[#8B8B8B] border-[0.5px] flex flex-col max-w-[78.5625rem]  pb-[2.125rem]">
      <div className="w-full mt-10 border-b-[0.5px] border-b-[#8B8B8B] px-10 flex justify-between mb-[1.0625rem]">
        <div className="flex flex-col">
          <SingleJobTopMobile
            jobDetails={jobDetails}
            summary={summary}
            company={company}
          />
          <span className="hidden md:block text-primary font-medium text-[2rem] leading-[2.055625rem] ">
            {jobDetails.name}
          </span>
          <span className="hidden md:block text-[#666666] font-normal text-xl tracking-[0.5px] leading-[1.49125rem] mt-2 mb-2">
            {jobDetails.address} | {jobDetails.type}
          </span>
          <div className="hidden md:flex gap-x-10 text-[#666666] font-normal text-xl tracking-[0.5px] leading-[1.49125rem] mb-[1.0625rem] ">
            <span>{jobDetails.description}</span>
            <span>{jobDetails.Negotiate}</span>
            <span>{jobDetails.posted}</span>
            <span>{jobDetails.salary}</span>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-end">
          <span className="text-[#424242] text-2xl font-bold leading-[1.83125rem] tracking-[0.5px]">
            {company.name}
          </span>
          <span className="text-[#666666] font-normal text-xl tracking-[0.5px] leading-[1.49125rem]">
            {company.about}
          </span>
          <span className="text-[#666666] font-normal text-xl tracking-[0.5px] leading-[1.49125rem]">
            {company.address}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[auto, auto] mr-6 md:mr-0">
        <img
          src={summary.image}
          className="hidden md:block w-[12.0625rem] h-[12.0625rem] ml-10 mt-[2.875rem]"
        />
        <div className=" mt-[1.875rem] flex flex-col ml-[2.9375rem] ">
          <div className="flex flex-col ">
            <span className="text-primary font-medium text-base tracking-[0.5px] mb-2 leading-[1.83125rem]">
              Job summary
            </span>
            <span className=" text-base md:text-[1.375rem] leading-6 md:leading-8 text-[#424242] font-normal">
              {summary.about}
            </span>
          </div>
          <div className="flex flex-col md:grid mt-6  md:grid-cols-2  ">
            <div className=" flex   ">
              <div className="flex flex-col text-[#272727] font-normal  text-base md:text-xl  leading-6 md:leading-[1.875rem]">
                <div className="flex items-center">
                  <div className="flex h-[10px] w-[10px] rounded-full bg-[#000] mr-2 ml-1"></div>

                  <span>Minimum Qualification</span>
                </div>
                <div className="flex items-center">
                  <div className="flex h-[10px] w-[10px] rounded-full bg-[#000] mr-2 ml-1"></div>

                  <span>Experience Level</span>
                </div>
                <div className="flex items-center">
                  <div className="flex h-[10px] w-[10px] rounded-full bg-[#000] mr-2 ml-1"></div>

                  <span>Experience Length</span>
                </div>
              </div>
              <div className="flex flex-col ml-[1.1875rem] text-[#707070] text-base md:text-xl font-normal leading-6 md:leading-[1.875rem]">
                <span>{summary.requirement.qualification}</span>
                <span>{summary.requirement.level}</span>
                <span>{summary.requirement.length}</span>
              </div>
            </div>
            <div className="flex items-center justify-end md:mr-[2.51rem] mt-6 md:mt-0">
              <div className=" md:my-auto  md:mb-8 mr-[3.25rem] flex items-start justify-center  h-full ">
                <ShareIcon
                  onClick={() => setShowModal(!showModal)}
                  className="cursor-pointer w-10 h-10 my-auto"
                />
                {showModal && (
                  <ShareModal
                    closeModal={handleCloseModal}
                    deSpringed={deSpringed}
                    showModal={showModal}
                  />
                )}
              </div>
              <Link to={`/news/${jobDetails.id}`} className="mr-10">
                <Button
                  label="See more"
                  className="bg-primary text-baseText font-medium text-xl rounded-bottonRadius py-6 px-[2.365rem]  md:py-[1.53125rem] md:px-[5.4375rem] flex items-center justify-center"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
