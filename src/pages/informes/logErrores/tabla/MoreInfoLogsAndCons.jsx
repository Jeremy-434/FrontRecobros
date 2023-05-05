import { Info } from '@mui/icons-material';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

import { ModalForm } from '../../../layout';

export const MoreInfoLogsAndCons = ({ data }) => {

    const { consolidado, logError } = data;

    return (
        <ModalForm
            nameButton={"Aceptar"}
            styleButton={<Info />}
            hiddenStyle={{ display: 'none' }}
            styleIconButton={{ width: 20, padding: 0 }}
            title="Mas información..."
        >
            <Typography variant="h5" color="inherit">
                Información completa
            </Typography>
            <Box display="flex">
                <List dense>
                    <ListItem >
                        <ListItemText
                            primary="Fecha Servidor"
                            secondary={new Date(logError.fechaServidor).toLocaleDateString() + ' ' + new Date(logError.fechaServidor).toLocaleTimeString()}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Descripción"
                            secondary={logError.descripcionError}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Aliado"
                            secondary={logError.idAliadoNavigation.nombreAliado}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Mes"
                            secondary={consolidado.mes}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Año"
                            secondary={consolidado.anio}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Registro"
                            secondary={consolidado.registro}
                        />
                    </ListItem>
                </List>
                <List dense>
                    <ListItem >
                        <ListItemText
                            primary="Nombre"
                            secondary={consolidado.nombre}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Servicio"
                            secondary={consolidado.nombreServicio}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Sub servicio"
                            secondary={consolidado.subServicio}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Clase de actividad"
                            secondary={consolidado.claseActividad}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Clase de costo"
                            secondary={consolidado.claseCosto}
                        />
                    </ListItem>
                </List>
                <List dense>
                    <ListItem >
                        <ListItemText
                            primary="Driver"
                            secondary={consolidado.driver}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Centro de costo receptor"
                            secondary={consolidado.centroCostoReceptor}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Cantidad"
                            secondary={consolidado.cantidad}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Fecha"
                            secondary={consolidado.fecha}
                        />
                    </ListItem>
                </List>
            </Box>
        </ModalForm>
    )
}
