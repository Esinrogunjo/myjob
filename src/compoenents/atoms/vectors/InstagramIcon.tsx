import * as React from "react";
import { SVGProps } from "react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={25} cy={25} r={25} fill="#fff" fillOpacity={0.2} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.073 16.666c1.32.004 1.642.017 2.37.051.885.04 1.49.182 2.021.388a4.104 4.104 0 0 1 1.476.96c.427.417.752.918.964 1.478.205.528.348 1.137.387 2.022.034.762.041 1.08.042 2.58v1.31c0 1.852-.012 2.155-.048 2.98-.04.886-.183 1.492-.388 2.023a4.263 4.263 0 0 1-2.439 2.438c-.527.205-1.136.349-2.022.388-.89.039-1.173.048-3.436.048h-.235c-2.05 0-2.344-.01-3.2-.048-.887-.04-1.492-.183-2.023-.388a4.104 4.104 0 0 1-1.476-.96 4.111 4.111 0 0 1-.963-1.479c-.206-.527-.349-1.136-.388-2.021a45.068 45.068 0 0 1-.048-2.398V23.93a41.38 41.38 0 0 1 .051-2.368c.04-.886.183-1.491.388-2.022a4.103 4.103 0 0 1 .96-1.475 4.069 4.069 0 0 1 1.479-.964c.528-.205 1.137-.348 2.022-.387.73-.032 1.052-.045 2.398-.048h2.108Zm-.194 1.514h-1.737c-1.448.003-1.75.015-2.5.048-.81.036-1.253.172-1.547.286a2.588 2.588 0 0 0-.957.622c-.28.267-.492.596-.625.958-.114.293-.251.732-.287 1.546-.036.811-.047 1.1-.049 2.904v.926c.002 1.803.013 2.09.05 2.904.035.81.172 1.253.286 1.546.133.362.345.687.622.957.267.277.596.489.957.622.293.114.733.251 1.547.287.746.033 1.05.045 2.5.048h1.735c1.448-.003 1.75-.015 2.5-.048.81-.036 1.254-.173 1.547-.287a2.765 2.765 0 0 0 1.582-1.582c.114-.293.251-.733.287-1.547.035-.781.046-1.074.049-2.691v-1.344c-.003-1.618-.014-1.913-.049-2.695-.036-.81-.172-1.253-.287-1.546a2.591 2.591 0 0 0-.622-.958 2.564 2.564 0 0 0-.957-.622c-.293-.114-.733-.25-1.547-.286-.746-.033-1.048-.045-2.498-.048Zm-.876 2.539A4.283 4.283 0 0 1 29.286 25a4.283 4.283 0 0 1-8.565 0 4.283 4.283 0 0 1 4.282-4.281Zm0 1.504a2.778 2.778 0 1 0 0 5.556 2.778 2.778 0 0 0 0-5.556Zm4.452-2.673a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      fill="#fff"
    />
  </svg>
);

export default InstagramIcon;
