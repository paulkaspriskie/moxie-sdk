import Card from '../components/Card.js';
import Hero from '../components/Hero.js';
import Icon from '../components/Icon.js';
import Tabs from '../components/Tabs.js';
import TabItem from '../components/TabItem.js';
import appData from '../api/data-app.json';

const Skills = () => {

  const capitalizeFirst = (input) => {

    let wordArray = input.split(" ");

    if (input !== 'css') {

      for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substr(1);
      };

      return wordArray.join(" ");

    } else {

      return input.toUpperCase();

    }

  };

  return (
    <div className="layout-page__skills">
      <Hero>
        <h1>{appData.skills.title.charAt(0).toUpperCase() + appData.skills.title.slice(1)}</h1>
        <p>{appData.skills.description}</p>
      </Hero>
      <div className={'layout-page__content'}>
        <Tabs>
          {appData.skills.content.map((item, i) =>
            <TabItem key={i} label={capitalizeFirst(item.category)}>
              {item.data.map((item, i) =>
                <Card key={i}>
                  <div><Icon name={item.iconName} /></div>
                  <div>
                    <h3>{capitalizeFirst(item.title)}</h3>
                    <p>{item.description}</p>
                  </div>
                </Card>
              )}
            </TabItem>
          )}
        </Tabs>
      </div>
    </div>
  )
}


export default Skills;
