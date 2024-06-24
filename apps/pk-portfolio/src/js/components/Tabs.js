import React, { Children, useRef, useState } from 'react';


const Tabs = ({label, children}) => {

  const [activeTabIndex, setActiveTabIndex ] = useState(0);
  const ref = useRef(null);

  const scrollAdvance = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="component-tabs__container">
      <ul ref={ref}>
        {
          Children.map(children, (child, index) =>
            <li>
              <a href="#" className={activeTabIndex === index ? 'active' : ''} onClick={() => setActiveTabIndex(index)}>
                {child.props.label}
              </a>
            </li>
          )
        }
        <button onClick={() => scrollAdvance(60)}>></button>
      </ul>
      {
        Children.map(children, (child, index) =>
          activeTabIndex === index ? <section>{child.props.children}</section> : null
        )
      }
    </div>
  );

}

export default Tabs;
