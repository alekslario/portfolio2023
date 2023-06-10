'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { annotate, annotationGroup } from 'rough-notation';
import $ from './Hero.module.scss';
const Hero = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, transform: 'translateY(20px)' },
    show: { opacity: 1, transform: 'translateY(0px)' },
  };
  useEffect(() => {
    const h1 = annotate(document.querySelector('#highlight1'), {
      type: 'highlight',
      color: '#1f69db',
      iterations: 1,
    });
    const h2 = annotate(document.querySelector('#highlight2'), {
      type: 'circle',
      color: '#1f69db',

      padding: 10,
    });
    const ag = annotationGroup([h1, h2]);
    ag.show();
  }, []);
  return (
    <motion.section variants={container} initial="hidden" animate="show" className={$.container}>
      <div className={$.gradient}></div>
      <motion.h1 variants={listItem}>Hi, my name is</motion.h1>
      <motion.h2 variants={listItem}>Aleksandrs Larionovs.</motion.h2>
      <motion.h3 variants={listItem}>I build things for web and beyond.</motion.h3>
      <motion.p variants={listItem}>
        I am a <span id="highlight1">software engineer</span> specializing in building fast, responsive web apps. Currently,
        I am a student at the University of London and looking for a new role as a developer.{' '}
        <span id="highlight2">Hire me?</span>
      </motion.p>
      <motion.a
        variants={listItem}
        href="https://medium.com/@aleksandlario/how-to-automate-midjourney-image-generation-with-puppeteer-6aea1b366c75"
        target="_blank"
        rel="noreferrer"
      >
        Check out my articles!
      </motion.a>
    </motion.section>
  );
};

export default Hero;
