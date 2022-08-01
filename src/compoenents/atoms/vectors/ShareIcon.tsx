import * as React from "react";
import { SVGProps } from "react";

const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width ? props.width : 24}
    height={props.height ? props.height : 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.368 10.053a3.474 3.474 0 1 0-3.447-3.045L8.2 9.868a3.474 3.474 0 1 0 0 5l5.72 2.86a3.474 3.474 0 1 0 1.036-2.071l-5.72-2.86a3.511 3.511 0 0 0 0-.857l5.72-2.86a3.462 3.462 0 0 0 2.411.973Z"
      fill="#00717D"
    />
  </svg>
);

export default ShareIcon;
