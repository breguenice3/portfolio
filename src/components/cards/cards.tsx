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

    const projetos = [
        {
            nome: 'Aluroni',
            linguagem: 'Typescript e React',
            repositorio: 'https://github.com/breguenice3/aluroni',
            site: 'https://aluroni-iota-brown.vercel.app/',
        },
        {
            nome: 'Api address tracker',
            linguagem: 'JavaScript',
            repositorio: 'https://github.com/breguenice3/api-address-tracker',
            site: 'https://api-address-tracker-rosy.vercel.app/'
        },
        {
            nome: 'Countries api',
            linguagem: 'Typescript e React',
            repositorio: 'https://github.com/breguenice3/countries-api',
            site: 'https://countries-api-eta-eosin.vercel.app/'
        },
        {
            nome: 'Portfolio',
            linguagem: 'Typescript e React',
            repositorio: 'https://github.com/breguenice3/portfolio',
            site: 'https://portfolio-lac-three-86.vercel.app/'
        },
        {
            nome: 'React intro component signup form',
            linguagem: 'Typescript e React',
            repositorio: 'https://github.com/breguenice3/react-intro-component-signup-form',
            site: 'https://intro-component-signup-form-olive.vercel.app/'
        },
        {
            nome: 'React organograma',
            linguagem: 'React',
            repositorio: 'https://github.com/breguenice3/react-organograma',
            site: 'https://organograma-pi.vercel.app/'
        },
        {
            nome: 'React social links profile',
            linguagem: 'Typescript e React',
            repositorio: 'https://github.com/breguenice3/react-social-links-profile',
            site: 'https://social-links-profile-psi-ten.vercel.app/'
        },
        {
            nome: 'React space tourism website',
            linguagem: 'Typescript e React',
            repositorio: 'https://github.com/breguenice3/react-space-tourism-website',
            site: 'https://space-tourism-website-xi-flame.vercel.app/',
            img: 'https://github.com/breguenice3/react-space-tourism-website/raw/master/preview.jpg'
        },
        {
            nome: 'Valorant cards',
            linguagem: 'JavaScript',
            repositorio: 'https://github.com/breguenice3/valorant-cards',
            site: 'https://valorant-cards-pearl.vercel.app/'
        }
    ]


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
                    {repositorios.length > 0 ? projetos.map((projeto) => {

                        return (
                            <Card key={projeto.nome} img={projeto.img} name={projeto.nome} language={projeto.linguagem} url={projeto.repositorio} liveurl={projeto.site} />)

                    }) : <p>Carregando Repositórios</p>}
                </CardsSpace>
            </CardsLoad>
        </motion.div>
    )
}