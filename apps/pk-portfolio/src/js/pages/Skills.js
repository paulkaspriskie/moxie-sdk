import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions.js';


const Skills = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {

    dispatch(fetchData());

  }, [dispatch]);


  return (
    <div className="layout-page__skils">
      <ul>
        {
          data.map((item, i) => <li key={i}>{item.title}</li>)
        }
      </ul>
    </div>
  )
}

export default Skills;
