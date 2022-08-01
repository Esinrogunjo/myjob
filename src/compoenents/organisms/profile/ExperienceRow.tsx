import React, { ReactNode, SVGProps } from "react";
import BitsmartIcon from "../../atoms/vectors/BitsmartIcon";
import EditIcon from "../../atoms/vectors/profile/EditIcon";

const ExperienceRow = ({
  icon,
  children,
  onClick,
}: {
  icon?: SVGProps<SVGSVGElement> | ReactNode;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className="grid mt-6"
      style={{ gridTemplateColumns: "3.5625rem auto auto" }}
    >
      <>{icon && icon}</>

      <div className="flex flex-col px-6 ml-6">{children}</div>

      <div className="flex">
        <span className="flex-grow  w-full"></span>
        <EditIcon className="w-6 h-6 cursor-pointer mr-6 justify-self-end " />
      </div>
    </div>
  );
};

export default ExperienceRow;
