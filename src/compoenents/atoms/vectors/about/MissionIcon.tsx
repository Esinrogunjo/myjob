import * as React from "react";
import { SVGProps } from "react";

const MissionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.05.119c-.207.056-.943.167-1.635.247-3.492.402-8.139 1.622-10.9 2.863-7.018 3.153-12.105 7.135-16.526 12.934-1.309 1.718-2.827 4.117-3.691 5.835-1.543 3.066-2.89 6.83-3.344 9.348-.104.58-.242 1.225-.305 1.435-.064.21-.157.796-.207 1.301-.05.506-.17 1.366-.266 1.911-.206 1.165-.24 6.386-.054 7.932.311 2.564.421 3.227.837 5.019.576 2.487.874 3.414 1.943 6.049 1.62 3.988 3.562 7.214 6.283 10.434 5.163 6.11 11.311 10.247 18.807 12.655 3.813 1.226 5.796 1.569 10.694 1.85 4.288.247 8.396-.181 12.603-1.314 8.344-2.247 15.295-6.727 20.869-13.449 1.296-1.564 1.851-2.338 3.1-4.328 2.53-4.029 4.389-8.86 5.246-13.632.847-4.713.83-9.97-.047-14.75-.564-3.069-2.517-8.84-3.121-9.218-.125-.078-.926.317-2.745 1.355a187.299 187.299 0 0 1-3.29 1.846c-.402.212-.722.466-.723.573 0 .106.204.692.453 1.302 1.675 4.09 2.507 9.343 2.188 13.81-.305 4.264-1.331 8.049-3.207 11.836-2.46 4.966-5.922 9.064-10.191 12.068-4.974 3.499-10.363 5.509-16.166 6.03-3.662.328-6.51.182-9.803-.503-2.871-.597-4.587-1.177-7.497-2.532-5.92-2.758-11.342-7.859-14.63-13.765-1.163-2.09-2.506-5.532-2.845-7.294a35.566 35.566 0 0 0-.379-1.73c-.207-.805-.526-3.376-.632-5.1-.186-3.02.483-7.757 1.564-11.07 1.086-3.324 3.509-7.683 5.8-10.433 1.124-1.347 3.928-4.002 5.525-5.232 1.729-1.33 4.867-3.184 6.535-3.862 2.942-1.194 3.393-1.339 6.222-1.996 2.18-.507 3.476-.643 6.743-.708 3.077-.06 3.286-.05 5.095.269 3.669.644 5.927 1.314 8.744 2.59 4.562 2.07 8.504 5.048 11.532 8.712.542.657 1.133 1.363 1.314 1.57l.328.377.993-.56c.546-.308 1.502-.854 2.125-1.214.622-.359 1.684-.959 2.359-1.333.911-.506 1.226-.744 1.226-.928 0-.3-2.426-3.292-4.032-4.972-4.253-4.452-9.8-7.983-15.908-10.127-1.833-.643-5-1.425-6.778-1.673-.7-.097-1.84-.262-2.532-.366-1.37-.205-6.978-.25-7.674-.062Zm58.06 3.298c-.243.167-.959.58-1.592.92-.633.338-2.033 1.13-3.112 1.76-3.051 1.781-4.293 2.485-5.966 3.382-.851.456-1.625.948-1.718 1.093-.093.145-.381 1.1-.64 2.122-.26 1.023-.534 1.924-.61 2.002-.076.08-1.299.798-2.717 1.598-1.419.8-3.372 1.912-4.34 2.47-.97.56-2.47 1.411-3.334 1.893-.865.482-2.082 1.168-2.705 1.524-1.147.656-2.594 1.482-6.353 3.624-1.142.65-2.784 1.59-3.649 2.089-.865.498-2.139 1.221-2.83 1.607l-2.265 1.261c-.553.308-1.374.78-1.824 1.05-1.622.97-5.14 2.983-7.297 4.176-3.66 2.025-4.022 2.265-4.288 2.842-.305.66-.3 1.115.017 1.76.302.616.913.918 1.853.918.536 0 .853-.15 3.174-1.504a329.408 329.408 0 0 1 7.925-4.511 324.506 324.506 0 0 0 4.906-2.782 219.785 219.785 0 0 1 3.586-2.046c.968-.537 2.327-1.311 3.019-1.72 1.208-.712 5.518-3.16 9.624-5.468A456.83 456.83 0 0 0 78 21.18c4.437-2.565 5.399-3.096 5.612-3.096.234 0 3.155.792 3.715 1.007.396.152.638.043 2.835-1.275.818-.49 1.969-1.15 2.557-1.465 1.36-.727 2.679-1.473 5.291-2.993 1.146-.666 2.179-1.248 2.296-1.292a.356.356 0 0 0 .213-.31c0-.167-.127-.25-.472-.31-.26-.046-.783-.18-1.163-.3s-1.416-.401-2.301-.626c-.885-.225-1.695-.47-1.8-.547-.17-.122-.122-.518.406-3.388.373-2.025.554-3.292.48-3.362-.072-.067-.294.009-.56.193ZM37.68 15.862c-2.069.17-5.435 1.063-7.422 1.968-7.57 3.445-13.008 10.601-14.096 18.548-.179 1.305-.205 2.132-.145 4.51.07 2.77.095 3.001.511 4.71 1.618 6.638 5.634 12.003 11.527 15.4 4.613 2.659 9.688 3.71 15.342 3.176 1.668-.157 4.759-.883 6.234-1.464 2.445-.962 4.89-2.458 7.185-4.396 1.225-1.034 1.869-1.726 3.857-4.145 1.278-1.556 2.796-4.663 3.486-7.134.786-2.813.996-4.25 1.027-7.033.03-2.646-.147-3.942-.926-6.797-.428-1.568-.655-2.107-.888-2.107-.085 0-1.088.54-2.23 1.2-1.142.66-2.727 1.558-3.523 1.997-.795.44-1.522.859-1.615.932-.186.148-.155.484.154 1.634.11.409.236 1.44.28 2.293.351 6.725-3.788 13.014-10.185 15.477-1.437.554-4.285 1.13-5.587 1.13-1.226 0-3.84-.476-5.251-.956-2.43-.826-4.508-2.162-6.373-4.099-2.135-2.216-3.437-4.702-4.076-7.778-.3-1.441-.327-1.79-.267-3.403.078-2.109.403-3.515 1.29-5.587 1.812-4.228 5.194-7.352 9.442-8.722.874-.281 2.047-.535 3.248-.702 1.838-.256 1.918-.257 3.512-.05.898.117 2.045.32 2.549.45 2.282.588 4.928 2.095 6.818 3.882.886.838 1.078.967 1.258.845.4-.271 3.358-1.984 4.237-2.453 1.42-.757 3.083-1.796 3.083-1.925 0-.226-1.856-2.283-2.846-3.156-4.126-3.636-8.66-5.666-13.95-6.247-1.305-.143-3.918-.143-5.66.002Zm.62 16.273c-1.428.386-2.337.875-3.362 1.81-1.026.935-1.57 1.718-2.09 3.008-.545 1.353-.724 2.694-.527 3.96.44 2.83 1.975 4.928 4.515 6.17 1.055.515 2.14.742 3.548.742 2.722-.001 4.826-.937 6.347-2.823 1.023-1.269 1.83-3.34 1.83-4.7 0-.82-.12-.83-1.32-.097-1.213.74-4.2 2.375-4.632 2.535-.864.321-2.31-.033-3.091-.757-.235-.217-.567-.697-.738-1.065-.531-1.143-.273-2.624.606-3.47.334-.321 3.094-1.987 5.063-3.056.472-.255.892-.552.933-.66.103-.262-.333-.598-1.413-1.09-1.822-.83-3.818-1.008-5.67-.507Z"
      fill="#00717D"
    />
  </svg>
);

export default MissionIcon;
