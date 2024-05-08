import styled from "styled-components"
import { StringMappingType } from "typescript"

interface Props {
    icon: any,
    text: string,
    name: String,
    link: string
}

const StyledDiv = styled.div`
    width: 450px;
    height: 100px;
    background-color: #8080807d;
    border-radius: 15px;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    align-items: center;

    & a{
        display: flex;
        flex-direction: row;
        gap: 20px;
        height: 100%;
        padding-left: 20px;
        text-decoration: none;
        align-items: center;
        justify-content: space-between;
        
        & div{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 500px;
            font-family: 'Roboto Mono', monospace;
        }
    }

    & :hover{
        background-color: #808080;
    }

`

export default function Skill({ icon, text, name, link }: Props) {
    return (
        <StyledDiv>
            <a href={link} target="_blank">
                {icon}
                <div>
                    <h3>{name}</h3>
                    <p>{text}</p>
                </div>
            </a>
        </StyledDiv>
    )
}