import React from 'react';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import $ from './Featured.module.scss';
import Image from 'next/image';
import config from '../../config';

const Featured = () => (
  <section id="projects" className={$.container}>
    <motion.h2 {...config.basicAnimation} className="numbered-heading">
      Some Things I’ve Built
    </motion.h2>

    <ul className={$.projects}>
      {config.featured.map(({ external, title, tech, github, cover, cta, description }, i) => {
        return (
          <motion.li {...config.basicAnimation} key={i} className={$.project}>
            <div className={$.projectContent}>
              <div>
                <p className={$.projectOverline}>Featured Project</p>

                <h3 className={$.projectTitle}>
                  <a href={external}>{title}</a>
                </h3>

                <div className={$.projectDescription} dangerouslySetInnerHTML={{ __html: description }} />

                {tech.length && (
                  <ul className={$.projectTechList}>
                    {tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}

                <div className={$.projectLinks}>
                  {github && (
                    <a href={github} aria-label="GitHub Link">
                      <IconBrandGithub />
                    </a>
                  )}

                  {external && (
                    <a href={external} aria-label="External Link" className="external">
                      <IconExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={$.projectImage}>
              <a href={external ? external : github ? github : '#'}>
                <Image src={cover} alt={title} fill={true} />
              </a>
            </div>
          </motion.li>
        );
      })}
    </ul>
  </section>
);

export default Featured;
