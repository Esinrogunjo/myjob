import * as React from "react";
import { SVGProps } from "react";

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.626 10.126c6.834-6.835 17.914-6.835 24.748 0 6.834 6.834 6.834 17.914 0 24.748L25 47.25 12.626 34.874c-6.835-6.834-6.835-17.914 0-24.748ZM25 27.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      fill="#fff"
    />
  </svg>
);

export default LocationIcon;
