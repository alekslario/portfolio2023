import React from 'react';
import $ from './Side.module.scss';
import config from '@/config';

export const Side = ({ children, orientation }) => (
  <div className={`${$.container} ${orientation === 'left' ? $.left_side : ''}`}>{children}</div>
);
export default Side;
