import React, { useState } from 'react';


const Tabs = () => {

  const [selectedTabIndex, setSelectedTabIndex ] = useState(0);

  const tabs = [
    { id: 'tab1', title: 'Core Skills', content: <p>Core Skills</p> },
    { id: 'tab2', title: 'Javascript', content: <p>Javascript</p> },
    { id: 'tab3', title: 'CSS', content: <p>CSS</p> },
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
