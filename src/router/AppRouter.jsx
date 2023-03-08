import { Navigate, Route, Routes } from 'react-router-dom';

import { AplicacionesApp, ServiciosApp } from '../pages';
import { DrawerLeft, Header, MessagesComponent } from '../components/';
import { ContainerLayout } from './layout/ContainerLayout';
import { FirstProvider } from '../context';

export const AppRouter = () => {
  return (
    <FirstProvider>

      <Header />
      <DrawerLeft />

      <ContainerLayout>

        <Routes>

          <Route path="servicios" element={<ServiciosApp />} />
          <Route path="aplicaciones" element={<AplicacionesApp />} />
          <Route path="/*" element={<Navigate to="servicios" />} />

        </Routes>

        <MessagesComponent />

      </ContainerLayout>
    </FirstProvider>
  )
}
