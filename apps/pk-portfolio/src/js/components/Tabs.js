import React, { useState } from 'react';


const Tabs = ({data}) => {

  const [selectedTabIndex, setSelectedTabIndex ] = useState(0);

  return (
    <div className="component-tabs__container">
      <ul>
        {
          data.map((item, i) => {
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
        {data[selectedTabIndex].content}
      </section>
    </div>
  );

}

export default Tabs;
