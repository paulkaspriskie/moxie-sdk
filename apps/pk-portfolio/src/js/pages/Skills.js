import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions.js';
import Hero from '../components/Hero.js';


const Skills = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {

    dispatch(fetchData());

  }, [dispatch]);


  return (
    <div className="layout-page__skills">
      <Hero>
        <h1>Skills</h1>
				<p>This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.</p>
      </Hero>
      <ul>
        {data.map((item, i) => <li key={i}>{item.title}</li>)}
      </ul>
    </div>
  )
}


export default Skills;
