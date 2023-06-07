import React from 'react';
import Layout from '../components/Layout';
import Typewriter from '../components/Typewriter';
import Footer from '../components/sections/Footer';
const NotFoundPage = () => (
  <Layout>
    <div className="not_found_wrapper">
      <div className="not_found">
        <Typewriter text="404 - You are lost :(" />
        <Footer />
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
