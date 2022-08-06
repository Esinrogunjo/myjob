import React from "react";
import Codevillage from "../../atoms/images/cv.png";
import Item7 from "../../atoms/images/item7.png";
import Femtech from "../../atoms/images/femtech.png";
import House from "../../atoms/images/house.png";
import Share from "../../atoms/images/share.png";
import ShareIcon from "../../atoms/vectors/ShareIcon";
import Button from "../../atoms/forms/Button";
import SingleJobDetailTopMobile from "./mobile/SingleJobDetailTopMobile";

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

const SingleJobDetail = ({ job }: any) => {
  const jobDetails = job.job;
  const company = job.company;
  const summary = job.summary;

  return (
    <div className=" mx-4 mb-[3.75rem] md:mx-auto rounded-[0.625rem] border-[#8B8B8B] border-[0.5px] flex flex-col md:w-[78.5625rem]  pb-[2.125rem]">
      <div className="w-full mt-10 border-b-[0.5px] border-b-[#8B8B8B] md:px-10 flex justify-between mb-[1.0625rem]">
        <SingleJobDetailTopMobile
          company={company}
          jobDetails={jobDetails}
          summary={summary}
        />
        <div className="hidden md:flex md:flex-col">
          <span className="text-primary font-medium text-[2rem] leading-[2.055625rem] ">
            {jobDetails.name}
          </span>
          <span className="text-[#666666] font-normal text-xl tracking-[0.5px] leading-[1.49125rem] mt-2 mb-2">
            {jobDetails.address} | {jobDetails.type}
          </span>
          <div className="flex gap-x-10 text-[#666666] font-normal text-xl tracking-[0.5px] leading-[1.49125rem] mb-[1.0625rem] ">
            <span>{jobDetails.description}</span>
            <span>{jobDetails.Negotiate}</span>
            <span>{jobDetails.posted}</span>
            <span>{jobDetails.salary}</span>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:items-end">
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
      <div className="grid " style={{ gridTemplateColumns: "auto auto" }}>
        <img
          src={summary.image}
          className="hidden md:block w-[12.0625rem] h-[12.0625rem] ml-10 mt-[2.875rem]"
        />
        <div className="mt-[1.875rem] flex flex-col ml-[2.9375rem] ">
          <div className="hidden md:flex md:flex-col ">
            <span className="text-primary font-medium text-base tracking-[0.5px] mb-2 leading-[1.83125rem]">
              Job summary
            </span>
            <span className="text-[1.375rem] leading-8 text-[#424242] font-normal">
              {summary.about}
            </span>
          </div>
          <div
            className="grid mt-6   "
            style={{ gridTemplateColumns: "auto auto" }}
          >
            <div className=" flex   ">
              <div className="flex flex-col text-[#272727] font-normal text-xl leading-[1.875rem]">
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
              <div className="flex flex-col ml-[1.1875rem] text-[#707070] text-xl font-normal leading-[1.875rem]">
                <span>{summary.requirement.qualification}</span>
                <span>{summary.requirement.level}</span>
                <span>{summary.requirement.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-10">
        <span className="text-primary font-medium text-base tracking-[0.5px] mb-2 leading-[1.83125rem] mt-[3.5625rem]">
          Job Description and requirements
        </span>
        <span className="px-2">
          The Graphic Designer job description includes the entire process of
          defining requirements, visualizing and creating graphics including
          illustrations, logos, layouts and photos. You’ll be the one to shape
          the visual aspects of websites, books, magazines, product packaging,
          exhibitions and more. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Enim hac massa consectetur vel et mauris. Ac mauris
          pulvinar eu urna ut ut. Tellus interdum duis proin morbi eget urna.
          Massa sed ut vulputate ullamcorper nulla sit. Id nulla mattis velit
          integer eget lacus ut lorem. Dolor ridiculus etiam feugiat risus ac
          dignissim. Odio tortor nulla consequat, adipiscing. Nibh aliquam
          praesent vel non ac. Phasellus laoreet felis velit amet pellentesque.
          Id ac facilisis purus aliquet sodales. Vel ipsum massa augue hendrerit
          in turpis sed. Accumsan eget et sed mauris. Ultrices suspendisse non
          phasellus ligula massa. Egestas aenean bibendum ultrices quis sagittis
          arcu. Pellentesque erat risus.
        </span>
      </div>

      <div className="flex flex-col ml-10">
        <span className="text-primary font-medium text-base tracking-[0.5px] mb-2 leading-[1.83125rem] mt-[3.5625rem]">
          About you
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius et
          tortor, facilisis ut amet auctor. Quisque facilisi rhoncus ac placerat
          lectus congue nulla. Et adipiscing neque pretium vivamus adipiscing
          amet, elementum. Eu enim nisl aenean gravida turpis urna, fringilla.
          Non tempus tortor lobortis sit consectetur viverra in. Leo, lectus
          viverra bibendum arcu praesent aliquet aliquam. Sagittis morbi a
          cursus sollicitudin ornare ac vel egestas faucibus. Mauris feugiat
          aliquam eu tortor nibh ornare hac.
        </span>
      </div>

      <div className="flex flex-col ml-10">
        <span className="text-primary font-medium text-base tracking-[0.5px] mb-2 leading-[1.83125rem] mt-[3.5625rem]">
          Required skills and competency
        </span>
        <span className="px-2">
          <ul className="list-disc">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi Lorem
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi Lorem
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi Lorem
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi Lorem
            </li>
          </ul>
        </span>
      </div>

      <div className="flex flex-col ml-10">
        <span className="text-primary font-medium text-base tracking-[0.5px] mb-2 leading-[1.83125rem] mt-[3.5625rem]">
          Requirements
        </span>
        <span className="px-2">
          <ul className="list-disc">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </span>
      </div>
      <div className="flex flex-col ml-10">
        <span className="text-primary font-medium text-base tracking-[0.5px] mb-2 leading-[1.83125rem] mt-[3.5625rem]">
          Important safety tips
        </span>
        <span className="px-2">
          <ul className="list-disc">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </span>
      </div>

      <div className="mx-[2.4375rem] flex justify-between mt-[6.75rem] font-medium text-xl leading-[1.875rem]">
        <Button
          label="Report this job"
          className="hidden md:block bg-baseText text-[#00717D] border-[#00717D] border-[1px] md:w-[19.65rem] h-[3.75rem]  "
        />
        <Button
          label="Report"
          className="block md:hidden text-sm  bg-baseText text-[#00717D] border-[#00717D] border-[1px] md:w-[19.65rem] h-[3.75rem] px-8 rounded-[0.3125rem] md:rounded-none"
        />
        <Button
          label="Share"
          className="bg-baseText text-sm  text-[#00717D] border-[#00717D] border-[1px] md:w-[19.65rem] h-[3.75rem] px-8 rounded-[0.3125rem] md:rounded-none"
        />
        <Button
          label="Apply"
          className="bg-primary text-sm  text-baseText border-[#00717D] border-[1px] md:w-[19.65rem] h-[3.75rem] px-8 rounded-[0.3125rem] md:rounded-none "
        />
      </div>
    </div>
  );
};

export default SingleJobDetail;
