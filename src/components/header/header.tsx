import styled from "styled-components"

const StyledDiv = styled.div`
background-color: #bdeb07;
/* box-shadow: 1px 10px 1px gainsboro; */
font-family: 'Roboto Mono', monospace;
font-weight: 600;
width: 100%;
height: 70px;
color: black;
display: flex;
align-items: center;

    & ul{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding: 0px 400px;
        overflow-y: hidden;
    }

    & li{
        list-style: none;
        user-select: none;
    }

    & li:hover{
        text-decoration: underline 2px;
        color: #a6cfd5;
        transform: scale(1.1);
        transition: ease-in-out 0.1s;
        text-underline-offset: 5px;
        cursor: pointer;
    }

    & a{
        text-decoration: none;
        color: #484848;
    }

    @media (min-width: 375px) and (max-width: 1440px) {
    width: 100%;
    min-width: 375px;
    color: beige;
    font-weight: 500;
    
    & ul{
        height: auto;
        padding: 0px;
    }

    & a{
        font-size: 14px;
    }
}
`


export default function Header() {

    return (
        <>
            <StyledDiv>
                <ul>
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
            </StyledDiv>
        </>
    )
}