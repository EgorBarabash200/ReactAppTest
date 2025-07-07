import React from "react";
import cl from "./InputName.module.css";
import { Input } from 'antd';
const InputName = ({value, type, placeholder, onChange}) => {
  return (
    <Input
      className={cl.myInput}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputName;
