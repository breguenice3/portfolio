import { RiReactjsFill, RiJavascriptLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt, FaGithub, FaGitAlt } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";


const Div = styled.div`
display: flex;
flex-direction: row-reverse;
width: 100%;
justify-content: space-evenly;
height: 100vh;
padding: 200px 0px;
align-items: center;

@media (min-width: 375px) and (max-width: 1440px) {
   width: 100vw;
   min-width: 375px;
   height: auto;
   padding: 10px 0px;
   flex-direction: column;
   & img{
    box-shadow: 5px 5px 5px 5px #0d022189;
   }
}

& img{
    width: 350px;
    border-radius: 50%;
    box-shadow: 20px 20px 20px 10px #0d022189;
}

& img:hover{
    transform: scale(1.06);
    transition: ease 0.4s;
    cursor: pointer;
}
`
const Info = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 500px;
padding: 100px 0px;
font-family: "Roboto", sans-serif;

@media (min-width: 375px) and (max-width: 1440px) {
    flex-direction: column;
    height: auto;
    min-width: 375px;
    width: 100vw;
    padding: 10px 0px;
    text-align: center;

    & p{
        font-size: 18px;
        padding: 20px;
    }
}

& p{
    font-size: 20px;
    padding: 0px 0px 20px 0px;
}

& h3{
    padding: 10px 0px 10px 0px;
    font-size: 24px;
}

& h1{
    font-size: 34px;
}

& h2{
    font-size: 16px;
    padding: 5px 0px 20px 0px;
}

& a{
    text-decoration: none;
}

& a:hover{
    color: #0000003e;
}
`

const Icons = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    height: auto;

    
@media (min-width: 375px) and (max-width: 1440px) {
   width: 100%;
   justify-content: center;
}

& h2{
    font-size: 16px;
    padding: 5px 0px 20px 0px;
}

& a{
    text-decoration: none;
}

& a:hover{
    color: #0000003e;
}
`


export default function Bio() {

    const [bio, setBio] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/breguenice3`);
            const data = await response.json();
            setBio(data);
        }
        fetchData();
    }, []);

    return (
        <Div id="sobre">
            <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 2 }} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "500px", height: "500px" }}>
                <img src={bio.avatar_url} alt="avatar de breguenice" />
            </motion.div>
            <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
                <Info>
                    <h1>{bio.name}</h1>
                    <h2><a href="https://github.com/breguenice3" target="_blank">@{bio.login}</a></h2>
                    <h3>{bio.location}</h3>
                    <p>{bio.bio}</p>

                    <Icons>
                        <RiHtml5Line size={35} />
                        <FaCss3Alt size={35} />
                        <RiJavascriptLine size={40} />
                        <TbBrandTypescript size={36} />
                        <RiReactjsFill size={36} />
                        <FaGithub size={30} />
                        <FaGitAlt size={35} />
                        <SiStyledcomponents size={45} />
                    </Icons>
                </Info>
            </motion.div>
        </Div>
    )
}