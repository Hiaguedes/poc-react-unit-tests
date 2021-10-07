import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginBox = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 20vw;
    height: 40vh;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    > * {
        margin: 10px 0;
    }
`

const Title = styled.h1`
    font-size: 1rem;
    font-weight: bold;
`

const InputWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 7rem;
`

const CreateAccountLink = styled(Link)`
    position: absolute;
    bottom: 0;
    
`

export {Wrapper, LoginBox, Title, InputWrapper, CreateAccountLink}