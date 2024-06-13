import React from 'react';


const VerticleTimeline = (props) => {
  return (
    <div className="component-verticle-timeline__container">
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export default VerticleTimeline;
