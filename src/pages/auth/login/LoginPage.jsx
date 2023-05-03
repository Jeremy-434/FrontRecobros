import { Link as RouterLink } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { LayoutLogin } from './layout';
import { useForm } from 'react-hook-form';
import { ButtonLogin } from './ButtonLogin';

export const LoginPage = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            item1: "",
            item2: "",
        }
    });

    return (
        <LayoutLogin title="Recobros">
            <Typography fontSize={16} textAlign="start" >
                Herramienta informática utilizada por ECP permite realizar cargue de archivo por parte de los aliados, con el fin de llevar a cabo los recobros correspondientes.
            </Typography>
            <form
                // onSubmit={ onSubmit } 
                className="animate__animated animate__fadeIn animate__faster"
            >
                <Grid container>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={12}>
                            {/* <Button
                                // disabled={isAuthenticating}
                                component={RouterLink}
                                to="/inicio"
                                variant="outlined"
                                type="submit"
                                fullWidth
                            >
                                <Login sx={{ mr: 1 }} />
                                Iniciar sesion
                            </Button> */}
                            <ButtonLogin />
                        </Grid>
                    </Grid>
                </Grid>

            </form>
        </LayoutLogin >
    )
}
