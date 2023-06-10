'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useScrollDirection from '../hooks/useScrollDirection';
import { IconHexagonLetterA } from '@tabler/icons-react';
import Menu from './Menu';
import config from '../config';
import $ from './Navbar.module.scss';
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, transform: 'translateY(20px)' },
  show: { opacity: 1, transform: 'translateY(0px)' },
};
const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.pageYOffset < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`${$.container} ${scrolledToTop ? '' : scrollDirection === 'down' ? $.scrollingDown : $.scrollingUp}`}
      variants={container}
    >
      <motion.nav variants={container}>
        <motion.a
          href="/"
          className={$.logoContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1 } }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <IconHexagonLetterA />
        </motion.a>
        <div className={$.links}>
          <motion.ol variants={container}>
            {config.navLinks.map(({ name, url }) => (
              <motion.li variants={listItem}>
                <a href={url}>{name}</a>
              </motion.li>
            ))}
          </motion.ol>
          <a className={$.resume} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        <Menu />
      </motion.nav>
    </motion.header>
  );
};
export default Navbar;
