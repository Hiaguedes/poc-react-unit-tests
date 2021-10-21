import {useState, useEffect} from 'react'
import {Styles} from './ceateAccount.styles'
import Input from '../../../components/Input/input.component';
import {NewUserModal} from '../ResponseNewUser/responseNewUser.modal'
import { useMutation } from '@apollo/client';
import {CREATE_ACCOUNT} from './graphql';

const CreateAccount = () => {
    const {Wrapper, Title, InputWrapper, LoginHome} = Styles;
    const [showModal, setShowModal] = useState(false);

    const [createdData, setCreatedData] = useState({
        name: '',
        password: '',
    })

const mutation = `mutation createUser($name: String!, $password: String!) {
    createUser(name: $name, password: $password) {
        name
        password
    }
}`

const [mutationCreateUser] = useMutation<any, {name: string; password: string}>(CREATE_ACCOUNT)

const handleMutation = async () => {
    await mutationCreateUser({
        variables: {
            name: createdData.name,
            password: createdData.password
        }
    })
    .then(data => {
        setCreatedData({
            name: '',
            password: '',
        })
        setShowModal(true)
    })
    .catch((e) => {
        console.error(e)
    })
    ;
}

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


    setCreatedData({
        name: '',
        password: '',
    })
    setShowModal(true)
}

    return (
        <Wrapper>
            {showModal && <NewUserModal setModalOpen={setShowModal}/>}
            <Title>Cadastrar novo usuário</Title>
            <InputWrapper>
                <Input 
                    data-testid="nomeInput"
                    value={createdData.name} 
                    onChange={({target}) => setCreatedData(prevValue => ({...prevValue, name: target.value}))} 
                    placeholder="Nome do novo usuário"
                />
                <Input 
                    data-testid="senhaInput"
                    value={createdData.password} 
                    placeholder="Senha do novo usuário"
                    onChange={({target}) => setCreatedData(prevValue => ({...prevValue, password: target.value}))} 
                />
            </InputWrapper>
            <button data-testid="criarContaButao" onClick={process.env.REACT_APP_ENV === 'test'? handleMutation : handleCreateNewUser}>Criar Conta</button>
            <LoginHome data-testid="botaoVoltar" to="/login">Voltar para a página de login</LoginHome>
        </Wrapper>
    )
}

export default CreateAccount
