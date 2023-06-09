import React from 'react';
import $ from './Social.module.scss';
import Side from '@/components/Side';
import config from '@/config';

export const Social = () => (
  <Side orientation="left">
    <ul className={$.container}>
      {config.socialMedia.map(({ url, name, Icon }, i) => (
        <li key={i}>
          <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </Side>
);
export default Social;
