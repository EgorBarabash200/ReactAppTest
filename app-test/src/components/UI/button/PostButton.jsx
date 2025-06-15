import React from 'react'
import cl from './PostButton.module.css'

// Переименоватьс PostButton на Button
const PostButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.myButton}>
      {children}
    </button>
  )
}

export default PostButton
