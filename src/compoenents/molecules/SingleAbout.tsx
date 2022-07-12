import React, { ReactNode } from "react";
import UsersIcon from "../atoms/vectors/about/UsersIcon";

const SingleAbout = ({
  title,
  icon,
  content,
}: {
  title: string;
  icon: ReactNode;
  content: string;
}) => {
  return (
    <div className=" mt-[6.25rem] flex flex-col">
      <span className="text-primary text-[2rem] font-semibold leading-[3.625rem] ml-[5.3125rem]">
        {title}
      </span>
      <div className="grid" style={{ gridTemplateColumns: "auto auto" }}>
        {icon}
        <span className="text-[1.375rem] font-normal leading-10 text-[#454545]">
          {content}
        </span>
      </div>
    </div>
  );
};

export default SingleAbout;
