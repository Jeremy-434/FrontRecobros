import { Box, Container, Divider, Paper, Typography } from '@mui/material';
import { PageLayout } from '../layout';

export const InicioPage = () => {
    return (
        <PageLayout sx={{}}>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    alignItems: 'center',
                    height: 'calc(100vh - 100px)',
                    marginX: 'auto'
                }}
            >
                <Paper
                    elevation={2}
                    sx={{
                        padding: 2,
                        width: '55%',
                    }}
                >
                    <Typography variant='h1' color="primary" fontSize={32} align="center">¡BIENVENIDO!</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography fontSize={14}>
                        <Typography fontSize={16}>
                            ¡Bienvenido a nuestra aplicación de consolidación y automatización de recobros!<br />
                        </Typography>
                        Nuestra aplicación está diseñada para ayudarte a consolidar información de varias fuentes y realizar cruces de datos para facilitar la automatización de recobros en varias aplicaciones. Con nuestra tecnología avanzada, puedes ahorrar tiempo y esfuerzo al tener toda la información en un solo lugar y automatizar el proceso de recobro. <br />
                        ¡No más preocupaciones por pagos atrasados! ¡Deja que nuestra aplicación se encargue de todo por ti!
                    </Typography>
                </Paper>
                <Box component='img' src='\Advantages-pana-primary.svg' width={450} marginBottom={2} />

                <Typography
                    variant="h6"
                    fontSize={12}
                    position="absolute"
                    bottom={0}
                > Recobros @Ecopetrol - 2023 </Typography>
            </Container>
        </PageLayout>
    )
}
