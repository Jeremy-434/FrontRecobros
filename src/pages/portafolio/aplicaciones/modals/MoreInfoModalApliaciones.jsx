import { Info } from '@mui/icons-material';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

import { ModalForm } from '../../../layout';

export const MoreInfoModalApliaciones = ({ data }) => {
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
            <List dense>
                <ListItem >
                    <ListItemText
                        primary="Nombre de la aplicacion"
                        secondary={data.nombreAplicacion}
                    />
                </ListItem>
                <ListItem >
                    <ListItemText
                        primary="Estado"
                        secondary={data.estado}
                    />
                </ListItem>
                <ListItem >
                    <ListItemText
                        primary="Nombre del segmento"
                        secondary={data.nombreSegmento}
                    />
                </ListItem>
                {/* <ListItem >
                    <ListItemText
                        primary="Aliado"
                        secondary={data.idAliadoNavigation.nombreAliado}
                    />
                </ListItem> */}
                <ListItem >
                    <ListItemText
                        primary="Servicio"
                        secondary={data.idServicioNavigation.nombreServicio}
                    />
                </ListItem>
            </List>
        </ModalForm>
    )
}

