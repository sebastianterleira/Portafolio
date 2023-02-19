import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components" 
import { DarkTheme } from "./Themes"
import astronaut from "../assets/Images/spaceman.png"

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0% {transform: translateY(-10px) };
50% {transform: translateY(15px) translateX(15px) };
100% {transform: translateY(-10px) };
`

const Spaceman = styled.div`
position: relative;
top: 5%;
right: -72%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
  width: 100%;
  height: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: "Ubuntu Mono", monospace;
font-style: italic;
`

function AboutPage() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme={"dark"}/>
        <SocialIcons theme={"dark"}/>
        <PowerButton />
        <ParticleComponent theme={"dark"}/>
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
        Hola, soy un apasionado FullStack Developer con sede en Perú que se dedica a crear experiencias de usuario excepcionales y hermosos.
        <br/><br/>
        Estoy interesado en toda la pila de frontend y backend. Me gusta probar cosas nuevas y construir grandes proyectos. Soy un FullStack Developer y blogger. Me encanta escribir blogs con temas tecnoligícos y leer libros.
        <br/><br/>
        Creo que todo es un Arte cuando pones tu conciencia en ello. Puedes conectarte conmigo a través de enlaces sociales.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%"/>
      </Box>   
    </ThemeProvider>
  )
}

export default AboutPage