import React from 'react';
import $ from './Footer.module.scss';
import config from '@/config';

export const Footer = () => (
  <footer className={$.footer}>
    <ul>
      {config.socialMedia.map(({ name, url, Icon }, i) => (
        <li key={i}>
          <a href={url} aria-label={name}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
    <p>Aleksandrs Larionovs © {new Date().getFullYear()}</p>
  </footer>
);
export default Footer;
