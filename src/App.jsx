import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CamerasPage from './pages/CamerasPage';
import CameraDetailsPage from './pages/CameraDetailsPage'; // New
import MyBookingsPage from './pages/MyBookingsPage';
import DashboardPage from './pages/DashboardPage'; // New
import NotFoundPage from './pages/NotFoundPage';

// Defines the routing structure for the entire application.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/cameras' element={<CamerasPage />} />
      <Route path='/camera/:id' element={<CameraDetailsPage />} /> 
      <Route path='/my-bookings' element={<MyBookingsPage />} />
      <Route path='/dashboard' element={<DashboardPage />} /> 
      <Route path='*' element={<NotFoundPage />} /> 
      <Route path='/my-bookings' element={<MyBookingsPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;