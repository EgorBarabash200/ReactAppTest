import React from 'react'
import cl from './PostInput.module.css'
const PostInput = (props) => {
  return (
    <input className={cl.myInput} {...props} />
  )
}

export default PostInput
