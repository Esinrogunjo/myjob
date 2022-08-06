import React from "react";

const DetailsTop = ({ job }: any) => {
  return (
    <div className="flex flex-col gap-x-[16.625rem]  md:mb-[9.5625rem] mt-[3.1875rem] md:mt-[8.8125rem] ml-8 md:ml-[12.875rem] mb-6 md:gap-y-5 ">
      <span className="text-[#424242] md:text-[3.666875rem] font-bold md:leading-[4.476875rem] md:tracking-[0.5px] text-2xl leading-[1.825rem] ">
        {job.company.name}
      </span>
      <span className="text-[#666666] font-normal md:text-[2.75rem] md:tracking-[1.2px] md:leading-[3.280625rem] text-lg">
        {job.company.about}
      </span>
      <span className="text-[#666666] font-normal md:text-[2.75rem] md:tracking-[1.2px] md:leading-[3.280625rem] mb-[1.493125rem] text-lg">
        {job.company.address}
      </span>

      <span className="text-primary font-medium md:text-[3.625rem] md:leading-[3.748125rem] text-2xl">
        {job.job.name}
      </span>
    </div>
  );
};

export default DetailsTop;
