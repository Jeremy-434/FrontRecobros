import { Grid, Typography } from '@mui/material';
import { LayoutLogin } from './layout';
import { LoginModal } from './modal/LoginModal';
import { CheckingCredetials } from './components/checkingCredetials';

export const LoginPage = () => {
    return (
        <LayoutLogin title="Recobros">

            {/* //* Loading Component */}
            <CheckingCredetials />

            <Typography fontSize={16} textAlign="start" >
                Herramienta informática utilizada por ECP permite realizar cargue de archivo por parte de los aliados, con el fin de llevar a cabo los recobros correspondientes.
            </Typography>

            <Grid container>
                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sm={12}>
                        <LoginModal />
                    </Grid>
                </Grid>
            </Grid>
        </LayoutLogin >
    )
}
