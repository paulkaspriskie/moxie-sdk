import Hero from '../components/Hero.js';
import Tabs from '../components/Tabs.js';
import TabItem from '../components/TabItem.js';
import appData from '../api/data-app.json';

const Skills = () => {

  const tabs = [
    { id: 'tab1', title: 'Core Skills', content: <p>Core Skills</p> },
    { id: 'tab2', title: 'Javascript', content: <p>Javascript</p> },
    { id: 'tab3', title: 'CSS', content: <p>CSS</p> },
  ];

  return (
    <div className="layout-page__skills">
      <Hero>
        <h1>Skills</h1>
				<p>This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.</p>
      </Hero>
      <div>
        <Tabs>
          {appData.skills.map((item, i) =>
            <TabItem key={i} label={item.category}>{item.category}</TabItem>
          )}
        </Tabs>
      </div>
    </div>
  )
}


export default Skills;
