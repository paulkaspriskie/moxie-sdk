import Card from '../components/Card.js';
import Hero from '../components/Hero.js';
import Icon from '../components/Icon.js';
import appData from '../api/data-app.json';


const Projects = () => {
  return (
    <div className="layout-page__projects">
      <Hero>
        <h1>{appData.projects.title.charAt(0).toUpperCase() + appData.projects.title.slice(1)}</h1>
				<p>{appData.projects.description}</p>
      </Hero>
      <div className={'layout-page__content'}>
        <Card>
          <div><Icon name={'javascript-icon'} /></div>
          <div>
            <h3>Title</h3>
            <p>This is a brief brief description of the project and what it does. This is a brief brief description of the project and what it does</p>
            <a href="#">Link</a>
          </div>
        </Card>
        <Card>
          <div><Icon name={'css-icon'} /></div>
          <div>
            <h3>Title</h3>
            <p>This is a brief brief description of the project and what it does. This is a brief brief description of the project and what it does.</p>
            <a href="#">Link</a>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Projects;
