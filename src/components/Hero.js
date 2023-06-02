'use client';
import React from 'react';
import Typewriter from './Typewriter';
import scrollTo from '../util/smoothScroll';
import Image from 'next/image';
import $ from './Hero.module.scss';
const Hero = () => (
  <div className={$.container}>
    <p>Hi, my name is</p>
    <h1>Aleksandrs Larionovs</h1>
    <div className={$.description}>
      I am a developer based in London. Currently, I am a student at Univerity of London.
      <br />
      <Image src="/port1.png" width={300} height={300} />
    </div>
  </div>
);

export default Hero;
