import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Twitter, Github, Blog, Linkedin } from "../components/AllSvgs";

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

const Line = styled.span`
width: 2px;
height: 6.5rem;
background-color: ${props => props.theme.text};
`

function SocialIcons() {
  return (
    <Icons>
      <div>
        <NavLink style={{color:'inherit'}} target="_blank" to={"https://github.com/sebastianterleira"}>
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}} target="_blank" to={"https://twitter.com/SebastianTerlei"}>
          <Twitter width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}} target="_blank" to={"https://www.linkedin.com/in/sebastian-terleira-8773a4247/"}>
          <Linkedin width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}} target="_blank" to={"https://sebastianterdev.netlify.app/"}>
          <Blog width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>

      <Line />
    </Icons>
  )
}

export default SocialIcons