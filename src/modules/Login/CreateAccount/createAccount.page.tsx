import {Styles} from './ceateAccount.styles'
import Input from '../../../components/Input/input.component';

const CreateAccount = () => {
    const {Wrapper, Title, InputWrapper, LoginHome} = Styles;
    return (
        <Wrapper>
            <Title>Cadastrar novo usuário</Title>
            <InputWrapper>
                <Input placeholder="Nome do novo usuário"/>
                <Input placeholder="Senha do novo usuário"/>
            </InputWrapper>
            <LoginHome to="/login">Voltar para a página de login</LoginHome>
        </Wrapper>
    )
}

export default CreateAccount
