import React from 'react';
import $ from './About.module.scss';
import Image from 'next/image';
import config from '../../config';
import { motion } from 'framer-motion';
const About = () => {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Java', , 'Bash', 'Node.js', 'Python', 'Terraform', 'Docker'];
  return (
    <motion.section {...config.basicAnimation} id="about" className={$.container}>
      <h2 className="numbered-heading">About Me</h2>
      <div>
        <div>
          <p>
            Hey! My name is Alex, and I love building cool stuff that lives on the internet. It all started in 2017 when I
            decided to create an app — there was no going back after that!
          </p>

          <p>Fast-forward to today, and I’m studying Computer Science at the University of London.</p>

          <p>
            I also recently started writing articles. The most recent one covers how to{' '}
            <a href="https://medium.com/@aleksandlario/how-to-automate-midjourney-image-generation-with-puppeteer-6aea1b366c75">
              automate
            </a>{' '}
            Midjourney image generation.
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className="skills-list">{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
        </div>
        <div className={$.imageWrapper}>
          <Image src="/../public/me.jpg" alt="Headshot" fill={true} />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
