import styled from 'styled-components'

const InputBase = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid lightgray;
    height: 1.5rem;
    padding: 10px;

    ::placeholder{
        color: lightgray;
    }
`

export const Styles = {InputBase}
