import React, {HTMLAttributes} from 'react'
import {Styles} from './input.styles'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    
}

const Input = ({...rest}: InputProps) => {
    const {InputBase} = Styles
    return (
        <InputBase {...rest} />
    )
}

export default Input