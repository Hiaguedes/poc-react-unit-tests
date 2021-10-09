import {useState, useEffect} from 'react'
import {Styles} from './ceateAccount.styles'
import Input from '../../../components/Input/input.component';

const CreateAccount = () => {
    const {Wrapper, Title, InputWrapper, LoginHome} = Styles;

    const [createdData, setCreatedData] = useState({
        name: '',
        password: '',
    })

//     const query = `
//     query allUsers{
//         allUsers{
//           id
//           name
//           password
//         }
//       }`;

// const handleAllUsers = async () => {
//     await fetch('http://localhost:4000/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//           query,
//         })
//       })
//         .then(r => r.json())
//         .then(data => console.log('data returned:', data));
//     }

//     useEffect(() => {
//         const request = async () => {
//             await handleAllUsers();

//         }

//         request();

//     }, [])

const mutation = `mutation createUser($name: String!, $password: String!) {
    createUser(name: $name, password: $password) {
        name
        password
    }
}`

const handleCreateNewUser = async () => {
    await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: mutation,
          variables: {
              name: createdData.name,
              password: createdData.password
          }
        })
      })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
}

    return (
        <Wrapper>
            <Title>Cadastrar novo usuário</Title>
            <InputWrapper>
                <Input 
                    value={createdData.name} 
                    onChange={({target}) => setCreatedData(prevValue => ({...prevValue, name: target.value}))} 
                    placeholder="Nome do novo usuário"
                />
                <Input 
                    value={createdData.password} 
                    placeholder="Senha do novo usuário"
                    onChange={({target}) => setCreatedData(prevValue => ({...prevValue, password: target.value}))} 
                />
            </InputWrapper>
            <button onClick={handleCreateNewUser}>Criar Conta</button>
            <LoginHome to="/login">Voltar para a página de login</LoginHome>
        </Wrapper>
    )
}

export default CreateAccount
