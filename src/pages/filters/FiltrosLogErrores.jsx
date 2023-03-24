import { Button, Container, Grid, TextField, Typography } from '@mui/material';

export const FiltrosLogErrores = () => {
    return (
        <Container component="div" sx={{ marginTop: 4 }} >
            <Typography
                variant="h2"
                component="h2"
                color="initial"
                fontSize={34}
                display="inline"
                fontWeight="400"
                marginLeft={2}
                marginBottom={0}
            >
                Log de errores
            </Typography>
            <Grid
                container
                component="div"
                marginTop={1}
                marginY={2}
                paddingTop={1}
                paddingBottom={2.5}
                paddingRight={2}
                spacing={2}
                borderRadius={2}
                boxShadow="2px 4px 12px -4px rgba(0,0,0,0.75)"
                alignItems="center"
            >
                <Grid item xs={3}>
                    <TextField
                        label={`Mes`}
                        name="mes"
                        size="small"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={`Año`}
                        name="anio"
                        size="small"
                        fullWidth
                        disabled
                    />
                </Grid>

                <Grid item xs={6}>
                    <Button variant="contained" fullWidth>
                        Consultar
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={`Buscar por servicio`}
                        name="servicio"
                        size="small"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={`Buscar por aplicación`}
                        name="aplicación"
                        size="small"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth color="info">
                        Exportar excel
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}