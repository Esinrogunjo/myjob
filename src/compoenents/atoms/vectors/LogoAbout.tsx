import * as React from "react";
import { SVGProps } from "react";

const LogoAbout = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M341.615 146.87h-10.447l-1.675 4.944h-7.138l10.129-27.993h7.895l10.129 27.993h-7.218l-1.675-4.944Zm-1.754-5.264-3.47-10.248-3.429 10.248h6.899Zm20.549-8.893c.638-1.036 1.555-1.874 2.751-2.512 1.196-.638 2.565-.957 4.107-.957 1.835 0 3.496.465 4.985 1.396 1.489.93 2.658 2.259 3.509 3.987.877 1.728 1.316 3.736 1.316 6.022s-.439 4.307-1.316 6.061c-.851 1.728-2.02 3.071-3.509 4.028-1.489.93-3.15 1.395-4.985 1.395-1.568 0-2.937-.305-4.107-.917-1.17-.638-2.087-1.475-2.751-2.512v3.11h-6.819v-29.508h6.819v10.407Zm9.73 7.936c0-1.702-.479-3.031-1.436-3.988-.931-.983-2.087-1.475-3.469-1.475-1.356 0-2.513.492-3.47 1.475-.93.984-1.395 2.326-1.395 4.028 0 1.701.465 3.044 1.395 4.027.957.984 2.114 1.476 3.47 1.476 1.355 0 2.512-.492 3.469-1.476.957-1.01 1.436-2.366 1.436-4.067Zm20.644 11.484c-2.18 0-4.147-.465-5.902-1.395-1.728-.931-3.097-2.26-4.107-3.988-.984-1.728-1.475-3.748-1.475-6.061 0-2.286.505-4.294 1.515-6.022 1.01-1.754 2.393-3.097 4.147-4.027 1.755-.931 3.722-1.396 5.902-1.396s4.147.465 5.902 1.396c1.754.93 3.137 2.273 4.147 4.027 1.01 1.728 1.515 3.736 1.515 6.022s-.518 4.306-1.555 6.061a10.259 10.259 0 0 1-4.187 3.988c-1.755.93-3.722 1.395-5.902 1.395Zm0-5.901c1.303 0 2.406-.479 3.31-1.436.93-.957 1.396-2.326 1.396-4.107 0-1.781-.452-3.15-1.356-4.108-.877-.957-1.967-1.435-3.27-1.435-1.329 0-2.433.478-3.31 1.435-.877.931-1.316 2.3-1.316 4.108 0 1.781.426 3.15 1.276 4.107.878.957 1.968 1.436 3.27 1.436Zm37.234-16.669v22.251h-6.819v-3.03c-.691.983-1.635 1.781-2.831 2.392-1.17.585-2.473.878-3.908.878-1.702 0-3.204-.372-4.506-1.117-1.303-.771-2.313-1.874-3.031-3.31-.718-1.435-1.077-3.123-1.077-5.064v-13h6.78v12.083c0 1.489.385 2.645 1.156 3.469.771.824 1.808 1.236 3.11 1.236 1.33 0 2.38-.412 3.151-1.236.771-.824 1.156-1.98 1.156-3.469v-12.083h6.819Zm17.3 16.469v5.782h-3.47c-2.472 0-4.399-.598-5.782-1.794-1.382-1.223-2.073-3.203-2.073-5.942v-8.852h-2.712v-5.663h2.712v-5.423h6.819v5.423h4.466v5.663h-4.466v8.932c0 .665.159 1.143.478 1.436.319.292.851.438 1.595.438h2.433Zm18.948-22.211v16.748c0 1.675.412 2.964 1.236 3.868.824.904 2.034 1.356 3.629 1.356 1.595 0 2.818-.452 3.669-1.356.85-.904 1.276-2.193 1.276-3.868v-16.748h6.819v16.708c0 2.499-.532 4.613-1.596 6.341a10.186 10.186 0 0 1-4.306 3.908c-1.781.877-3.775 1.316-5.982 1.316-2.206 0-4.187-.426-5.941-1.276-1.728-.878-3.098-2.18-4.108-3.908-1.01-1.755-1.515-3.882-1.515-6.381v-16.708h6.819Zm31.546 28.273c-2.047 0-3.882-.333-5.503-.997-1.622-.665-2.925-1.649-3.908-2.951-.957-1.303-1.462-2.871-1.516-4.706h7.258c.106 1.037.465 1.835 1.077 2.393.611.532 1.409.797 2.392.797 1.01 0 1.808-.226 2.393-.677.585-.479.877-1.13.877-1.954 0-.692-.239-1.263-.718-1.715-.452-.452-1.023-.824-1.714-1.117-.665-.292-1.622-.624-2.871-.997-1.808-.558-3.284-1.116-4.427-1.674-1.143-.559-2.127-1.383-2.951-2.473-.824-1.09-1.236-2.512-1.236-4.267 0-2.605.944-4.639 2.831-6.101 1.888-1.489 4.347-2.233 7.378-2.233 3.083 0 5.569.744 7.457 2.233 1.887 1.462 2.897 3.509 3.03 6.141h-7.377c-.053-.904-.385-1.608-.997-2.113-.611-.532-1.396-.798-2.353-.798-.824 0-1.488.226-1.994.678-.505.425-.757 1.05-.757 1.874 0 .904.425 1.609 1.276 2.114.851.505 2.18 1.05 3.988 1.635 1.807.611 3.269 1.196 4.386 1.754 1.143.559 2.127 1.369 2.951 2.433.824 1.063 1.236 2.432 1.236 4.107 0 1.595-.412 3.044-1.236 4.347-.798 1.302-1.967 2.339-3.509 3.11-1.542.771-3.363 1.157-5.463 1.157ZM239.692 61.69h9.312v3.725c1.793-1.876 3.324-3.145 4.594-3.807 1.352-.69 3.048-1.035 5.09-1.035 4.552 0 8.153 1.987 10.802 5.96 2.924-3.973 6.883-5.96 11.877-5.96 9.077 0 13.616 5.505 13.616 16.513V102h-9.353V79.61c0-3.862-.469-6.594-1.407-8.194-.966-1.628-2.552-2.442-4.759-2.442-2.566 0-4.443.966-5.629 2.897-1.159 1.932-1.738 5.036-1.738 9.312V102h-9.353V79.735c0-7.174-2.069-10.76-6.208-10.76-2.621 0-4.539.979-5.753 2.938-1.186 1.959-1.779 5.049-1.779 9.27V102h-9.312V61.69Zm76.459 32.82-18.127-32.82h10.802l12.333 23.176 11.505-23.175h10.512l-32.115 62.243h-10.636l15.726-29.425Zm52.745-56.41v41.345c0 4.939-.344 8.622-1.034 11.05-.69 2.759-1.863 5.09-3.518 6.994-3.228 3.78-7.504 5.67-12.829 5.67-4.029 0-7.795-1.049-11.299-3.145l4.718-8.236c2.345 1.572 4.539 2.359 6.581 2.359 2.869 0 4.855-1.09 5.959-3.27 1.159-2.18 1.738-5.987 1.738-11.422V38.101h9.684Zm9.746 43.456c0-5.822 2.083-10.774 6.249-14.858 4.167-4.083 9.243-6.125 15.23-6.125 6.015 0 11.119 2.056 15.313 6.167 4.138 4.11 6.208 9.16 6.208 15.147 0 6.042-2.083 11.105-6.249 15.188-4.194 4.056-9.34 6.084-15.437 6.084-6.043 0-11.105-2.069-15.189-6.208-4.083-4.083-6.125-9.215-6.125-15.395Zm9.519.165c0 4.028 1.076 7.215 3.228 9.56 2.207 2.373 5.118 3.56 8.732 3.56 3.642 0 6.553-1.173 8.733-3.518 2.179-2.346 3.269-5.477 3.269-9.395 0-3.918-1.09-7.05-3.269-9.394-2.208-2.373-5.118-3.56-8.733-3.56-3.559 0-6.442 1.187-8.649 3.56-2.207 2.372-3.311 5.435-3.311 9.187Zm50.8-49.62v34.266c3.725-3.863 7.946-5.794 12.664-5.794 5.435 0 9.96 2.028 13.574 6.084 3.615 4.028 5.422 9.05 5.422 15.064 0 6.208-1.821 11.34-5.463 15.395-3.614 4.029-8.181 6.043-13.699 6.043-4.662 0-8.828-1.794-12.498-5.38V102h-9.312V32.1h9.312Zm22.141 50.034c0-3.863-1.048-7.008-3.145-9.436-2.125-2.483-4.787-3.725-7.987-3.725-3.422 0-6.208 1.2-8.36 3.601-2.125 2.373-3.187 5.463-3.187 9.27 0 3.918 1.048 7.05 3.145 9.395 2.097 2.4 4.856 3.6 8.277 3.6 3.228 0 5.905-1.2 8.029-3.6 2.152-2.428 3.228-5.463 3.228-9.105Zm40.909-13.574-7.697 4.097c-1.214-2.483-2.718-3.725-4.511-3.725-.856 0-1.587.29-2.194.87-.607.551-.91 1.268-.91 2.151 0 1.545 1.793 3.077 5.38 4.594 4.938 2.124 8.263 4.083 9.974 5.877 1.71 1.793 2.566 4.207 2.566 7.242 0 3.89-1.435 7.146-4.305 9.767-2.786 2.483-6.152 3.725-10.098 3.725-6.759 0-11.546-3.297-14.36-9.891l7.946-3.684c1.103 1.932 1.945 3.16 2.524 3.684 1.131 1.048 2.483 1.572 4.056 1.572 3.145 0 4.718-1.434 4.718-4.304 0-1.655-1.214-3.2-3.642-4.635-.938-.469-1.876-.924-2.814-1.366-.938-.441-1.89-.896-2.856-1.365-2.704-1.325-4.607-2.649-5.711-3.973-1.407-1.683-2.111-3.85-2.111-6.498 0-3.504 1.2-6.4 3.601-8.69 2.455-2.29 5.435-3.436 8.939-3.436 5.159 0 8.995 2.663 11.505 7.988Z"
      fill="#00717D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M105.247 16.968c-7.506 6.949-11.981 14.423-16.906 28.236-1.799 5.047-2.641 5.923-6.36 6.62-2.357.443-10.603-.12-18.322-1.254-14.748-2.162-23.909-1.742-29.93 1.371-2.98 1.541-3.634 1.534-4.953-.055-1.606-1.935-3.74-1.406-3.74.928 0 .762.377 1.009.838.548 1.113-1.113 5.422 2.857 5.422 4.996 0 1.784 1.533 2.237 2.91.86.453-.453.25-1.513-.45-2.357-1.798-2.167 8.15-3.519 14.839-2.017 20.383 4.58 31.762 26.56 26.474 51.141-1.947 9.054-2.592 9.702-7.905 7.949-10.972-3.622-23.379-20.282-25.276-33.94-.734-5.295.604-16.392 2.594-21.517.696-1.79.162-2.19-2.915-2.19-4.934 0-7.415 5.669-4.38 10.004 1.752 2.5 1.71 3.035-.466 6.07-1.962 2.734-2.234 4.52-1.528 9.996 2.741 21.252 22.982 40.275 45.05 42.335 15.867 1.482 33.36-5.87 43.062-18.095 4.908-6.185 8.137-8.114 8.137-4.86 0 1.635 42.702 20.898 46.317 20.896 2.028-.003 7.854-12.587 6.458-13.952-.453-.444-10.779-5.05-22.947-10.236-13.989-5.962-23.085-9.176-24.742-8.743-2.553.668-2.599.411-1.804-9.942 1.593-20.719-6.985-37.622-24.784-48.84-3.345-2.108-3.351-2.104-4.225 1.874-.621 2.823-.39 4.147.79 4.54 3.903 1.3 13.905 12.296 17.098 18.796 2.998 6.105 3.457 8.538 3.457 18.308s-.456 12.18-3.43 18.151c-1.885 3.787-5.06 8.718-7.053 10.957l-3.624 4.073-.89-7.13c-.49-3.92-2.516-12.796-4.501-19.723-5.342-18.631-6.198-26.83-4.191-40.128 2.091-13.86 3.289-18.003 7.26-25.109 1.71-3.058 2.899-5.56 2.643-5.56-.257 0-3.87 3.15-8.027 6.999Zm-35.969 7.394c-10.3 4.332-7.445 22.314 4.054 25.539 5.349 1.5 10.947-1.072 12.973-5.962 4.605-11.117-6.575-23.97-17.027-19.577Zm13.384.145c.065 1.727 4.11 6.15 6.437 7.04 1.417.544 2.766-.22 4.167-2.359 1.14-1.74 1.843-3.394 1.56-3.674-1.124-1.125-12.203-2.042-12.164-1.007ZM55.58 33.538c-2.685 1.948-6.825 5.751-9.2 8.45l-4.317 4.91 4.072.396c5.388.526 14.22-7.071 15.32-13.174.408-2.267.352-4.122-.125-4.122s-3.065 1.593-5.75 3.54ZM13.751 50.34c-.012 1.788-.37 2.266-.979 1.308-.673-1.06-2.719-.005-6.865 3.54C2.657 57.964 0 60.797 0 61.482c0 2.169 19.22 22.343 21.286 22.343 1.088 0 4.408-2.477 7.38-5.504l5.401-5.504-3.978-.874c-2.19-.48-3.687-1.168-3.329-1.526.36-.358 2.474-.016 4.702.76 3.14 1.095 4.274 1.058 5.051-.168 1.621-2.553 1.467-2.796-8.477-13.368-9.73-10.343-14.248-12.652-14.285-7.302Zm.874 7.433c-.4.998-.696.701-.756-.757-.054-1.32.242-2.058.657-1.642.416.415.46 1.496.1 2.4Zm7.621 10.33c1.88 1.02 2.67 1.876 1.755 1.903-2.155.065-8.994-6.773-8.929-8.929.028-.914.884-.124 1.904 1.755s3.391 4.25 5.27 5.27Zm75.301 44.046c.083 3.409-.408 4.012-3.817 4.694-8.878 1.775-8.955 1.616-3.986-8.286l4.55-9.067 1.58 4.373c.867 2.406 1.62 6.134 1.673 8.286Z"
      fill="#00717D"
    />
  </svg>
);

export default LogoAbout;
