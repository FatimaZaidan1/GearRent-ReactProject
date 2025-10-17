import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CamerasPage from './pages/CamerasPage';
import CameraDetailsPage from './pages/CameraDetailsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cameras" element={<CamerasPage />} />
        <Route path="/camera/:id" element={<CameraDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
