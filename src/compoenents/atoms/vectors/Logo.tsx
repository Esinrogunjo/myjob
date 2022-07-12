import * as React from "react";
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M94.658 24.826h3.736v1.495c.72-.753 1.334-1.262 1.843-1.528.543-.276 1.224-.415 2.043-.415 1.826 0 3.271.797 4.334 2.391 1.173-1.594 2.762-2.39 4.765-2.39 3.643 0 5.464 2.208 5.464 6.625V41h-3.753v-8.983c0-1.55-.188-2.646-.565-3.288-.387-.653-1.024-.98-1.909-.98-1.03 0-1.783.388-2.259 1.162-.465.775-.697 2.02-.697 3.737V41h-3.753v-8.934c0-2.878-.83-4.317-2.491-4.317-1.051 0-1.82.393-2.308 1.179-.476.786-.714 2.026-.714 3.72V41h-3.736V24.826Zm30.678 13.168-7.273-13.168h4.334l4.948 9.3 4.617-9.3h4.217l-12.885 24.975h-4.268l6.31-11.807Zm21.163-22.633v16.59c0 1.98-.138 3.459-.415 4.433-.277 1.107-.747 2.042-1.411 2.806-1.296 1.517-3.011 2.275-5.148 2.275a8.676 8.676 0 0 1-4.533-1.262l1.893-3.305c.941.631 1.821.947 2.64.947 1.151 0 1.948-.437 2.391-1.312.465-.874.698-2.402.698-4.583V15.362h3.885Zm3.911 17.436c0-2.336.835-4.323 2.507-5.961 1.672-1.639 3.708-2.458 6.111-2.458 2.413 0 4.461.825 6.144 2.474 1.66 1.65 2.49 3.676 2.49 6.078 0 2.424-.835 4.456-2.507 6.094-1.683 1.627-3.747 2.44-6.194 2.44-2.424 0-4.455-.83-6.094-2.49-1.638-1.638-2.457-3.697-2.457-6.177Zm3.819.066c0 1.617.432 2.895 1.295 3.836.886.952 2.054 1.428 3.504 1.428 1.461 0 2.629-.47 3.503-1.411.875-.941 1.312-2.198 1.312-3.77 0-1.571-.437-2.828-1.312-3.769-.885-.952-2.053-1.428-3.503-1.428-1.428 0-2.585.476-3.471 1.428-.885.952-1.328 2.18-1.328 3.686Zm20.383-19.91v13.75c1.494-1.55 3.188-2.325 5.081-2.325 2.181 0 3.996.814 5.446 2.441 1.45 1.616 2.176 3.631 2.176 6.044 0 2.491-.731 4.55-2.192 6.178-1.451 1.616-3.283 2.424-5.497 2.424-1.871 0-3.542-.72-5.014-2.159V41h-3.737V12.954h3.737Zm8.883 20.076c0-1.55-.42-2.811-1.262-3.786-.852-.996-1.92-1.494-3.204-1.494-1.373 0-2.491.482-3.355 1.445-.852.952-1.278 2.192-1.278 3.72 0 1.571.42 2.828 1.262 3.769.841.963 1.948 1.444 3.321 1.444 1.295 0 2.369-.481 3.221-1.444.864-.974 1.295-2.192 1.295-3.654Zm16.414-5.446-3.088 1.644c-.487-.996-1.091-1.495-1.81-1.495-.343 0-.637.117-.88.35-.244.22-.365.508-.365.863 0 .62.719 1.234 2.158 1.843 1.982.852 3.316 1.638 4.002 2.358.686.72 1.03 1.688 1.03 2.906 0 1.56-.576 2.867-1.727 3.919-1.118.996-2.469 1.494-4.052 1.494-2.712 0-4.633-1.323-5.762-3.969l3.188-1.478c.443.775.781 1.268 1.013 1.478.454.421.996.631 1.627.631 1.262 0 1.893-.575 1.893-1.727 0-.664-.487-1.284-1.461-1.86-.376-.188-.753-.37-1.129-.547-.376-.178-.758-.36-1.146-.548-1.085-.532-1.849-1.063-2.291-1.595-.565-.675-.847-1.544-.847-2.607 0-1.405.481-2.568 1.444-3.487.986-.918 2.181-1.378 3.587-1.378 2.07 0 3.609 1.068 4.616 3.205Z"
      fill={props.fill ? props.fill : "#00717D"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.34 6.808c-3.162 2.788-5.047 5.787-7.122 11.33-.758 2.025-1.113 2.376-2.68 2.656-.993.177-4.467-.049-7.719-.503-6.213-.868-10.072-.7-12.609.55-1.256.618-1.531.615-2.087-.022-.677-.777-1.575-.564-1.575.372 0 .306.159.405.353.22.468-.447 2.284 1.146 2.284 2.004 0 .716.646.898 1.226.346.19-.182.105-.608-.19-.946-.757-.87 3.434-1.412 6.252-.81 8.587 1.838 13.381 10.657 11.154 20.52-.821 3.633-1.093 3.893-3.331 3.19-4.623-1.454-9.85-8.138-10.648-13.619-.31-2.124.254-6.576 1.092-8.633.294-.718.068-.879-1.228-.879-2.079 0-3.124 2.275-1.845 4.014.738 1.003.72 1.218-.197 2.436-.826 1.097-.941 1.814-.644 4.01 1.155 8.528 9.683 16.16 18.98 16.987 6.685.595 14.055-2.355 18.142-7.26 2.068-2.482 3.428-3.256 3.428-1.95 0 .656 17.99 8.385 19.513 8.384.855-.001 3.31-5.05 2.721-5.598-.19-.178-4.541-2.026-9.668-4.107-5.893-2.392-9.725-3.682-10.423-3.508-1.076.268-1.095.165-.76-3.99.671-8.312-2.943-15.095-10.442-19.595-1.409-.846-1.411-.845-1.78.752-.261 1.132-.164 1.663.333 1.82 1.645.523 5.858 4.935 7.203 7.542 1.263 2.45 1.457 3.426 1.457 7.346s-.192 4.887-1.445 7.283c-.794 1.52-2.132 3.498-2.971 4.397l-1.527 1.634-.375-2.861c-.207-1.573-1.06-5.134-1.897-7.914-2.25-7.475-2.61-10.765-1.765-16.1.88-5.561 1.386-7.224 3.059-10.075C47.328 5.004 47.83 4 47.721 4c-.108 0-1.63 1.264-3.382 2.808ZM29.187 9.775c-4.34 1.738-3.137 8.953 1.707 10.247 2.254.602 4.613-.43 5.466-2.392 1.94-4.46-2.77-9.618-7.173-7.855Zm5.638.058c.027.693 1.731 2.468 2.712 2.825.597.218 1.165-.089 1.756-.947.48-.698.776-1.361.657-1.474-.474-.451-5.141-.819-5.125-.404Zm-11.409 3.624c-1.131.781-2.875 2.307-3.876 3.39l-1.819 1.97 1.716.16c2.27.21 5.991-2.838 6.454-5.287.172-.91.148-1.654-.053-1.654-.2 0-1.29.64-2.422 1.42ZM5.793 20.198c-.005.718-.156.91-.412.525-.284-.425-1.146-.002-2.892 1.42C1.119 23.258 0 24.394 0 24.67c0 .87 8.097 8.965 8.968 8.965.458 0 1.857-.994 3.109-2.208l2.275-2.209-1.676-.35c-.922-.193-1.553-.469-1.402-.613.151-.143 1.042-.006 1.98.305 1.324.44 1.801.425 2.129-.067.683-1.025.618-1.122-3.572-5.364-4.098-4.15-6.002-5.076-6.018-2.93Zm.368 2.983c-.168.4-.293.281-.318-.304-.023-.53.102-.826.277-.659.175.167.194.6.041.963Zm3.211 4.144c.792.41 1.125.753.74.764-.909.026-3.79-2.718-3.762-3.583.011-.366.372-.05.802.705.43.754 1.429 1.705 2.22 2.114Zm31.724 17.673c.035 1.368-.172 1.61-1.608 1.884-3.74.712-3.773.648-1.679-3.325l1.917-3.638.665 1.755c.366.965.683 2.46.705 3.324Z"
      fill={props.fill ? props.fill : "#00717D"}
    />
  </svg>
);

export default Logo;
