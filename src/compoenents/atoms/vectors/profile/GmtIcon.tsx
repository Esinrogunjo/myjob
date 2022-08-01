import * as React from "react";
import { SVGProps } from "react";

const GmtIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M.5.5h48.197v40H.5z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.0068 .0082)" />
      </pattern>
      <image
        id="b"
        width={147}
        height={122}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default GmtIcon;
