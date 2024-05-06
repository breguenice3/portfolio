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
        margin-top: 40px;

        @media (min-width: 375px) and (max-width: 1440px) {
            gap: 30px;
            padding-top: 20px;
        }
    `
    const StyledIcon = styled.a`
        display: none;
        @media (min-width: 375px) and (max-width: 1440px) {
            display: block;
        }
    `

    return (
        <StyledDiv id="contatos">
            <motion.a href="https://twitter.com/breguenice" target="_blank" initial={{ x: -700 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} whileHover={{ scale: 1.1 }}><CiTwitter size={60} /></motion.a>
            <StyledIcon><a href="https://twitter.com/breguenice" target="_blank"><CiTwitter size={60} /></a></StyledIcon>
            <motion.a href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-5a64a519a/" target="_blank" initial={{ y: 60 }} whileInView={{ y: 0 }} transition={{ duration: 1 }} whileHover={{ scale: 1.1 }}><CiLinkedin size={60} /></motion.a>
            <StyledIcon><a href="https://twitter.com/breguenice" target="_blank"><CiInstagram size={60} /></a></StyledIcon>
            <motion.a href="https://www.instagram.com/breguenice/" target="_blank" initial={{ x: 700 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} whileHover={{ scale: 1.1 }}><CiInstagram size={60} /></motion.a>
        </StyledDiv>
    )
}