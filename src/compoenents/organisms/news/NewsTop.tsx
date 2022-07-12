import React from "react";

const NewsTop = () => {
  return (
    <div className="flex gap-x-[16.625rem] mb-[9.5625rem]">
      <h2 className="ml-[10.625rem] mt-[12.0625rem] text-primary text-5xl leading-[4rem] font-bold  tracking-[0.09375rem] text-center whitespace-nowrap">
        LATEST NEWS <br />
        &amp; DISCUSIONS
      </h2>
      <div className="mr-[13.5625rem] mt-[6.25rem] bg-primary text-baseText  pt-2 px-6">
        <h3 className="font-bold ">Our news update</h3>
        <div className="font-normal text-sm leading-8 tracking-[-0.025rem] ml-6 max-w-[29.125rem]">
          The most elegant expression of Apple <br /> Watch returns with two
          iconic materials <br />
          — titanium and ceramic. The most elegant <br />
          expression of Apple Watch returns with two <br />
          iconic materials
          <br />— titanium and ceramic.
        </div>
      </div>
    </div>
  );
};

export default NewsTop;
