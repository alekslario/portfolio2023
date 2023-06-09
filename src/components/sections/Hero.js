'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import $ from './Hero.module.scss';
const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, top: 20 }}
      whileInView={{ opacity: 1, top: 0 }}
      viewport={{ once: true, amount: 0.5, staggerChildren: 0.5 }}
      className={$.container}
    >
      <h1>Hi, my name is</h1>
      <h2>Aleksandrs Larionovs.</h2>
      <h3>I build things for web and beyond.</h3>
      <p>
        I am a software engineer specializing in building fast, responsive web apps. Currently, I am a student at the
        University of London.
      </p>
      <a
        href="https://medium.com/@aleksandlario/how-to-automate-midjourney-image-generation-with-puppeteer-6aea1b366c75"
        target="_blank"
        rel="noreferrer"
      >
        Check out my articles!
      </a>
    </motion.section>
  );
};

export default Hero;
