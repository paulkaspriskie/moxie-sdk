import Card from '../components/Card.js';
import Hero from '../components/Hero.js';
import Icon from '../components/Icon.js';


const Projects = () => {
  return (
    <div className="layout-page__projects">
      <Hero>
        <h1>Projects</h1>
				<p>This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.</p>
      </Hero>
      <div>
        <Card>
          <div><Icon name={'javascript-icon'} /></div>
          <div>
            <h3>Title</h3>
            <p>This is a brief brief description of the project and what it does.</p>
            <a href="#">Link</a>
          </div>
        </Card>
        <Card>
          <div><Icon name={'css-icon'} /></div>
          <div>
            <h3>Title</h3>
            <p>This is a brief brief description of the project and what it does.</p>
            <a href="#">Link</a>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Projects;
