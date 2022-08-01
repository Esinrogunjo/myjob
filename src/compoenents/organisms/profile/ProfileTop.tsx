import React from "react";
import ProfileAvatar from "../../atoms/vectors/profile/ProfileAvatar";

const ProfileTop = () => {
  return (
    <div className="h-[8.125rem] border-primary border-[1px]  rounded-[0.625rem] flex items-center justify-self-center w-[64.0625rem] ml-1">
      <ProfileAvatar className="w-[6.0625rem] h-[6.0625rem] mr-4 ml-7" />
      <div className="flex flex-col ">
        <span className="text-primary text-3xl font-normal leading-5 tracking-[0.3px] mb-[0.75rem]">
          Rabiu Hassan
        </span>
        <span className="text-[#666666] text-xl font-normal leading-[1.1875rem]">
          Product Design • UI/UX • Motion Desiner
        </span>
      </div>
    </div>
  );
};

export default ProfileTop;
