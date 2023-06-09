'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import config from '../config';
import useOnClickOutside from '../hooks/useOnClickOutside';
import $ from './Menu.module.scss';
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    const onResize = (e) => {
      if (e.currentTarget.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  }, [menuOpen]);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));
  return (
    <menu className={$.container}>
      <div ref={wrapperRef}>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1 } }}
          viewport={{ once: true, amount: 0.5 }}
          onClick={toggleMenu}
          className={`${menuOpen ? $.menuOpen : ''}`}
          ref={buttonRef}
          aria-label="Menu"
        >
          <div className={$.hamBox}>
            <div className={$.hamBoxInner} />
          </div>
        </motion.button>
        <div className={`${$.sidebar} ${menuOpen ? $.sidebarOpen : ''}`}>
          <nav>
            <ol>
              {config.navLinks.map(({ name, url }, i) => (
                <li key={i}>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ol>
            <a href="/resume.pdf" className={$.resume}>
              Resume
            </a>
          </nav>
        </div>
      </div>
    </menu>
  );
};
export default Menu;
