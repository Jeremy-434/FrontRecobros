import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { loadingLogErrores } from '../../store/apis/logErrores/thunks';
import { useFiltrosLogErrores } from './hooks/useFiltrosLogErrores';
import { ExportExcelFileLogs } from '../informes';
import { Clear, Search } from '@mui/icons-material';
import { loadingLogErroresJoinConsolidados } from '../../store/apis/logErroresJoinConsolidados/thunks';
import { useFiltrosLogErroresJoinConsolidados } from './hooks';

const date = new Date();

export const FiltrosLogErrores = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            "mes": date.getMonth(),
            "anio": date.getFullYear(),
            "servicio": "",
            "aplicacion": "",
        }
    });
    // const { logErrores } = loadingLogErrores();
    const { logErroresJoinConsolidado } = loadingLogErroresJoinConsolidados();

    // const { handleDeleteFilters, clickSearch } = useFiltrosLogErrores(logErrores);
    const { handleDeleteFilters, clickSearch } = useFiltrosLogErroresJoinConsolidados(logErroresJoinConsolidado);

    const handleCleanSearch = () => {
        handleDeleteFilters();
    }

    const onSubmit = (data) => {
        clickSearch(data);
    }

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
                component="form"
                onSubmit={handleSubmit(onSubmit)}
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
                <Grid item xs={12} display="flex" justifyContent="center" >
                    <TextField
                        label={`Mes`}
                        name="mes"
                        size="small"
                        {...register("mes")}
                    />
                    <TextField
                        label={`Año`}
                        name="anio"
                        size="small"
                        {...register("anio")}
                    />
                </Grid>

                <Grid item xs={4}>
                    <Button variant="contained" fullWidth type="submit">
                        Consultar
                        <Search sx={{ fontSize: 16, ml: 1 }} />
                    </Button>
                </Grid>
                {/* //* BOTON EXPORTAR */}
                <Grid item xs={4}>
                    <ExportExcelFileLogs />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth onClick={handleCleanSearch}>
                        Limpiar
                        <Clear sx={{ fontSize: 18, ml: 1 }} />
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
