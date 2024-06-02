import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ParticleLayer from '../components/ParticleLayer.js';


const Home = () => {
  return (
    <>
      <div className="layout-page__home">
        <ParticleLayer />
      </div>
    </>
  )
}

export default Home;
