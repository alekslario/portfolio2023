import React from 'react';
import $ from './Layout.module.scss';
const Layout = ({ children }) => <div className={$.container}>{children}</div>;

export default Layout;
