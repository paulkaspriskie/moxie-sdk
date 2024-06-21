import React, { useEffect } from 'react';
import ParticleLayer from '../components/ParticleLayer.js';


const Home = () => {
  return (
    <>
      <ParticleLayer />
      <div className="layout-page__home">
        <div><img src={require("../../assets/imgs/pk-profile.png")}/></div>
        <h1>Hello there, I'm Paul Kaspriskie.</h1>
        <p>An accomplished Philadelphia based Frontend / UI Developer with over eight years of experience. Proficiencies in developing, maintaining and extending UI components to support underlying design systems / web applications.</p>
      </div>
    </>
  )
}

export default Home;
