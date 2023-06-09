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
            <div className={$.imageWrapper}>
              <Image src={cover} alt={title} fill={true} />
            </div>
            <div className={$.content}>
              <h3 className={$.projectTitle}>
                <a href={external} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </h3>
              <p>{description}</p>
              <a href={external} aria-label="External Link" className={$.link}>
                <IconExternalLink />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
