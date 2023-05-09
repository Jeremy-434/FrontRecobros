import { Navigate, Route, Routes } from 'react-router-dom';

import { FirstProvider } from '../context';
import { DrawerLeft, Header, MessagesComponent } from '../components/';
import { ContainerLayout } from './layout/ContainerLayout';
import {
  AliadosPage,
  AplicacionesPage,
  CargueArchivosPage,
  CierreMesPage,
  ComparacionPage,
  ConsolidacionPage,
  InicioPage,
  LogErroresPage,
  LoginPage,
  ParametrosPage,
  ServiciosPage,
  UploadCECOPage,
  // VisualizacionPage
} from '../pages';

export const AppRouter = () => {

  return (
    <FirstProvider>

      <Header />
      <DrawerLeft />

      <Routes>
        {/* //* Autenticación */}
        <Route path="auth/login" element={<LoginPage />} />
      </Routes>

      <ContainerLayout>

        <Routes>

          {/* //* Inicio */}
          <Route path="/inicio" element={<InicioPage />} />

          {/* //* Configuracion */}
          <Route path="/aliados" element={<AliadosPage />} />
          <Route path="/parametros" element={<ParametrosPage />} />
          <Route path="/cierre-mes" element={<CierreMesPage />} />

          {/* //* Portafolio */}
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/aplicaciones" element={<AplicacionesPage />} />

          {/* //* Uso de datos */}
          <Route path="/cargue-archivo" element={<CargueArchivosPage />} />
          <Route path="/upload-ceco" element={ <UploadCECOPage/> } />
          {/* <Route path="visualización" element={<VisualizacionPage />} /> */}

          {/* //* Informes */}
          <Route path="/consolidacion" element={<ConsolidacionPage />} />
          <Route path="/comparacion" element={<ComparacionPage />} />
          <Route path="/log-de-errores" element={<LogErroresPage />} />


          <Route path="/*" element={<Navigate to="auth/login" />} />

        </Routes>

        <MessagesComponent />

      </ContainerLayout>
    </FirstProvider>
  )
}
