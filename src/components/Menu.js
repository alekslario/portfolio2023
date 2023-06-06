'use client';
import React, { useEffect, useState, useRef } from 'react';
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
        <button onClick={toggleMenu} className={`${menuOpen ? $.menuOpen : ''}`} ref={buttonRef} aria-label="Menu">
          <div className={$.hamBox}>
            <div className={$.hamBoxInner} />
          </div>
        </button>
        <div className={`${$.sidebar} ${menuOpen ? $.sidebarOpen : ''}`}>
          <nav>
            <ol>
              {config.navLinks.map(({ name, url }) => (
                <li>
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
