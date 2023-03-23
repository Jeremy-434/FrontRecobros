import { Alert, Button, Container, Grid, Input, TextField, Typography } from '@mui/material';

export const GridCerrarMes = () => {
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
                Cierre de mes
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
                    <Alert
                        severity="warning"
                        variant="standard"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 0,
                        }}
                    >
                        Pendiente
                    </Alert>
                </Grid>
                <Grid item xs={6}>
                    {/* <Button variant="contained" fullWidth>
                          Reabrir mes
                        </Button> */}
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth>
                        Cerrar mes
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
