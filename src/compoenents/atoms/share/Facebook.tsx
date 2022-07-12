import * as React from "react";
import { SVGProps } from "react";

const FaceBook = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={25} cy={25} r={25} fill="#fff" fillOpacity={0.2} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.333 25A8.334 8.334 0 1 0 25 33.334l.147-.002v-6.487h-1.79v-2.087h1.79v-1.535c0-1.781 1.087-2.75 2.675-2.75.76 0 1.415.056 1.605.082v1.86h-1.095c-.864 0-1.032.412-1.032 1.014v1.33h2.067l-.27 2.086H27.3v6.167A8.338 8.338 0 0 0 33.333 25Z"
      fill="#fff"
    />
  </svg>
);

export default FaceBook;
