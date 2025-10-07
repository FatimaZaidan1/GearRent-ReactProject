import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// The MainLayout wraps every page to display the Navbar and Footer consistently.
const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* Outlet renders the content of the current route's page */}
      <Outlet /> 
      <Footer />
    </>
  );
};

export default MainLayout;