import React from 'react'
import cl from './Select.module.css'

const Select = ({ options, defaultValue, value, onChange }) => {
  console.log(value);
  const handleChange = (e) => {
    const selectedValue = e.target.value
    const selectedOption = options.find(opt => opt.value === selectedValue)
    onChange(selectedOption);
  }
  return (
    <select
      className={cl.mySelect}
      value={value}
      onChange={handleChange}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(item =>
        <option key={item.value} value={item.value}>
          {item.job}
        </option>
      )}
    </select>
  )
}

export default Select
