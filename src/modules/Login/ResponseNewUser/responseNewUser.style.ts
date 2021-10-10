import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    `

const ModalWrapper = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const ContentContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BlackBackground = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    inset: 0;
`

export {Wrapper, ModalWrapper, ContentContainer, BlackBackground}