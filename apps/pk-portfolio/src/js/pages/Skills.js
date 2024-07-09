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
        <h1>Skills</h1>
				<p>This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.</p>
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
                    <p>This is a brief brief description of the project and what it does.</p>
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
