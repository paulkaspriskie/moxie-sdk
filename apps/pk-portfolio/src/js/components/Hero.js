import React from 'react';
import ParticleLayer from '../components/ParticleLayer.js';


const Hero = (props) => {
	return (
		<div className="component-hero__container">
			<section>{props.children}</section>
		</div>
	)
}

export default Hero;
