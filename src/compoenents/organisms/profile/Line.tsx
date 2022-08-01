import React from "react";

const Line = ({ color }: { color?: string }) => {
  return (
    <div
      className={`${
        color ? `bg-[${color}]` : "bg-[#F5F5F5]"
      } -ml-[1rem] h-[1px] w-full my-8`}
    ></div>
  );
};

export const LineLong = ({ color }: { color?: string }) => {
  return (
    <div
      className={`${
        color ? `bg-[${color}]` : "bg-[#F5F5F5]"
      } h-[2px] w-full my-8`}
    ></div>
  );
};

export default Line;
