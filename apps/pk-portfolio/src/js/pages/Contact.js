import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions.js';
import Hero from '../components/Hero.js';
import Form from '../components/Form.js';
import FormItem from '../components/FormItem.js';
import appData from '../api/data-app.json';


const Contact = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {

    dispatch(fetchData());

  }, [dispatch]);

  return (
    <div className="layout-page__contact">
      <Hero>
        <h1>{appData.contact.title.charAt(0).toUpperCase() + appData.contact.title.slice(1)}</h1>
				<p>{appData.contact.description}</p>
      </Hero>
      {/* <ul> */}
      {/*   {data.map((item, i) => <li key={i}>{item.title}</li>)} */}
      {/* </ul> */}
      <div className={'layout-page__content'}>
        <Form>
          <FormItem labelName="Name"><input type="text" /></FormItem>
          <FormItem labelName="Email"><input type="text" /></FormItem>
          <FormItem labelName="Subject"><input type="text" /></FormItem>
          <FormItem labelName="Message"><textarea /></FormItem>
          <button>Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
