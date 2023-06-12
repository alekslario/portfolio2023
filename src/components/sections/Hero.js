'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { annotate, annotationGroup } from 'rough-notation';
import { Gradient } from '../../scripts/gradient.js';
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
      color: 'rgba(255, 242, 241,.8)',
      iterations: 1,
      animationDuration: 1000,
    });
    const h2 = annotate(document.querySelector('#highlight2'), {
      type: 'highlight',
      color: 'rgba(252, 252, 98,.8)',
      iterations: 1,
      animationDuration: 1000,
    });
    const h3 = annotate(document.querySelector('#highlight3'), {
      type: 'circle',
      color: 'rgba(160, 155, 231,.4)',

      padding: 10,
    });
    const ag = annotationGroup([h1, h2, h3]);
    ag.show();

    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);
  return (
    <motion.section variants={container} initial="hidden" animate="show" className={$.container}>
      <div className={$.gradient}></div>

      <motion.canvas
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 4 } }}
        viewport={{ once: true, amount: 0.5 }}
        id="gradient-canvas"
        data-transition-in
      />
      <motion.h1 variants={listItem}>Hi, my name is</motion.h1>
      <motion.h2 variants={listItem}>Aleksandrs Larionovs.</motion.h2>
      <motion.h3 variants={listItem}>I build things for web and beyond.</motion.h3>
      <motion.p variants={listItem}>
        I am a software engineer specializing in building <span id="highlight1">fast</span> and{' '}
        <span id="highlight2">responsive</span> web apps. Currently, I am a student at the University of London and looking
        for a new role as a developer. <span id="highlight3">Hire me?</span>
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
