import * as React from "react";
import { SVGProps } from "react";

const EmailSmallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      width={22.46}
      height={22.455}
      rx={11.228}
      fill="#fff"
      fillOpacity={0.4}
    />
    <path
      d="m4.816 7.925 6.415 3.206 6.414-3.206a1.604 1.604 0 0 0-1.601-1.51H6.418c-.855 0-1.553.667-1.602 1.51Z"
      fill="#1D2319"
    />
    <path
      d="m17.648 9.717-6.417 3.207-6.418-3.207v4.717c0 .886.719 1.604 1.605 1.604h9.626c.886 0 1.604-.718 1.604-1.604V9.717Z"
      fill="#1D2319"
    />
  </svg>
);

export default EmailSmallIcon;
