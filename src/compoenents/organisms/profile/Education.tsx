import React from "react";
import BitsmartIcon from "../../atoms/vectors/BitsmartIcon";
import Experience from "./Experience";
import ExperienceHead from "./ExperienceHead";
import ExperienceRow from "./ExperienceRow";
import Jos from "../../atoms/vectors/profile//jos.png";

const Education = () => {
  const hanadleClick = () => {};
  return (
    <Experience head={<ExperienceHead title={"Education"} />}>
      <ExperienceRow
        icon={<img src={Jos} className="w-[2.765625rem] mx-6  h-12 " />}
        onClick={hanadleClick}
      >
        <span className="text-[#424242] font-medium text-[1.375rem]">
          University of Jos • Nigeria
        </span>
        <span>Computer Science</span>
      </ExperienceRow>
    </Experience>
  );
};

export default Education;
