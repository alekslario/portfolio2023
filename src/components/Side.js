import React from 'react';
import $ from './Side.module.scss';
import { motion } from 'framer-motion';

export const Side = ({ children, orientation }) => (
  <motion.div
    initial={{ opacity: 0, transform: 'translateY(20px)' }}
    whileInView={{ opacity: 1, transform: 'translateY(0px)', transition: { delay: 1 } }}
    viewport={{ once: true, amount: 0.5 }}
    className={`${$.container} ${orientation === 'left' ? $.left_side : ''}`}
  >
    {children}
  </motion.div>
);
export default Side;
