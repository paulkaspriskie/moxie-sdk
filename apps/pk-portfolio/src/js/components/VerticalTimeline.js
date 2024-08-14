import React from 'react';


const VerticleTimeline = (props) => {
  return (
    <div className="component-vertical-timeline__container">
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export default VerticleTimeline;
