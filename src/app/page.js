'use client';
import { throttle } from 'lodash';
import { useEffect, useState } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Links from '../components/Links';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import React from 'react';
import statements from '../content/summary';

import '../styles/index.scss';

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
      <Head title="Home" />
      <Navbar />

      <Footer />
    </Layout>
  );
};
//  <Hero />
//     <About statements={statements} />
//     <h2 id="projects" className="section-title">
//       Projects
//     </h2>
//     <Projects />
//     <h2 id="contact" className="section-title">
//       Contact me!
//     </h2>
//     <Links />
