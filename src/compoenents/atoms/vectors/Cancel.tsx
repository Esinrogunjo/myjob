import * as React from "react";
import { SVGProps } from "react";

const Cancel = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21.421 11.993a1 1 0 0 0-1.414-1.414L16 14.586l-4.007-4.007a1 1 0 0 0-1.414 1.414L14.586 16l-4.007 4.007a1 1 0 0 0 1.414 1.414L16 17.414l4.007 4.007a1 1 0 1 0 1.414-1.414L17.414 16l4.007-4.007Z"
      fill="#C4C4C4"
    />
  </svg>
);

export default Cancel;
