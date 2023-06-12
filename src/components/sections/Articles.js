import React, { useEffect } from 'react';
import $ from './Articles.module.scss';
import { IconExternalLink } from '@tabler/icons-react';
import { Gradient } from '../../scripts/gradient.js';
import Image from 'next/image';
import { motion } from 'framer-motion';
import config from '../../config';
const Articles = () => {
  useEffect(() => {
    config.articles.forEach((_, i) => {
      const gradient = new Gradient();
      gradient.initGradient(`#gradient-canvas${i + 2}`);
    });
    // gradient.initGradient('#gradient-canvas2');
  }, []);
  return (
    <section id="articles" className={$.container}>
      <motion.h2 {...config.basicAnimation} className="numbered-heading">
        Recent Articles
      </motion.h2>
      <ul>
        {config.articles.map(({ title, description, cover, external }, i) => (
          <motion.li {...config.basicAnimation} key={i}>
            <canvas id={`gradient-canvas${i + 2}`} data-transition-in />
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
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
