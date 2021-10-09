import React, {InputHTMLAttributes} from 'react'
import {Styles} from './input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
}

const Input = ({value, ...rest}: InputProps) => {
    const {InputBase} = Styles
    return (
        <InputBase value={value} {...rest} />
    )
}

export default Input