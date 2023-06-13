'use client';
import '../styles/index.scss';
import { throttle } from 'lodash';
import { useEffect, useState } from 'react';
import About from '@/components/sections/About';
import Featured from '@/components/sections/Featured';
import Footer from '@/components/Footer';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Projects from '@/components/sections/Projects';
import Articles from '@/components/sections/Articles';
import Email from '@/components/Email';
import Social from '@/components/Social';
import React from 'react';

const Main = () => {
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
      <Social />
      <Email />
      <main id="content" className="fillHeight">
        <Hero />
        <About />
        <Featured />
        <Projects />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
};
export default Main;
