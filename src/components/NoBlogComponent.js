import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";

const Container = styled.div`
background-color: ${props => props.theme.text};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Ubuntu Mono', monospace;
  font-weight: 700;
  line-height: 1.5rem;
}

display: flex;
align-items: center;
justify-content: center;
`

const Text = styled.h2`
  color: ${props => props.theme.body};
  font-size: calc(1em + 1.5vw);
`

function NoBlogComponent() {
  return (
    <Container>
      <PowerButton />
      <div>
        <Text><strong>Sin contenido..., vuelva.</strong></Text>
      </div>
    </Container>
  ) 
}

export default NoBlogComponent