import React from 'react'
import cl from './Select.module.css'
import { Select } from 'antd';
const SelectCard = ({ options, defaultValue, value, onChange }) => {
  const handleChange = (selectedValue) => {
    const selectedOption = options.find(opt => opt.value === selectedValue)
    onChange(selectedOption);
  }
  return (
     <Select
      className={cl.mySelect}
      value={value}
      onChange={handleChange} // Передаем значение напрямую
    >
      <Select.Option disabled value="">
        {defaultValue}
      </Select.Option>
      {options.map(item => (
        <Select.Option key={item.value} value={item.value}>
          {item.job}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectCard
