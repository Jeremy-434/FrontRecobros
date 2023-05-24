import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const { status } = useSelector(state => state.auth)

    return (status === 'authenticated')
        ? <Navigate to="/inicio" />
        : children
}
