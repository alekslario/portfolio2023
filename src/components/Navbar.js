'use client';
import React, { useState, useEffect } from 'react';
import smoothScroll from '../util/smoothScroll';
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
        <a href="/" className={$.logoContainer}>
          <IconHexagonLetterA />
        </a>
        <div className={$.links}>
          <ol>
            {config.navLinks.map(({ name, url }) => (
              <li>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ol>
          <a className={$.resume} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        <Menu />
      </nav>
    </header>
  );
};
export default Navbar;
