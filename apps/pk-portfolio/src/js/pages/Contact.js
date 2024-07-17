import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import { fetchData } from '../actions/actions.js';
import Hero from '../components/Hero.js';
import Form from '../components/Form.js';
import FormItem from '../components/FormItem.js';
import appData from '../api/data-app.json';


const Contact = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const form = useRef();


  useEffect(() => {

    dispatch(fetchData());

  }, [dispatch]);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
      publicKey: process.env.PUBLIC_KEY,
    }).then(() => {
      console.log('SUCCESS!');
    }, (error) => {
      console.log(`FAILED ${error.text}`);
    });
  }


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
