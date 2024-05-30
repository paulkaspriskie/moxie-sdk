import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions.js';


const Home = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {

    dispatch(fetchData());

  }, [dispatch]);

  return (
    <>
      <ul>
        {
          data.map((item, i) => <li key={i}>{item.title}</li>)
        }
      </ul>
    </>
  )
}

export default Home;
