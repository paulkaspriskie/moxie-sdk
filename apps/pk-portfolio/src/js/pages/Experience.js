import Hero from '../components/Hero.js';
import VerticleTimeline from '../components/VerticleTimeline.js';


const Experience = () => {
  return (
    <div className="layout-page__experience">
      <Hero>
        <h1>Experience</h1>
				<p>This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.</p>
      </Hero>
      <VerticleTimeline>
        <li>
          <div></div>
          <time>September 2021 - Present</time>
          <h3>UI Developer</h3>
          <span>Barclays</span>
          <span>Wilmington, Delaware</span>
          <p>Roquefort rubber cheese boursin. Cow caerphilly monterey jack cheese and biscuits cheesy feet stinking bishop gouda hard cheese. Cheesecake fromage camembert de normandie who moved my cheese cheesy grin stinking bishop cheesy grin smelly cheese</p>
        </li>
        <li>
          <div></div>
          <time>October 2015 - August 2021</time>
          <h3>Web Developer</h3>
          <span>Temple University</span>
          <span>Philadelphia, Pennsylvania</span>
          <p>Roquefort rubber cheese boursin. Cow caerphilly monterey jack cheese and biscuits cheesy feet stinking bishop gouda hard cheese. Cheesecake fromage camembert de normandie who moved my cheese cheesy grin stinking bishop cheesy grin smelly cheese</p>
        </li>
      </VerticleTimeline>
    </div>
  )
}

export default Experience;
