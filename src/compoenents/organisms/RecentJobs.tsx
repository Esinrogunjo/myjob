import React from "react";
import Button from "../atoms/forms/Button";
import Codevillage from "../atoms/images/cv.png";
import Item7 from "../atoms/images/item7.png";

const RecentJobs = () => {
  return (
    <div className="flex flex-col mb-[6.625rem]">
      <h3 className="text-[#424242] capitalize text-[2rem] font-medium leading-[2.4375rem]">
        RECENTLY POSTED JOBS
      </h3>
      <div className="grid" style={{ gridTemplateColumns: "auto auto" }}>
        <div className="flex flex-col items-start pr-[4.853125rem] p-0">
          <img
            src={Codevillage}
            alt=""
            className="w-[19.3125rem] h-[19.3125rem]"
          />

          <span className="text-primary font-medium text-[2rem] leading-8 mt-8 ml-4">
            Code Village
          </span>
          <span className="text-[1.375rem] text-[#272727] leading-8 mt-4 ml-4">
            Ilorin Nigeria
          </span>
          <div className="h-inputHeight w-[16.375rem] flex ml-4 mt-[2.125rem] mb-12">
            <Button
              label="More"
              className="bg-primary rounded-bottonRadius flex-grow text-baseText text-xl leading-8"
            />
          </div>
        </div>

        <div className="flex flex-col pt-6 text-[#424242] leading-8">
          <span className="text-primary font-medium text-[2rem]  mb-[1.4375rem]">
            Graphic Design
          </span>
          <span className="text-primary font-medium text-base   ">
            Description
          </span>
          <span className="mb-[1.125rem] text-[1.375rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
            pellentesque eros nec amet ac, ac, neque, nunc. Sodales felis{" "}
          </span>
          <span className="text-primary font-medium text-base ">
            Requirement
          </span>
          <span className="mb-[1.125rem] text-[1.375rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
            pellentesque eros nec amet ac, ac, neque, nunc. Sodales felis{" "}
          </span>
          <span className="text-primary font-medium text-base ">
            Responsibility
          </span>
          <span className="mb-[1.125rem] text-[1.375rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
            pellentesque eros nec amet ac, ac, neque, nunc. Sodales felis{" "}
          </span>
        </div>
      </div>

      {/* another job */}
      <div className="grid" style={{ gridTemplateColumns: "auto auto" }}>
        <div className="flex flex-col items-start pr-[4.853125rem] p-0">
          <img src={Item7} alt="" className="w-[19.3125rem] h-[19.3125rem]" />

          <span className="text-primary font-medium text-[2rem] leading-8 mt-8 ml-4">
            Item 7
          </span>
          <span className="text-[1.375rem] text-[#272727] leading-8 mt-4 ml-4">
            Ilorin Nigeria
          </span>
          <div className="h-inputHeight w-[16.375rem] flex ml-4 mt-[2.125rem] mb-12">
            <Button
              label="More"
              className="bg-primary rounded-bottonRadius flex-grow text-baseText text-xl leading-8"
            />
          </div>
        </div>

        <div className="flex flex-col pt-6 text-[#424242] leading-8">
          <span className="text-primary font-medium text-[2rem]  mb-[1.4375rem]">
            Restraunt Manager
          </span>
          <span className="text-primary font-medium text-base   ">
            Description
          </span>
          <span className="mb-[1.125rem] text-[1.375rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
            pellentesque eros nec amet ac, ac, neque, nunc. Sodales felis{" "}
          </span>
          <span className="text-primary font-medium text-base ">
            Requirement
          </span>
          <span className="mb-[1.125rem] text-[1.375rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
            pellentesque eros nec amet ac, ac, neque, nunc. Sodales felis{" "}
          </span>
          <span className="text-primary font-medium text-base ">
            Responsibility
          </span>
          <span className="mb-[1.125rem] text-[1.375rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
            pellentesque eros nec amet ac, ac, neque, nunc. Sodales felis{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;
