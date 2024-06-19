import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions.js';
import Hero from '../components/Hero.js';
import Form from '../components/Form.js';
import FormItem from '../components/FormItem.js';

const Contact = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {

    dispatch(fetchData());

  }, [dispatch]);

  return (
    <div className="layout-page__contact">
      <Hero>
        <h1>Contact</h1>
				<p>This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.</p>
      </Hero>
      {/* <ul> */}
      {/*   {data.map((item, i) => <li key={i}>{item.title}</li>)} */}
      {/* </ul> */}
      <div>
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
