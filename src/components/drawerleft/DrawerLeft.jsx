import { DataObject, ImportContacts, Info, Settings } from '@mui/icons-material';
import { Box, Divider, Drawer } from '@mui/material'
import { AcordionPortafolio } from './';

const drawerWidth = 240;
const fontIcon = { fontSize: '20px' }

export const DrawerLeft = () => {
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
                <AcordionPortafolio
                    Icon={<Settings sx={fontIcon} />}
                    text="Configuración"
                    namesAcordion={['Parametros', 'Aliados', 'Cierre mes']}
                    linksAcordion={['Parametros', 'Aliados', 'Cierre-mes']}
                />
                <AcordionPortafolio
                    Icon={<ImportContacts sx={fontIcon} />}
                    text="Portafolio"
                    namesAcordion={['Aplicaciones', 'Servicios']}
                    linksAcordion={['Aplicaciones', 'Servicios']}
                />
                <AcordionPortafolio
                    Icon={<DataObject sx={fontIcon} />}
                    text="Uso de datos"
                    namesAcordion={['Carga']}
                    linksAcordion={['Carga']}
                />
                <AcordionPortafolio
                    Icon={<Info sx={fontIcon} />}
                    text="Informes"
                    namesAcordion={['Consolidación', 'Comparación', 'Log de errores']}
                    linksAcordion={['Consolidacion', 'Comparacion', 'Log-de-errores']}
                />
                <Divider />
            </Box>
        </Drawer>
    )
}
