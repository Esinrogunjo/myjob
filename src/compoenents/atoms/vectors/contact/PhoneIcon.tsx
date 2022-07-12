import * as React from "react";
import { SVGProps } from "react";

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      x={2.352}
      width={22.455}
      height={22.455}
      rx={11.228}
      fill="#fff"
      fillOpacity={0.4}
    />
    <path
      d="M8.427 5.348a.731.731 0 0 0-.728.735v1.47c0 5.278 4.234 9.557 9.457 9.557h1.454c.402 0 .728-.33.728-.735v-1.583a.733.733 0 0 0-.608-.725l-3.227-.543a.725.725 0 0 0-.77.396l-.563 1.138a8.071 8.071 0 0 1-4.44-4.488l1.126-.569a.737.737 0 0 0 .392-.778l-.538-3.261a.73.73 0 0 0-.717-.614H8.427Z"
      fill="#1D2319"
    />
    <path
      d="M13.89 5.973c-.684 0-1.238.459-1.238 1.024v2.048c0 .565.554 1.024 1.238 1.024h1.238v1.535l1.857-1.535h1.238c.684 0 1.239-.459 1.239-1.024V6.997c0-.565-.555-1.024-1.239-1.024H13.89Z"
      fill="#1D2319"
    />
  </svg>
);

export default PhoneIcon;
