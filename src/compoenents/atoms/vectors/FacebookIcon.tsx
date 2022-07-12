import * as React from "react";
import { SVGProps } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={25} cy={25} r={25} fill="#fff" fillOpacity={0.2} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.333 25a8.334 8.334 0 0 0-16.666 0A8.334 8.334 0 0 0 25 33.332l.146-.002v-6.487h-1.79v-2.087h1.79v-1.535c0-1.781 1.087-2.75 2.676-2.75.76 0 1.414.056 1.605.082v1.86h-1.095c-.864 0-1.032.412-1.032 1.014v1.33h2.066l-.269 2.086H27.3v6.167a8.338 8.338 0 0 0 6.033-8.012Z"
      fill="#fff"
    />
  </svg>
);

export default FacebookIcon;
