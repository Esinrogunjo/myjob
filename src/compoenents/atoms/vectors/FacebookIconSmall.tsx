import * as React from "react";
import { SVGProps } from "react";

const FacebookIconSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28.95"
    height="28.95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#fff">
      <circle cx={14.474} cy={14.474} r={14.474} fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.299 14.473a4.825 4.825 0 1 0-4.825 4.825l.085-.001V15.54h-1.037v-1.208h1.037v-.89c0-1.03.63-1.591 1.549-1.591.44 0 .819.033.929.047v1.078h-.634c-.5 0-.597.237-.597.586v.77h1.196l-.156 1.208h-1.04v3.57a4.827 4.827 0 0 0 3.493-4.638Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h28.947v28.947H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default FacebookIconSmall;
