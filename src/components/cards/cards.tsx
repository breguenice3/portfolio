import styled from "styled-components";
import Card from "../card-project/card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CardsLoad = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


@media (min-width: 375px) and (max-width: 1440px) {
   gap: 20px;
   height: auto;

   & h2{
    padding-top: 20px;
   }
}

& h2{
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 34px;
    padding-bottom: 50px;
}
`

const CardsSpace = styled.div`
    width: 60%;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    gap: 40px;
    flex-wrap: wrap;
    padding: 50px 20px;

    
@media (min-width: 375px) and (max-width: 1440px) {
    width: 70%;
}
   `

export default function Cards() {

    const [repositorios, setRepositorios] = useState<any[]>([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/breguenice3/repos`);
            const data = await response.json();
            setRepositorios(data);
        }
        fetchData();
    }, []);

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3 }}>
            <CardsLoad id="projetos">
                    <h2>
                        Projetos
                    </h2>
                <CardsSpace>
                    {repositorios.length > 0 ? repositorios.map((repositorio) => {
                        if (repositorio.homepage) {
                            return (
                                <Card key={repositorio.name} name={repositorio.name.replaceAll('-', ' ')} language={repositorio.language} url={repositorio.html_url} liveurl={repositorio.homepage} />)
                        }
                    }) : <p>Carregando Repositórios</p>}
                </CardsSpace>
            </CardsLoad>
        </motion.div>
    )
}