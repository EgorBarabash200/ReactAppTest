import React from 'react';
import cl from './Button.module.css';
import { Button as AntdButton } from 'antd'; 

const CardButton = ({ children, ...props }) => {
  return (
    <AntdButton 
      type='primary' 
      {...props} 
      className={`${cl.myButton} ${props.className || ''}`}
    >
      {children}
    </AntdButton>
  )
}

export default CardButton;