import { Navigate, Route, Routes } from 'react-router-dom';
import { DrawerLeft, Header, MessagesComponent } from '../../components';
import { ContainerLayout } from '../../router/layout/ContainerLayout';
import {
    AdminPage,
    AliadosPage,
    AplicacionesPage,
    CargueArchivosPage,
    CierreMesPage,
    ComparacionPage,
    ConsolidacionPage,
    InicioPage,
    LogErroresPage,
    OptionsPage,
    ParametrosPage,
    PermissionsPage,
    RolesPage,
    ServiciosPage,
    UploadCECOPage
} from '..';

export const RecobrosRoutes = () => {

    return (
        <>
            <Header />
            <DrawerLeft />

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
                    <Route path="/upload-ceco" element={<UploadCECOPage />} />
                    {/* <Route path="visualización" element={<VisualizacionPage />} /> */}

                    {/* //* Informes */}
                    <Route path="/consolidacion" element={<ConsolidacionPage />} />
                    <Route path="/comparacion" element={<ComparacionPage />} />
                    <Route path="/log-de-errores" element={<LogErroresPage />} />

                    {/* //* Administrador */}
                    <Route path="/usuarios" element={<AdminPage />} />
                    <Route path="/roles" element={<RolesPage />} />
                    <Route path="/opciones" element={<OptionsPage />} />
                    <Route path="/permisos" element={<PermissionsPage />} />


                    <Route path="/*" element={<Navigate to="/inicio" />} />

                </Routes>

                <MessagesComponent />

            </ContainerLayout>
        </>
    )
}
