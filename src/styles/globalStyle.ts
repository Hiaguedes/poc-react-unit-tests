import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-rendering: optimizeTextRendering;
        outline: none;
        color: inherit;
        text-decoration: none;
    }
`

export {GlobalStyle}

