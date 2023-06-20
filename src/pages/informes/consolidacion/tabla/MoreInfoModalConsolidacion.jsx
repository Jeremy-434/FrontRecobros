import { Info } from '@mui/icons-material';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

import { ModalForm } from '../../../layout';

export const MoreInfoModalConsolidacion = ({ data }) => {
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
                            primary="Mes"
                            secondary={data.mes}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Año"
                            secondary={data.anio}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Registro"
                            secondary={data.registro}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Nombre"
                            secondary={data.nombre}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Servicio"
                            secondary={data.nombreServicio}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Sub servicio"
                            secondary={data.subServicio}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Clase de actividad"
                            secondary={data.claseActividad}
                        />
                    </ListItem>
                </List>
                <List dense>
                    <ListItem>
                        <ListItemText
                            primary="Clase de costo"
                            secondary={data.claseCosto}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Driver"
                            secondary={data.driver}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Centro de costo receptor"
                            secondary={data.centroCostoReceptor}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Cantidad"
                            secondary={data.cantidad}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemText
                            primary="Fecha"
                            secondary={data.fecha}
                        />
                    </ListItem>
                </List>
            </Box>
        </ModalForm>
    )
}
