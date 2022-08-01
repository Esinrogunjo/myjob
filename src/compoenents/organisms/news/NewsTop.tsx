import React from "react";

const NewsTop = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-[16.625rem] md:mb-[9.5625rem] home-form pb-0">
      <h2 className="hidden md:block md:ml-[10.625rem] md:mt-[12.0625rem] text-primary text-5xl leading-[4rem] font-bold  tracking-[0.09375rem] text-center whitespace-nowrap font-sans">
        LATEST NEWS <br />
        &amp; DISCUSIONS
      </h2>
      <div className="flex  gap-x-5 text-primary md:hidden mt-7 font-sans">
        <h2 className="text-3xl leading-7 font-bold  tracking-[0.054375rem]  whitespace-nowrap ml-3 w-1/2  ">
          LATEST NEWS <br />
          &amp; DISCUSIONS
        </h2>
        <span className="mt-2 leading-6 font-normal text-2xl mr-5 w-1/2 ">
          News, blog and Events <br />
          shows here
        </span>
      </div>
      <div className="md:mr-[13.5625rem] h-2/3 md:h-[17.6875rem] mt-10   md:mt-[6.25rem] bg-primary text-baseText  pt-2 px-6">
        <h3 className="font-bold ">Our news update</h3>
        <div className="font-normal mb-8 md:mb-0  text-sm leading-8 tracking-[-0.025rem] md:ml-6 md:max-w-[29.125rem]">
          The most elegant expression of Apple{" "}
          <br className="hidden md:block" /> Watch returns with
          <br className="hidden md:block" /> two iconic materials <br />—
          titanium and ceramic. The most elegant
          <br className="hidden md:block" />
          expression of Apple Watch returns with two
          <br className="hidden md:block" />
          iconic materials
          <br />— titanium and ceramic.
        </div>
      </div>
    </div>
  );
};

export default NewsTop;
