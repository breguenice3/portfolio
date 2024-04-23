import styled from "styled-components"

interface Props {
    name: string,
    language: string,
    url: string,
    liveurl: string
}

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: auto;
    padding-bottom: 20px;
    border-radius: 15px;
    background-color: gray;
    font-family: "Roboto", sans-serif;

    &:hover{
        transform: scale(1.1);
        transition: ease-in 0.2s;
    }

    & a{
        text-decoration: none;
        background-color: #c2e7d9;
        border-radius: 10px;
        padding: 5px;
        color: #0d0221;
        box-shadow: 1px 1px 1px black;
    }

    & a:hover{
        background-color: #0000ff4c;
        color: white;
        transition: ease-in-out 0.2s;
    }

    & div{
        display: flex;
        justify-content: space-between;
        padding: 0px 20px;
    }

    & h3{
        padding: 20px 20px 10px 20px;
    }

    & p{
        padding-bottom: 20px;
        padding-left: 20px;
    }
`

export default function Card({ name, language, url, liveurl }: Props) {

    return (
        <CardStyle>
            <h3>{name}</h3>
            <p>{language}</p>
            <div>
                <a href={url} target='_blank'>Repositório</a>
                <a href={liveurl} target='_blank'>Site</a>
            </div>
        </CardStyle>
    )
}