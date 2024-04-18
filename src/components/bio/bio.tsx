import { useState, useEffect } from "react"
import styled from "styled-components";
import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";


const Div = styled.div`
display: flex;
flex-direction: row-reverse;
width: 100%;
justify-content: space-evenly;
height: 100vh;
padding: 200px 0px;

& img{
    width: 400px;
    border-radius: 50%;
}

& img:hover{
    transform: scale(1.1);
}
`
const Info = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 500px;
gap: 10px;
padding: 100px 0px;
font-family: "Roboto", sans-serif;

& p{
    font-size: 20px;
}

& h3{
    padding-top: 10px;
    font-size: 24px;
}

& h1{
    font-size: 34px;
}
`

export default function Bio() {

    const [perfil, setPerfil] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.github.com/users/breguenice3/');
            const data = await response.json();
            setPerfil(data);
        }
        fetchData();
    }, []);
    console.log(perfil);

    return (
        <div>
            <Div>
                <div>
                    <img src={perfil.avatar_url} alt="avatar de breguenice" />
                </div>
                <Info>
                    <h1>{perfil.name}</h1>
                    <h3>{perfil.location}</h3>
                    <p>{perfil.bio}</p>

                    <div>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <DiJavascript />
                        <RiReactjsFill />
                    </div>
                </Info>
            </Div>
        </div>
    )
}