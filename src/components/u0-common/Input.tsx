import React from 'react';

type InputType = {
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type: string
    value?: string
    checked?: boolean
}

const Input: React.FC<InputType> = React.memo(({type, checked, value, onChange, placeholder}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            checked={checked}
        />
    )
})

export default Input;
