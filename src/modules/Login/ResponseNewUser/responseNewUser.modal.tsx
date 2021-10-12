import {Dispatch} from 'react'
import {createPortal} from 'react-dom'
import {ModalWrapper, Wrapper, ContentContainer, BlackBackground} from './responseNewUser.style'
import {useHistory} from 'react-router-dom'

interface ModalProps {
    setModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

const NewUserModalResponse = ({setModalOpen}: ModalProps) => {
    
    const {push} = useHistory();

    const toogleModal = () => {
        setModalOpen(prevValue => !prevValue);
        push('/login')
    }
    return (
        <>
        <BlackBackground />
        <Wrapper data-testid="modalNovoUsuario">
            <ContentContainer>
                <ModalWrapper>
                    <h1>Usuário Criado</h1>
                    <button onClick={toogleModal}>Sair</button>
                </ModalWrapper>
            </ContentContainer>
        </Wrapper>
        </>
    )
}

export const NewUserModal = ({setModalOpen}: ModalProps) => createPortal(<NewUserModalResponse setModalOpen={setModalOpen} />, document.getElementById('modal')!)
