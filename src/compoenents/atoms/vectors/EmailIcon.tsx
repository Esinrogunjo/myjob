import * as React from "react";
import { SVGProps } from "react";

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={25} cy={25} r={25} fill="#fff" fillOpacity={0.2} />
    <path
      d="M17.003 20.884 25 24.882l7.997-3.998A2 2 0 0 0 31 19H19a2 2 0 0 0-1.997 1.884Z"
      fill="#fff"
    />
    <path
      d="m33 23.118-8 4-8-4V29a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5.882Z"
      fill="#fff"
    />
  </svg>
);

export default EmailIcon;
