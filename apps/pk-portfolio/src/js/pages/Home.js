import React, { useEffect } from 'react';
import ParticleLayer from '../components/ParticleLayer.js';
import appData from '../api/data-app.json';


const Home = () => {
  return (
    <>
      <ParticleLayer />
      <div className="layout-page__home">
        <div><img src={require(`../../assets/imgs/${appData.bio.image}`)}/></div>
        <h1>{appData.bio.title}</h1>
        <p>{appData.bio.description}</p>
      </div>
    </>
  )
}

export default Home;
