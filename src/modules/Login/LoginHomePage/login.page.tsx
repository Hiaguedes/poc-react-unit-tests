import React from 'react'
import {LoginBox, Wrapper, Title, InputWrapper, CreateAccountLink} from './login.styles'
import Input from '../../../components/Input/input.component'
const LoginPage = () => {
    return (
        <Wrapper>
            <LoginBox>
                <Title>Login</Title>
                <InputWrapper>
                    <Input placeholder="Usuário" />
                    <Input placeholder="Senha" />
                </InputWrapper>
                <CreateAccountLink to="/login/criar-conta">
                    Criar Conta
                </CreateAccountLink>
            </LoginBox>
        </Wrapper>
    )
}

export default LoginPage
