import Hero from '../components/Hero.js';
import Icon from '../components/Icon.js';
import VerticleTimeline from '../components/VerticleTimeline.js';
import appData from '../api/data-app.json';
import resume from '../../assets/docs/resume-kaspriskie.pdf';

const Experience = () => {
  return (
    <div className="layout-page__experience">
      <Hero>
        <h1>{appData.experience.title.charAt(0).toUpperCase() + appData.experience.title.slice(1)}</h1>
        <p>{appData.experience.description}</p>
        <a href={resume} target="_blank">Download Resume<Icon name={'file-download-icon'} /></a>
      </Hero>
      <div className={'layout-page__content'}>
        <VerticleTimeline>
          {appData.experience.content.map((item, i) =>
            <li key={i}>
              <div></div>
              <time>{item.date}</time>
              <h3>{item.role}</h3>
              <span>{item.company}</span>
              <span>{item.location}</span>
              <p>{item.description}</p>
            </li>
          )}
        </VerticleTimeline>
      </div>
    </div>
  )
}

export default Experience;
