import React from "react";
import Experience from "../Experience";
import ExperienceHead from "../ExperienceHead";
import ExperienceRow from "../ExperienceRow";
import SkillRow from "../SkillRow";

const Interest = () => {
  const hanadleClick = () => {};
  return (
    <Experience head={<ExperienceHead title={"Interest"} />}>
      <SkillRow onClick={hanadleClick}>
        <div className="flex mb-2 flex-col gap-y-2">
          <span className="font-normal text-lg text-[#666666]  leading-[1.3125rem]">
            • Web design • Front-end
          </span>
          <span className="font-normal text-lg text-[#666666]  leading-[1.3125rem]">
            • Product Design
          </span>
          <span className="font-normal text-lg text-[#666666]  leading-[1.3125rem]">
            • Motion graphics
          </span>
          <span className="font-normal text-lg text-[#666666]  leading-[1.3125rem]">
            • UX Writing
          </span>
        </div>
      </SkillRow>
    </Experience>
  );
};

export default Interest;
