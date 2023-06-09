import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
const NotFoundPage = () => (
  <Layout>
    <div className="not_found_wrapper">
      <div className="not_found">
        You are lost
        <Footer />
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
