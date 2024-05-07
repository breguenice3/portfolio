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
    background-color: #01424d;
    font-family: "Roboto", sans-serif;
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
        background-color: #c2e7d9;
        border-radius: 10px;
        padding: 5px;
        text-align: center;
        color: #0d0221;
        width: 90px;
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
    }

    & p{
        padding-bottom: 20px;
    }

    @media (min-width: 375px) and (max-width: 1440px) {
        width: 350px;
        height: 300px;
        font-size: 15px;
        padding: 0px;

        & img{
        width: 100%;
        height: 150px;
    }

    & div{
        display: flex;
        height: 40px;
        align-items: end;
        justify-content: space-between;
        padding: 0px 5px 5px 5px;
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