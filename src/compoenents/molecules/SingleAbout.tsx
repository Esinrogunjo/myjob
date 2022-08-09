import React, { ReactNode } from "react";

const SingleAbout = ({
  title,
  icon,
  iconSmall,
  content,
}: {
  title: string;
  icon: ReactNode;
  iconSmall: ReactNode;
  content: string;
}) => {
  return (
    <div className=" mt-6 md:mt-[6.25rem] flex flex-col">
      <div className="flex gap-x-5 justify-start  md:block  h-16 mb-4 ">
        <span className="md:hidden w-16 mt-4 mr-4">{iconSmall}</span>
        <span className="text-primary text-[2rem] font-semibold leading-[3.625rem] md:ml-[5.3125rem]">
          {title}
        </span>
      </div>
      <div className="grid grid-cols-[auto_auto]">
        <span className="hidden md:block">{icon}</span>
        <span className="text-[1.375rem] font-normal leading-10 text-[#454545]">
          {content}
        </span>
      </div>
    </div>
  );
};

export default SingleAbout;
