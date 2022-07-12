import React from "react";

const DetailsTop = ({ job }: any) => {
  return (
    <div className="flex flex-col gap-x-[16.625rem]  mb-[9.5625rem] mt-[8.8125rem] ml-[12.875rem] gap-y-5 ">
      <span className="text-[#424242] text-[3.666875rem] font-bold leading-[4.476875rem] tracking-[0.5px]">
        {job.company.name}
      </span>
      <span className="text-[#666666] font-normal text-[2.75rem] tracking-[1.2px] leading-[3.280625rem]">
        {job.company.about}
      </span>
      <span className="text-[#666666] font-normal text-[2.75rem] tracking-[1.2px] leading-[3.280625rem] mb-[1.493125rem]">
        {job.company.address}
      </span>

      <span className="text-primary font-medium text-[3.625rem] leading-[3.748125rem]">
        {job.job.name}
      </span>
    </div>
  );
};

export default DetailsTop;
