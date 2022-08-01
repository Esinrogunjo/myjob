import React, { ReactNode } from "react";
import BitsmartIcon from "../../atoms/vectors/BitsmartIcon";
import EditIcon from "../../atoms/vectors/profile/EditIcon";
import ExperienceHead from "./ExperienceHead";
import ExperienceRow from "./ExperienceRow";
import Line, { LineLong } from "./Line";

const Experience = ({
  head,
  children,
}: {
  head: ReactNode;
  children: ReactNode;
}) => {
  const hanadleClick = () => {
    alert("edited");
  };
  return (
    <div className="flex flex-col mb-[4.5625rem]">
      {head}
      <div className="flex flex-col experience-box-shadow rounded-[0.25074875rem] py-6 px-0 ">
        {children}
      </div>
    </div>
  );
};

export default Experience;
