import React from "react";
import Experience from "../Experience";
import ExperienceHead from "../ExperienceHead";
import ExperienceRow from "../ExperienceRow";
import SkillRow from "../SkillRow";

const Skills = () => {
  const hanadleClick = () => {};
  return (
    <Experience head={<ExperienceHead title={"Skills"} />}>
      <SkillRow onClick={hanadleClick}>
        <div className="flex mb-2 ">
          <span className="w-24 text-xl font-medium leading-[1.52625rem]  mr-4 ">
            HTML 5
          </span>
          <span className="font-normal text-lg text-[#666666]  leading-[1.3125rem]">
            • Intermediate
          </span>
        </div>
        <div className="flex mb-2 ">
          <span className="w-24 text-xl font-medium leading-[1.52625rem]  mr-4 ">
            PHP
          </span>
          <span className="font-normal text-lg text-[#666666]  leading-[1.3125rem]">
            • Intermediate
          </span>
        </div>
        <div className="flex mb-2 ">
          <span className="w-24 text-xl font-medium leading-[1.52625rem]  mr-4 ">
            Javascript
          </span>
          <span className="font-normal text-lg text-[#666666]  leading-[1.3125rem]">
            • Intermediate
          </span>
        </div>
        <div className="flex mb-2 ">
          <span className="w-24 text-xl font-medium leading-[1.52625rem] mr-4">
            CSS
          </span>
          <span className="font-normal text-lg text-[#666666]  leading-[1.3125rem]">
            • Intermediate
          </span>
        </div>
      </SkillRow>
    </Experience>
  );
};

export default Skills;
