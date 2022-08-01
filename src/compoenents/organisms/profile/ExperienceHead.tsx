import React from "react";
import PlusIcon from "../../atoms/vectors/profile/PlusIcon";

const ExperienceHead = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between mb-8">
      <span>{title}</span>
      <span className="flex gap-[0.625rem]">
        <PlusIcon className="w-6 h-6" /> Add {title.toLowerCase()}
      </span>
    </div>
  );
};

export default ExperienceHead;
