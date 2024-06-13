import React, { useState } from 'react';


const Tabs = () => {

  const [selectedTabIndex, setSelectedTabIndex ] = useState(0);

  const tabs = [
    { id: 'tab1', title: 'Tab 1', content: <p>One</p> },
    { id: 'tab2', title: 'Tab 2', content: <p>Two</p> },
    { id: 'tab3', title: 'Tab 3', content: <p>Three</p> },
  ];


  return (
    <div className="component-tabs__container">
      <ul>
        {
          tabs.map((item, i) => {
            return (
              <li key={i}>
                <a href="#" onClick={() => setSelectedTabIndex(i)} className={i === selectedTabIndex ? 'active' : ''}>
                  {item.title}
                </a>
              </li>
            )
          })
        }
      </ul>
      <section>
        {tabs[selectedTabIndex].content}
      </section>
    </div>
  );

}

export default Tabs;
