import { Delete } from '@mui/icons-material';
import { Alert, Button, Typography } from '@mui/material';
import { ModalForm } from '../../layout/ModalForm';

export const AlertDelete = ({ functionDelete, title }) => {

    return (
        <ModalForm
            nameButton={"Borrar"}
            styleButton={<Delete color="error" />}
            hiddenStyle={{ display: 'none' }}
            // hiddenStyleCancelar={{ width: '100%', mt: 0 }}
            styleIconButton={{ width: 20, padding: 0 }}
            customButton={
                <Button
                    color="error"
                    variant="contained"
                    fullWidth
                    onClick={functionDelete}
                    sx={{ maxWidth: '112px' }}
                >
                    Borrar
                </Button>
            }
            title="Borrar"
        >

            <Typography variant="h4" color="inherit" mb={2}>
                {title}
            </Typography>
            <Alert severity="error" >
                ¿Esta seguro de esta accion?
            </Alert>

        </ModalForm>
    )
}
