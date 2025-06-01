import { Outlet, Navigate } from 'react-router'

const PrivateRoutes = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoutes
