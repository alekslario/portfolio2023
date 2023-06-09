import React from 'react';
import $ from './Email.module.scss';
import Side from '@/components/Side';
import config from '@/config';

export const Email = () => (
  <Side orientation="right">
    <div className={$.container}>
      <a href={`mailto:${config.email}`}>{config.email}</a>
    </div>
  </Side>
);
export default Email;
