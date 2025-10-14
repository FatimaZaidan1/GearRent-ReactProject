import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, selectUserId, login, logout } from '../features/auth/authSlice';

/**
 * Custom hook to manage and access authentication state and actions.
 * @returns {object} An object containing isAuthenticated state, userId, and auth actions.
 */
export const useAuth = () => {
  // Use Redux selectors to get state
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  /**
   * Mock login function. In a real app, this would handle API calls.
   * For this project, we check mock credentials and dispatch the Redux action.
   * @param {string} username - The provided username (mocked to 'admin').
   * @param {string} password - The provided password (mocked to 'admin').
   * @returns {boolean} True if login is successful, false otherwise.
   */
  const staffLogin = (username, password) => {
    // Mock authentication logic: only allow 'admin/admin'
    if (username === 'admin' && password === 'admin') {
      const mockUserId = 'staff_123'; // Static user ID for mock staff
      dispatch(login(mockUserId));
      return true;
    }
    return false;
  };

  /**
   * Logs the user out by dispatching the logout action.
   */
  const staffLogout = () => {
    dispatch(logout());
  };

  return {
    isAuthenticated,
    userId,
    staffLogin,
    staffLogout,
  };
};
