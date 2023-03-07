import { Delete } from '@mui/icons-material';
import { Alert, Button, Typography } from '@mui/material';
import { ModalForm } from '../layout/ModalForm';

export const AlertDelete = ({funtionDelete, title}) => {

    return (
        <ModalForm
            nameButton={"Borrar"}
            styleButton={<Delete />}
            hiddenStyle={{ display: 'none' }}
            // hiddenStyleCancelar={{ width: '100%', mt: 0 }}
            styleIconButton={{ width: 20, padding: 0 }}
            colorStyleIconButton={"error"}
            buttonBorrarServicio={
                <Button
                    color="error"
                    variant="contained"
                    fullWidth
                    onClick={funtionDelete}
                    sx={{ maxWidth: '112px' }}
                >
                    Borrar
                </Button>
            }
            title="Borrar"
        >

            <Alert severity="error" >
                <Typography variant="h4" color="inherit" mb={2}>
                    {title}
                </Typography>
                ¿Esta seguro de esta accion?
            </Alert>

        </ModalForm>
    )
}
