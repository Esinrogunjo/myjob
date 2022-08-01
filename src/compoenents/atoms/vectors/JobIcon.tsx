import * as React from "react";
import { SVGProps } from "react";

const JobIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v3.57A22.952 22.952 0 0 1 10 13a22.95 22.95 0 0 1-8-1.43V8a2 2 0 0 1 2-2h2Zm2-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H8V5Zm1 5a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Z"
      fill="#00717D"
      fillOpacity={0.6}
    />
    <path
      d="M2 13.692V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.308A24.974 24.974 0 0 1 10 15c-2.796 0-5.487-.46-8-1.308Z"
      fill="#00717D"
      fillOpacity={0.6}
    />
  </svg>
);

export default JobIcon;
