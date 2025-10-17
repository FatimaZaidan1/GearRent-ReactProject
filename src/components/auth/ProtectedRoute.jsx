import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; 

/**
 * ProtectedRoute Component
 * A wrapper component that checks for user authentication status using the useAuth hook.
 * If the user is authenticated (isStaff), it renders the child routes via <Outlet />.
 * Otherwise, it redirects the user to the /login page.
 * This is essential for protecting staff-only dashboard pages.
 */
const ProtectedRoute = () => {
  const { isStaff } = useAuth(); 

  if (!isStaff) {
    // Redirect to the login page if the user is not authenticated as staff
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children routes
  return <Outlet />;
};

export default ProtectedRoute;
