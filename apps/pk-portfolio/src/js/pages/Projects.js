import List from '../components/List.js';
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
        {
          appData.projects.content.map((item, i) =>
            <List key={i}>
              <li>
                <div><Icon name={item.icon} /></div>
                <section>
                  <h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                  <p>{item.description}</p>
                  {
                    item.links.map((item, i) =>
                      <a key={i} href={item.url} target="_blank">{item.name}<Icon name={`${item.name}-icon`}/></a>
                    )
                  }
                </section>
              </li>
            </List>
          )
        }
      </div>
    </div>
  )
}

export default Projects;
