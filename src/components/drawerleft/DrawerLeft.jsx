// 
import { DataObject, ImportContacts, Info, Science, Settings } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, Grid } from "@mui/material"
import { AcordionPortafolio } from "./";

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
                    color: 'black'
                },
                zIndex: 0,
            }}
            open
        >
            <Box component='div' >
                <Divider />
                <AcordionPortafolio
                    Icon={<Settings sx={fontIcon} />}
                    text="Configuración"
                    linksAcordion={['Parametros', 'Aliados', 'Cierre mes']}
                />
                <AcordionPortafolio
                    Icon={<ImportContacts sx={fontIcon} />}
                    text="Portafolio"
                    linksAcordion={['Aplicaciones', 'Servicios']}
                />
                <AcordionPortafolio
                    Icon={<DataObject sx={fontIcon} />}
                    text="Uso de Datos"
                    linksAcordion={['Carga', 'Visualización']}
                // linksAcordion={['Carga', 'Seguimiento', 'Validación', 'Visualización']}
                />
                {/* <AcordionPortafolio
                    Icon={<Science sx={fontIcon} />}
                    text="Volumetria"
                    linksAcordion={['Consolidacion', 'Comparacion']}
                // linksAcordion={['Consolidación', 'Sumarización']}
                /> */}
                <AcordionPortafolio
                    Icon={<Info sx={fontIcon} />}
                    text="Informes"
                    linksAcordion={['Consolidacion', 'Comparacion', 'Log de errores' ]}
                // linksAcordion={['Intermedios', 'finales']}
                />
                <Divider />
            </Box>
        </Drawer>
    )
}
