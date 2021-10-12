import {useEffect, useState, useCallback} from 'react'
import {LoginBox, Wrapper, Title, InputWrapper, CreateAccountLink, ErrorMessage} from './login.styles'
import Input from '../../../components/Input/input.component'
import {useAuth} from '../hooks/useAuth'
interface User {
    id: string;
    name: string;
    password: string;
}

// interface DataResponse {
//     data: {
//         allUsers: User[];
//     }
// }

const LoginPage = () => {

const [allUsers, setAllUsers] = useState<User[]>([] as User[])
const {handleLogin} = useAuth();
const [errorMessage, setErrorMessage] = useState('')
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

    const response = await fetch('http://localhost:4000/', {
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
        .then((data) => {
            console.log('data q retorna para allUsers', data.data.allUsers)
            return data;
        } )

        return response
    }

    useEffect(() => {
        const request = async () => {
            await handleAllUsers()
                .then((data: any) => {
                setAllUsers(data.data.allUsers)
            });;
        }

        request()

    }, [])

    const handleUserLogin = useCallback(() => {
        const hasUserInDB = allUsers.filter(user => user.name === loginUser.name && user.password === loginUser.password);
        console.log('usuario pego no momento do login: ', hasUserInDB)
        if(hasUserInDB.length >= 1){
            setErrorMessage("");
            console.log('cehgou aqui no handleLogin')
            handleLogin({
                name: loginUser.name,
                id: hasUserInDB[0].id,
            })
        }else {
            setErrorMessage("Usuário não encontrado")
            return;
        }


    }, [allUsers, loginUser])

    return (
        <Wrapper>
            <LoginBox>
                <Title>Login</Title>
                <InputWrapper>
                    <Input 
                        data-testid="inputUsuario"
                        placeholder="Usuário" 
                        value={loginUser.name} 
                        onChange={({target}) => setLoginUser(prevValue => ({...prevValue, name: target.value}))} 
                        />
                    <Input 
                        data-testid="inputSenha"
                        value={loginUser.password}  
                        onChange={({target}) => setLoginUser(prevValue => ({...prevValue, password: target.value}))} 
                        placeholder="Senha" 
                    />
                </InputWrapper>
                <button data-testid="loginButton" onClick={handleUserLogin}>Login</button>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <CreateAccountLink to="/login/criar-conta">
                    Criar Conta
                </CreateAccountLink>
            </LoginBox>
        </Wrapper>
    )
}

export default LoginPage
