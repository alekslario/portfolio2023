import React from 'react';
import $ from './Articles.module.scss';
import { IconExternalLink } from '@tabler/icons-react';
import Image from 'next/image';
import config from '../../config';
const Articles = () => {
  return (
    <section id="articles" className={$.container}>
      <h2 className="numbered-heading">Recent Articles</h2>
      <ul>
        {config.articles.map(({ title, description, cover, external }, i) => (
          <li key={i}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={external} aria-label="External Link" className="external">
              <IconExternalLink />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
