import React from "react";
import styled, { ThemeProvider } from "styled-components" 
import { LightTheme } from "./Themes"
import { Design, Develope } from "./AllSvgs"
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
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5; 
cursor: pointer;

font-family: "Ubuntu Mono", monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
  &>*{
    fill: ${props => props.theme.body};

  }
}

&>*:first-child{
  margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}

p{
  margin-left: 2rem;
}

${Main}:hover &{
    color: ${props => props.theme.body};
}
`

function MySkillsPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent theme={"light"}/>
        <SocialIcons theme={"light"}/>
        <PowerButton />
        <ParticleComponent theme={"light"}/>
        <Main>
          <Title>
            <Develope width={40} height={40} fill="currentColor"/> Backend Developer
          </Title>
          <Description>
            Mi mayor fuerte quizas sea el Frontend, pero tambien disfruto bastante de trabajar con Backend.
          </Description>
          <Description>
          <strong>SKILLS</strong>
          <p>
            Ruby, Ruby on Rails, Node.js, Express, PostgreSQL, SQL.
          </p>
          </Description>
          <Description>
          <strong>TOOLS</strong>
          <p>
            Insomnia, Rubocop, etc.
          </p>
          </Description>
        </Main>
        <Main>
        <Title>
            <Design width={40} height={40} fill="currentColor"/> Frontend Developer
          </Title>
          <Description>
          Me encanta crear aplicaciones con diseños espectaculares y alucinantes, mejorando siempre.
          </Description>
          <Description>
          <strong>SKILLS</strong>
          <p>
            Html5, Css3, JavaScript, React.js, Tailwind, Sass, etc.
          </p>
          </Description>
          <Description>
          <strong>TOOLS</strong>
          <p>
            ESLint, Netlify, etc.
          </p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" left="40%"/>
      </Box>   
    </ThemeProvider>
  )
}

export default MySkillsPage