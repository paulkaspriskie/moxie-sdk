import Hero from '../components/Hero.js';
import Tabs from '../components/Tabs.js';


const Skills = () => {
  return (
    <div className="layout-page__skills">
      <Hero>
        <h1>Skills</h1>
				<p>This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.</p>
      </Hero>
      <div>
        <Tabs />
      </div>
    </div>
  )
}


export default Skills;
