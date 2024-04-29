import { CiTwitter, CiLinkedin, CiInstagram } from "react-icons/ci";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Contats() {

    const StyledDiv = styled.div`
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        gap: 150px;
        overflow-y: hidden;
    `

    return (
        <StyledDiv>
            <motion.a href="https://twitter.com/breguenice" target="_blank" initial={{ x: -700 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} whileHover={{scale: 1.1}}><CiTwitter size={60}/></motion.a>
            <motion.a href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-5a64a519a/" target="_blank" initial={{ y: 60 }} whileInView={{ y: 0 }} transition={{ duration: 1 }} whileHover={{scale: 1.1}}><CiLinkedin size={60}/></motion.a>
            <motion.a href="https://www.instagram.com/breguenice/" target="_blank" initial={{ x: 700 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} whileHover={{scale: 1.1}}><CiInstagram size={60}/></motion.a>
        </StyledDiv>
    )
}