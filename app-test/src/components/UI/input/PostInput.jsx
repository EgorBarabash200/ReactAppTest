import React from "react";
import cl from "./PostInput.module.css";

// Переименовать с PostInput на просто Input
const PostInput = (props) => {
  // Деструктуризировать пропс
  console.log(props);
  return (
    <input
      className={cl.myInput}
      value={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default PostInput;
