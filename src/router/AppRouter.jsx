import { Navigate, Route, Routes } from 'react-router-dom';

import { AplicacionesApp, CargueAliados, ServiciosApp } from '../pages';
import { DrawerLeft, Header, MessagesComponent } from '../components/';
import { ContainerLayout } from './layout/ContainerLayout';
import { FirstProvider } from '../context';
import { AliadosApp } from '../pages/portafolio/AliadosApp';

export const AppRouter = () => {
  return (
    <FirstProvider>

      <Header />
      <DrawerLeft />

      <ContainerLayout>

        <Routes>

          <Route path="servicios" element={<ServiciosApp />} />
          <Route path="aplicaciones" element={<AplicacionesApp />} />
          <Route path="aliados" element={<AliadosApp />} />
          <Route path="carga" element={<CargueAliados />} />
          <Route path="/*" element={<Navigate to="servicios" />} />

        </Routes>

        <MessagesComponent />

      </ContainerLayout>
    </FirstProvider>
  )
}
