import React, { useState } from 'react';
import { IconBrandGithub, IconExternalLink, IconFolder } from '@tabler/icons-react';
import $ from './Projects.module.scss';
import config from '../../config';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const projects = showMore ? config.projects.slice(0, 6) : config.projects.slice(0, 3);
  return (
    <section className={$.container}>
      <h2>Other Noteworthy Projects</h2>
      <ul className={$.projectsGrid}>
        {projects.map(({ description, title, tech, external, github }, i) => (
          <li className={$.project}>
            <div className={$.projectInner}>
              <header>
                <div className={$.projectTop}>
                  <div className="folder">
                    <IconFolder />
                  </div>
                  <div className={$.projectLinks}>
                    {github && (
                      <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                        <IconBrandGithub />
                      </a>
                    )}
                    {external && (
                      <a href={external} aria-label="External Link" className="external" target="_blank" rel="noreferrer">
                        <IconExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className={$.projectTitle}>
                  <a href={external} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </h3>

                <div className={$.projectDescription} dangerouslySetInnerHTML={{ __html: description }} />
              </header>

              <footer>
                {tech && (
                  <ul className={$.projectTechList}>
                    {tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}
              </footer>
            </div>
          </li>
        ))}
      </ul>

      <button className={$.moreButton} onClick={() => setShowMore((prev) => !prev)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </section>
  );
};

export default Projects;
