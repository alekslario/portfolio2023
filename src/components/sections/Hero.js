'use client';
import React from 'react';
import scrollTo from '../../util/smoothScroll';
import $ from './Hero.module.scss';
const Hero = () => (
  <div className={$.container}>
    <h1>Hi, my name is</h1>
    <h2>Aleksandrs Larionovs.</h2>
    <h3>I build things for web and beyond.</h3>
    <p>
      I am a software engineer specializing in building fast, responsive web apps . Currently, I am a student at the
      University of London.
    </p>
    <a
      href="https://medium.com/@aleksandlario/how-to-automate-midjourney-image-generation-with-puppeteer-6aea1b366c75"
      target="_blank"
      rel="noreferrer"
    >
      Check out my articles!
    </a>
  </div>
);

export default Hero;
