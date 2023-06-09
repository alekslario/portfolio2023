import React from 'react';
import $ from './Articles.module.scss';
import Image from 'next/image';
import config from '../../config';
const Articles = () => {
  return (
    <section id="articles" className={$.container}>
      <h2 className="numbered-heading">Articles</h2>
      <ul>
        {config.articles.map(({ title, description, cover, link }, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
