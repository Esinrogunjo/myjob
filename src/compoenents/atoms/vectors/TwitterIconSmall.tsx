import * as React from "react";
import { SVGProps } from "react";

const TwitterIconSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28.95"
    height="28.95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#fff">
      <circle cx={14.947} cy={14.474} r={14.474} fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.772 11.53a4.175 4.175 0 0 1-1.14.307c.41-.241.723-.62.87-1.077a3.99 3.99 0 0 1-1.254.472 1.997 1.997 0 0 0-1.445-.617c-1.095 0-1.977.876-1.977 1.948 0 .155.014.303.046.445a5.628 5.628 0 0 1-4.077-2.038c-.17.292-.27.626-.27.985 0 .674.352 1.272.878 1.618a1.977 1.977 0 0 1-.894-.24v.022c0 .947.686 1.733 1.585 1.914a2.005 2.005 0 0 1-.519.064c-.126 0-.254-.007-.374-.033a1.993 1.993 0 0 0 1.848 1.357 4.014 4.014 0 0 1-2.926.803 5.632 5.632 0 0 0 3.035.874c3.64 0 5.63-2.968 5.63-5.542 0-.086-.003-.17-.007-.252.392-.274.722-.617.991-1.01Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(.474)"
          d="M0 0h28.947v28.947H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default TwitterIconSmall;
