import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {

    const { status } = useSelector(state => state.auth)

    return (status !== 'authenticated')
        ? <Navigate to="/auth/login" />
        : children
}
