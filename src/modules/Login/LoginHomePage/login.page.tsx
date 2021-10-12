import {useEffect, useState, useCallback} from 'react'
import {LoginBox, Wrapper, Title, InputWrapper, CreateAccountLink} from './login.styles'
import Input from '../../../components/Input/input.component'
import {useAuth} from '../hooks/useAuth'
interface User {
    id: string;
    name: string;
    password: string;
}

const LoginPage = () => {

const [allUsers, setAllUsers] = useState<User[]>([] as User[])
const {handleLogin} = useAuth();
const [loginUser, setLoginUser] = useState({
    name: '',
    password: ''
})

const query = `
    query allUsers{
        allUsers{
          id
          name
          password
        }
      }`;

const handleAllUsers = async () => {

    await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
        })
      })
        .then(r => r.json())
        .then(data => {
            console.log('data returned:', data.data.allUsers)
            setAllUsers(data.data.allUsers)
        });
    }

    useEffect(() => {
        const request = async () => {
            await handleAllUsers();
        }

        request();

    }, [])

    const handleUserLogin = useCallback(() => {
        const hasUserInDB = allUsers.filter(user => user.name === loginUser.name && user.password === loginUser.password);
        console.log('usuario pego no momento do login: ', hasUserInDB)
        if(hasUserInDB.length >= 1){
            handleLogin({
                name: loginUser.name,
                id: hasUserInDB[0].id,
            })
        }


    }, [allUsers, loginUser])

    return (
        <Wrapper>
            <LoginBox>
                <Title>Login</Title>
                <InputWrapper>
                    <Input 
                        placeholder="Usuário" 
                        value={loginUser.name} 
                        onChange={({target}) => setLoginUser(prevValue => ({...prevValue, name: target.value}))} 
                        />
                    <Input 
                    value={loginUser.password}  
                    onChange={({target}) => setLoginUser(prevValue => ({...prevValue, password: target.value}))} 
                    placeholder="Senha" 
                    />
                </InputWrapper>
                <button data-testid="loginButton" onClick={handleUserLogin}>Login</button>
                <CreateAccountLink to="/login/criar-conta">
                    Criar Conta
                </CreateAccountLink>
            </LoginBox>
        </Wrapper>
    )
}

export default LoginPage
