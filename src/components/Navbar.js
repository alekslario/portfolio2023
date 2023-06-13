'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useScrollDirection from '../hooks/useScrollDirection';
import { IconHexagonLetterA } from '@tabler/icons-react';
import Menu from './Menu';
import config from '../config';
import $ from './Navbar.module.scss';

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
    <header
      className={`${$.container} ${scrolledToTop ? '' : scrollDirection === 'down' ? $.scrollingDown : $.scrollingUp}`}
    >
      <nav>
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
          <ol>
            {config.navLinks.map(({ name, url }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <a href={url}>{name}</a>
              </motion.li>
            ))}
          </ol>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            viewport={{ once: true, amount: 0.5 }}
            className={$.resume}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </motion.a>
        </div>
        <Menu />
      </nav>
    </header>
  );
};
export default Navbar;
