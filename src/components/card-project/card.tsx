import styled from "styled-components"

interface Props {
    img: any,
    name: string,
    language: string,
    url: string,
    liveurl: string
}

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 450px;
    font-size: 15px;
    border-radius: 15px;
    background-color: #bdeb07;
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    cursor: pointer;
    padding: 0px;

    & img{
        width: 100%;
        height: 300px;
    }

    &:hover{
        transform: scale(1.1);
        transition: ease-in 0.2s;
        box-shadow: 5px 5px 5px 5px #0d022189;
    }

    & a{
        text-decoration: none;
        background-color: #e0e0e0;
        border-radius: 10px;
        padding: 5px;
        text-align: center;
        color: #484848;
        width: 100px;
        height: 30px;
        box-shadow: 1px 1px 1px black;
    }

    & a:hover{
        background-color: #808080;
        color: white;
        transition: ease-in-out 0.2s;
    }

    & div{
        display: flex;
        height: 40px;
        align-items: end;
        justify-content: space-between;
        padding: 0px 80px 5px 80px;
    }

    & h3{
        padding: 15px 0px;
        color: #484848;
    }

    & p{
        padding-bottom: 20px;
        color: #484848;
    }

    @media (min-width: 375px) and (max-width: 1440px) {
        width: 350px;
        height: 340px;
        font-size: 15px;
        padding: 0px;

        & img{
        width: 100%;
        height: 150px;
    }

        & p{
            padding-bottom: 5px;
        }

        & a{
            min-width: 110px;
        }

    & div{
        display: flex;
        flex-direction: column;
        height: 100px;
        align-items: center;
        justify-content: space-evenly;
        padding: 0px;
    }
    }
`

export default function Card({ img, name, language, url, liveurl }: Props) {

    return (
        <CardStyle>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{language}</p>
            <div>
                <a href={url} target='_blank'>Repositório</a>
                <a href={liveurl} target='_blank'>Site</a>
            </div>
        </CardStyle>
    )
}