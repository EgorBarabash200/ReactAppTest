import React from "react";
import cl from "./Input.module.css";

const Input = ({value, type, placeholder, onChange}) => {
  return (
    <input
      className={cl.myInput}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
