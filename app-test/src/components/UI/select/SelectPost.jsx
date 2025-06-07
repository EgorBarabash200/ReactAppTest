import React from 'react'
import cl from './SelectPost.module.css'
const SelectPost = ({options, defaultValue}) => {
  return (
    <select className={cl.mySelect}>
      <option disabled value="">{defaultValue}</option>
      {options.map(item =>
        <option key={item.value} value={item.value}>
            {item.name}
        </option>
      )}
    </select>
  )
}

export default SelectPost
