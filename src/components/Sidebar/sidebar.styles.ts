import styled, {css} from 'styled-components'

interface SidebarWrapperProps {
    isOpen: boolean;
}

const Wrapper = styled.aside<SidebarWrapperProps>`
    height: 100%;
    background-color: #fff;
    box-shadow: 0 9px 0px 0px white, 0 -9px 0px 0px white, 12px 0 15px -4px rgba(0, 0, 0, 0.2);
    width: 200px;
    padding: 1rem 20px;
    box-sizing: border-box;

    transition: width 0.2s ease-in-out;

    ${({isOpen}) => !isOpen && css`
        width: 50px;
    `}
`

const MenuLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export {Wrapper, MenuLinksWrapper}