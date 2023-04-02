import React, { useCallback } from "react";
import Particles from "react-particles";
import  { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import configParticle from "./particleConfig";

export function ParticlesContainer(props) {
  // this customizes the component tsParticles installation
  const customInit = useCallback(async (engine=Engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });

  const options = configParticle

  return (<Particles 
      options={options} 
      init={customInit}
      style={{    height: "100vh",position: "absolute",zIndex: -1,opacity: 0.5}}
   />)
}