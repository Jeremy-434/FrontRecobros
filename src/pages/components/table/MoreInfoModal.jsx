import { Info } from '@mui/icons-material';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

import { ModalForm } from '../../layout';

export const MoreInfoModal = ({ data, titlePrimaryInList, numGrid = 12 }) => {
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
                {/* Información de {Object.values(data)[1]} */}
            </Typography>
            <List dense>
                {Object.entries(data).slice(1).map((item, index) => (
                    <ListItem key={item[1]}>
                        <ListItemText
                            primary={titlePrimaryInList[index]}
                            secondary={item[1]}
                        />
                    </ListItem>
                ))}
            </List>
        </ModalForm>
    )
}
