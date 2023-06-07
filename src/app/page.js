'use client';
import '../styles/index.scss';
import { throttle } from 'lodash';
import { useEffect, useState } from 'react';
import About from '../components/sections/About';
import Featured from '../components/sections/Featured';
import Footer from '../components/sections/Footer';

import Hero from '../components/sections/Hero';
import Layout from '../components/Layout';
import Links from '../components/Links';
import Navbar from '../components/Navbar';
import Projects from '../components/sections/Projects';
import React from 'react';
import statements from '../content/summary';

// ABOUT ARTICLES CONTACT PROJECTS
export default () => {
  const [state, setState] = useState('ABOUT');
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log('scrolling');
    }, 3000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Layout>
      <Navbar />
      <div id="content">
        <Hero />
        <About />
        <Featured />
        {/* <Projects /> */}
        <Links />
        <Footer />
      </div>
    </Layout>
  );
};
