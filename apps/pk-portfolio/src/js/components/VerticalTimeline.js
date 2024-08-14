import React from 'react';


const VerticalTimeline = (props) => {
  return (
    <div className="component-vertical-timeline__container">
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export default VerticalTimeline;
