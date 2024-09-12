import { useSelector } from 'react-redux';
import { isAuthSelector } from '../../store/auth/selectors';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuth = useSelector(isAuthSelector);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
