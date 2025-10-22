import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CamerasPage from './pages/CamerasPage';
import CameraDetailsPage from './pages/CameraDetailsPage';
import MyBookingsPage from './pages/MyBookingsPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

// ✅ Main App component that defines routing and layout
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cameras" element={<CamerasPage />} />
        <Route path="/camera/:id" element={<CameraDetailsPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
