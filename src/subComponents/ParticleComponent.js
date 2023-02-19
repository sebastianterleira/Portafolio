import React, { useCallback } from "react";
import styled from "styled-components";
import Particles from 'react-tsparticles';

// particle config files
import configLight from "../config/particlesjs-config-light.json";
import configDark from "../config/particlesjs-config.json";
import AmongUS from "../config/particles.json";
import { loadFull } from "tsparticles";

const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`

function ParticleComponent(props) {

  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  }, [])

  return (
    <Box>
      <Particles 
      id="tsparticles"
      style={{position: "absolute", top: 0}} 
      params={props.theme === "light" ? configLight : configDark}
      init={particlesInit}
      />
    </Box>
  ) 
}

export default ParticleComponent