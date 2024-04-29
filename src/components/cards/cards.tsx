import styled from "styled-components";
import Card from "../card-project/card";
import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import './animation.css'
import { motion } from "framer-motion";

const CardsLoad = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

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
    background-color: #0d0221;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    gap: 40px;
    flex-wrap: wrap;
    padding: 50px 20px;
   `

export default function Cards() {

    const [repositorios, setRepositorios] = useState<any[]>([])

    const octokit = new Octokit({
        auth: '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'
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/breguenice3/repos`);
            const data = await response.json();
            setRepositorios(data);
        }
        fetchData();
    }, []);

    // console.log(repositorios[2])
    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {

    //         Array.from(entries).forEach(entry => {
    //             if (entries[0].intersectionRatio >= .2) {
    //                 entry.target.classList.add('init-hidden-off')
    //             }
    //         })
    //     }, {
    //         threshold: [0, .5, 1]
    //     })
    //     Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    //         observer.observe(element);
    //     })
    // })


    return (
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
            <CardsLoad>
                <div>
                    <h2>
                        Projetos
                    </h2>
                </div>
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