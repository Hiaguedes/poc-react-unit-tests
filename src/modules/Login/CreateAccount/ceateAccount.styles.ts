import styled from "styled-components";
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > * {
        margin: 10px 0;
    }
`

const Title = styled.h1`
    font-size: 1rem;
    font-weight: bold;
`

const InputWrapper = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 7rem;
`

const LoginHome = styled(Link)``

export const Styles = {Wrapper, Title, InputWrapper, LoginHome}