import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Twitter, Github, Blog, Linkedin } from "../components/AllSvgs";
import {DarkTheme} from "../components/Themes"

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

&>*:not(:last-child){
  margin: 0.5rem 0;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 6.5rem;
background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body };
`

function SocialIcons(props) {
  return (
    <Icons>
      <motion.div
      initial={{ transform: "scale(0)"}}
      animate={{ scale: [0,1,1.5,1]}}
      transition={{type: "spring", duratio:1, delay:1}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to={"https://github.com/sebastianterleira"}>
          <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
        </NavLink>
      </motion.div>
      <motion.div
      initial={{ transform: "scale(0)"}}
      animate={{ scale: [0,1,1.5,1]}}
      transition={{type: "spring", duratio:1, delay:1.2}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to={"https://twitter.com/SebastianTerlei"}>
          <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
        </NavLink>
      </motion.div>
      <motion.div
      initial={{ transform: "scale(0)"}}
      animate={{ scale: [0,1,1.5,1]}}
      transition={{type: "spring", duratio:1, delay:1.4}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to={"https://www.linkedin.com/in/sebastian-terleira-8773a4247/"}>
          <Linkedin width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
        </NavLink>
      </motion.div>
      <motion.div
      initial={{ transform: "scale(0)"}}
      animate={{ scale: [0,1,1.5,1]}}
      transition={{type: "spring", duratio:1, delay:1.6}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to={"https://sebastianterdev.netlify.app/"}>
          <Blog width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
        </NavLink>
      </motion.div>

      <Line color={props.theme}
      initial={{
        height: 0
      }}
      animate={{
        height: "6.5rem"
      }}
      transition={{
        type: "spring", duration: 1, delay: 0.8
      }}
      />
    </Icons>
  )
}

export default SocialIcons