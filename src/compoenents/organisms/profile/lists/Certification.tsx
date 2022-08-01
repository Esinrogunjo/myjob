import React from "react";
import Experience from "../Experience";
import ExperienceHead from "../ExperienceHead";
import ExperienceRow from "../ExperienceRow";
import Jos from "../../../atoms/vectors/profile/jos.png";
import Google from "../../../atoms/vectors/profile/google.png";

const Certification = () => {
  const hanadleClick = () => {};
  return (
    <Experience head={<ExperienceHead title={"Certification"} />}>
      <ExperienceRow
        icon={<img src={Jos} className="w-[2.765625rem] mx-6  h-12 " />}
        onClick={hanadleClick}
      >
        <span className="text-[#424242] font-medium text-[1.375rem]">
          University of Jos • Nigeria
        </span>
        <span>Computer Science</span>
      </ExperienceRow>
      <ExperienceRow
        icon={<img src={Google} className="w-[2.765625rem] mx-6  h-12 " />}
        onClick={hanadleClick}
      >
        <span className="text-[#424242] font-medium text-[1.375rem]">
          UX - Certification
        </span>
        <span>Google-Coursera</span>
      </ExperienceRow>
    </Experience>
  );
};

export default Certification;
