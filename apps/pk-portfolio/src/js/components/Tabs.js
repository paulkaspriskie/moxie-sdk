import React, { Children, useState } from 'react';


const Tabs = ({label, children}) => {

  const [activeTabIndex, setActiveTabIndex ] = useState(0);

  return (
    <div className="component-tabs__container">
      <ul>
        {
          Children.map(children, (child, index) =>
            <li>
              <a href="#" className={activeTabIndex === index ? 'active' : ''} onClick={() => setActiveTabIndex(index)}>
                {child.props.label}
              </a>
            </li>
          )
        }
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
