'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import $ from './Hero.module.scss';
const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, transform: 'translateY(20px)' },
    show: { opacity: 1, transform: 'translateY(0px)' },
  };

  return (
    <motion.section variants={container} initial="hidden" animate="show" className={$.container}>
      <motion.h1 variants={listItem}>Hi, my name is</motion.h1>
      <motion.h2 variants={listItem}>Aleksandrs Larionovs.</motion.h2>
      <motion.h3 variants={listItem}>I build things for web and beyond.</motion.h3>
      <motion.p variants={listItem}>
        I am a software engineer specializing in building fast, responsive web apps. Currently, I am a student at the
        University of London.
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
