import styled from "styled-components"


const StyledDiv = styled.div`
background-color: #0f084b;
font-family: "Roboto", sans-serif;
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
        background-color: #0f084b;
        overflow-y: hidden;
    }

    & li{
        list-style: none;
        background-color: #0f084b;
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
`


export default function Header() {

    return (
        <>
            <StyledDiv>
                <ul>
                    <li>Sobre mim</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </StyledDiv>
        </>
    )
}