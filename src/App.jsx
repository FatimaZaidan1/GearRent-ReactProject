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
import MyBookingsPage from './pages/MyBookingsPage';
import NotFoundPage from './pages/NotFoundPage';

// Defines the routing structure for the entire application.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/cameras' element={<CamerasPage />} />
      <Route path='/my-bookings' element={<MyBookingsPage />} />
      {/* Catch-all route for 404 */}
      <Route path='*' element={<NotFoundPage />} /> 
    </Route>
  )
);

const App = () => {
  // You will need to install react-router-dom for this to work: npm install react-router-dom
  return <RouterProvider router={router} />;
};

export default App;
