import React from 'react'
import { Input, Space } from 'antd';
import cl from './InputPhone.module.css'
const InputPhone = ({ value, valueCode, type, placeholder, onChange, onChangeCode }) => {
    return (
        <Space.Compact>
            <Input
                style={{ width: '20%' }}
                className={cl.myInpPhone}
                value={valueCode}
                onChange={onChangeCode} />
            <Input
                style={{ width: '80%' }}
                className={cl.myInpPhone}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Space.Compact>
    )
}

export default InputPhone
