import React from "react";
import ShareIcon from "../../../atoms/vectors/ShareIcon";

const SingleJobDetailTopMobile = ({
  summary,
  jobDetails,
  company,
}: {
  summary: any;
  jobDetails: any;
  company: any;
}) => {
  return (
    <div className="md:hidden flex flex-col mb-4">
      <div className=" flex gap-x-4">
        <img
          src={summary.image}
          className="md:hiddenblock w-[12.0625rem] h-[12.0625rem]"
        />
        <div className="flex flex-col">
          <span className="text-primary font-medium text-xl leading-[1.193125rem] mt-4 ">
            {jobDetails.name}
          </span>
          <span className="text-[#666666] font-normal text-xl tracking-[0.5px] leading-[1.49125rem] mt-2 mb-2">
            {jobDetails.address} | {jobDetails.type}
          </span>
          <div className="flex flex-col gap-x-10 text-[#666666] font-normal gap-y-2 text-sm tracking-[0.5px] leading-[1.04375rem] mb-[1.0625rem] ">
            <span>{jobDetails.description}</span>
            <span>{jobDetails.Negotiate}</span>
            <span>{jobDetails.salary}</span>
            <span>{jobDetails.posted}</span>
          </div>
        </div>
        <ShareIcon className="ml-8 mt-4" />
      </div>
      <div className="flex gap-x-8 ml-4">
        <span className="text-[#424242] text-lg font-medium leading-[1.37375rem] tracking-[0.5px]">
          {company.name}
        </span>
        <span className="text-[#666666] font-normal text-sm tracking-[0.5px] leading-[1.04375rem]">
          {company.address}
        </span>
      </div>
    </div>
  );
};

export default SingleJobDetailTopMobile;
