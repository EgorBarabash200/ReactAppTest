import React from 'react'
import cl from './PostButton.module.css'
const PostButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.myButton}>
      {children}
    </button>
  )
}

export default PostButton
