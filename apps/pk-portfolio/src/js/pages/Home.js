import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ParticleLayer from '../components/ParticleLayer.js';


const Home = () => {
  return (
    <>
      <ParticleLayer />
      <div className="layout-page__home">
        <div><img src={require("../../assets/pk-profile.png")}/></div>
        <h1>It's me the boy!</h1>
        <p>Roquefort fromage frais macaroni cheese. Taleggio swiss squirty cheese smelly cheese smelly cheese pecorino jarlsberg cheese triangles. Babybel pecorino cheesy grin bavarian bergkase babybel boursin cheese slices roquefort. Danish fontina cheese and wine rubber cheese.</p>
      </div>
    </>
  )
}

export default Home;
