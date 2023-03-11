import { Navigate, Route, Routes } from 'react-router-dom';

import { AliadosPage, AplicacionesPage, CargueAliados, ServiciosPage } from '../pages';
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

          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="aplicaciones" element={<AplicacionesPage />} />
          <Route path="aliados" element={<AliadosPage />} />
          <Route path="carga" element={<CargueAliados />} />
          <Route path="/*" element={<Navigate to="servicios" />} />

        </Routes>

        <MessagesComponent />

      </ContainerLayout>
    </FirstProvider>
  )
}
