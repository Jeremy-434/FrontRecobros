import { Route, Routes } from 'react-router-dom';
import { FirstProvider } from '../context';
import { LoginPage } from '../pages';
import { RecobrosRoutes } from '../pages';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';
import { AuthRoutes } from '../pages/auth/router/AuthRoutes';
import { useAuthStore } from '../hooks';
import { CheckingCredetials } from '../pages/auth/login/components/checkingCredetials';
import { useEffect } from 'react';


export const AppRouter = () => {

  const { status, checkAuthToken, isFetching } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [isFetching]);


  if (status === 'checking') {
    return <CheckingCredetials />
  }

  return (
    <FirstProvider>

      <Routes>

        {/* //* Autenticación */}
        <Route path="/auth/*" element={
          <PublicRoute>
            {/* <LoginPage /> */}
            <AuthRoutes />
          </PublicRoute>
        } />

        {/* //* Rutas de la aplicacion */}
        <Route path="/*" element={
          <PrivateRoutes>
            <RecobrosRoutes />
          </PrivateRoutes>
        } />

      </Routes>

    </FirstProvider>
  )
}
