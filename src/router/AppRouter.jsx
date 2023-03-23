import { Navigate, Route, Routes } from 'react-router-dom';

import { AplicacionesPage, CargueArchivosPage, CierreMesPage, ComparacionPage, ConsolidacionPage, LogErroresPage, ParametrosPage, ServiciosPage, VisualizacionPage } from '../pages';
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
          {/* //* Configuracion */}
          <Route path="aliados" element={<AliadosPage />} />
          <Route path="parametros" element={<ParametrosPage />} />
          <Route path="cierre mes" element={<CierreMesPage />} />

          {/* //* Portafolio */}
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="aplicaciones" element={<AplicacionesPage />} />

          {/* //*Uso de datos */}
          <Route path="carga" element={<CargueArchivosPage />} />
          <Route path="visualización" element={<VisualizacionPage />} />

          {/* //* Informes */}
          <Route path="consolidación" element={<ConsolidacionPage />} />
          <Route path="comparación" element={<ComparacionPage />} />
          <Route path="log de errores" element={<LogErroresPage />} />


          <Route path="/*" element={<Navigate to="Parametros" />} />

        </Routes>

        <MessagesComponent />

      </ContainerLayout>
    </FirstProvider>
  )
}
