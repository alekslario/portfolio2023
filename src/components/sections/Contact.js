import React from 'react';
import $ from './Contact.module.scss';
import config from '@/config';
const Contact = () => (
  <section className={$.container} id="contact">
    <h2 className={$.overline}>What’s Next?</h2>

    <h2 className={$.title}>Get In Touch</h2>

    <p>Whether you have a question or just want to say hi, I’ll make sure to get back to you as soon as possible!</p>

    <a href={`mailto:${config.email}`}>Say Hello</a>
  </section>
);

export default Contact;
