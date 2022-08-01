import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.6a1.2 1.2 0 0 1 1.2 1.2v6h6a1.2 1.2 0 0 1 0 2.4h-6v6a1.2 1.2 0 1 1-2.4 0v-6h-6a1.2 1.2 0 0 1 0-2.4h6v-6A1.2 1.2 0 0 1 12 3.6Z"
      fill="#111827"
    />
  </svg>
);

export default SvgComponent;
