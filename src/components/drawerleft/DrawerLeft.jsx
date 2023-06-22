import { AdminPanelSettings, DataObject, ImportContacts, Info, Settings } from '@mui/icons-material';
import { Box, Divider, Drawer, LinearProgress } from '@mui/material'
import { AcordionPortafolio } from './';
import { useAuthStore, useCrudRolesUsers } from '../../hooks';

const drawerWidth = 240;
const fontIcon = { fontSize: '20px' }

const acordionData = [
    {
        id: 1,
        roles: ['Administrador'],
        icon: <AdminPanelSettings sx={fontIcon} />,
        text: 'Administración',
        namesAcordion: ['Usuarios', 'Roles', 'Opciones', 'Permisos'],
        linksAcordion: ['usuarios', 'roles', 'opciones', 'permisos']
    },
    {
        id: 2,
        roles: ['Administrador'],
        icon: <Settings sx={fontIcon} />,
        text: 'Configuración',
        namesAcordion: ['Parametros', 'Aliados', 'Cierre mes'],
        linksAcordion: ['parametros', 'aliados', 'cierre-mes']
    },
    {
        id: 3,
        roles: ['Administrador'],
        icon: <ImportContacts sx={fontIcon} />,
        text: 'Portafolio',
        namesAcordion: ['Aplicaciones', 'Servicios'],
        linksAcordion: ['aplicaciones', 'servicios']
    },
    {
        id: 4,
        roles: ['Administrador', 'Gestor de archivos'],
        icon: <DataObject sx={fontIcon} />,
        text: 'Uso de datos',
        namesAcordion: ['Cargue archivo', 'Cargue centro de costo'],
        linksAcordion: ['cargue-archivo', 'upload-ceco']
    },
    {
        id: 5,
        roles: ['Administrador', 'Consultor'],
        icon: <Info sx={fontIcon} />,
        text: 'Informes',
        namesAcordion: ['Consolidación', 'Comparación', 'Log de errores'],
        linksAcordion: ['consolidacion', 'comparacion', 'log-de-errores']
    }
];

export const DrawerLeft = () => {

    const { user } = useAuthStore();
    const { rolesUsers, isLoading } = useCrudRolesUsers();

    if (isLoading) {
        return <LinearProgress />
    }

    const rolUser = rolesUsers?.find(ru => ru.idUsuarioNavigation.usuario === user.usuario);
    const { rol } = rolUser.idRolNavigation;

    return (
        <Drawer
            variant="persistent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                    marginTop: '71px',
                    height: `calc(100vh - 71px)`,
                    bgcolor: '#38373710',
                    color: 'black',
                    zIndex: 1,
                },
            }}
            open
        >
            <Box component='div' >
                <Divider />
                {
                    acordionData.map(item => {
                        if (item.roles.includes(rol)) {
                            return (
                                <AcordionPortafolio
                                    key={item.id}
                                    Icon={item.icon}
                                    text={item.text}
                                    namesAcordion={item.namesAcordion}
                                    linksAcordion={item.linksAcordion}
                                />
                            );
                        }
                    })
                }

                <Divider />
            </Box>
        </Drawer>
    )
}
