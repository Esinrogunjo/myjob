import React from "react";
export type InputType = "text" | "email" | "password";
type InputTypeProp = {
  placeholder: string;
  className: string;
  type: InputType;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const Input = ({ type, placeholder, className }: InputTypeProp) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`${className && className}`}
    />
  );
};

export default Input;
