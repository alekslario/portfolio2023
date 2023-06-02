import React from 'react';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import $ from './Projects.module.scss';
import Image from 'next/image';
import projects from '../content/projects.json';
console.log('projects', projects);
const Projects = () => (
  <div className={$.projects_container}>
    {projects.map(({ title, description, skills, links: { preview, github }, image }) => (
      <div key={title} className={$.project_card}>
        <Image src={image} alt="Picture of project" width={1000} height={1000} className={$.project_image_wrapper} />
        <div className={$.project_content}>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {
            <div className={$.project_skills}>
              {skills.map((skill, index) => {
                return (
                  <span key={index} className={$.project_skill}>
                    {skill}
                  </span>
                );
              })}
            </div>
          }
          <div className={$.project_links}>
            <a href={preview} rel="noopener noreferrer" target="_blank" className={$.project_link}>
              Live Demo <IconExternalLink />
            </a>
            <a href={github} rel="noopener noreferrer" target="_blank" className={`${$.project_link} ${$.secondary}`}>
              <IconBrandGithub /> View Source
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Projects;
