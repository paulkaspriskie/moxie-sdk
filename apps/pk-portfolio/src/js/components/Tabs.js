import React, { useState } from 'react';


const Tabs = ({data}) => {

  const [activeTabIndex, setActiveTabIndex ] = useState(0);

  return (
    <div className="component-tabs__container">
      <ul>
        {
          data.map((item, i) => {
            return (
              <li key={i}>
                <a href="#" onClick={() => setActiveTabIndex(i)} className={i === activeTabIndex ? 'active' : ''}>
                  {item.title}
                </a>
              </li>
            )
          })
        }
      </ul>
      <section>
        {data[activeTabIndex].content}
      </section>
    </div>
  );

}

export default Tabs;
