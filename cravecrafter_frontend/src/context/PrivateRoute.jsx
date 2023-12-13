import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

/**
 * Checks whether user is logged in or not. 
 * If the user is logged in, then it will pass all the props to the child 
 * component and that route will be rendered. 
 * Otherwise, it will redirect to the signup page.
 * 
 * @param {*} param0 
 * @returns 
 */
const PrivateRoute = ({ children }) => {
    const loggedIn = useAuthStore((state) => state.isLoggedIn)();
    return loggedIn ? <>{children}</> : <Navigate to="/signup" />;
    // this could change from signup 
};

export default PrivateRoute;