import { RiReactjsFill, RiJavascriptLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
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
overflow-y: hidden;

& img{
    width: 400px;
    border-radius: 50%;
    box-shadow: 20px 20px 20px 10px #0d022189;
    box-shadow: 20px 20px 20px 10px #0d022189;
}

& img:hover{
    transform: scale(1.1);
    transition: ease 0.4s;
    cursor: pointer;
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

& p{
    font-size: 20px;
    padding: 0px 0px 20px 0px;
    padding: 0px 0px 20px 0px;
}

& h3{
    padding: 10px 0px 10px 0px;
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
            setBio(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <Div>
                <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
                    <img src={bio.avatar_url} alt="avatar de breguenice" />
                </motion.div>
                <motion.div initial={{ x: -1000}} animate={{ x: 0}} transition={{duration:2}}>
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
                        </Icons>
                    </Info>
                </motion.div>
            </Div>
        </div>
    )
}