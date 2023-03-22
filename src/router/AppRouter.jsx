import { Navigate, Route, Routes } from 'react-router-dom';

import { AplicacionesPage, CargueArchivosPage, ServiciosPage } from '../pages';
import { DrawerLeft, Header, MessagesComponent } from '../components/';
import { ContainerLayout } from './layout/ContainerLayout';
import { FirstProvider } from '../context';
import { AliadosPage } from '../pages';

export const AppRouter = () => {
  return (
    <FirstProvider>

      <Header />
      <DrawerLeft />

      <ContainerLayout>

        <Routes>

          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="aplicaciones" element={<AplicacionesPage />} />
          <Route path="aliados" element={<AliadosPage />} />
          <Route path="carga" element={<CargueArchivosPage />} />
          <Route path="/*" element={<Navigate to="servicios" />} />

        </Routes>

        <MessagesComponent />

      </ContainerLayout>
    </FirstProvider>
  )
}
