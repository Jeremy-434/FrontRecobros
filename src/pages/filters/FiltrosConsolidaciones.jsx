import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { loadingConsolidados } from '../../store/apis/consolidados/thunks';
import { ExportExcelFile } from '../informes/consolidacion/excelExport/ExportExcelFile';
import { useForm } from 'react-hook-form';
import { useFiltrosConsolidado } from './hooks';

const date = new Date();

export const FiltrosConsolidaciones = () => {

    const { register, handleSubmit, reset, formState: { errors }, resetField } = useForm({
        defaultValues: {
            "mes": date.getMonth(),
            "anio": date.getFullYear(),
        }
    });
    const { consolidados } = loadingConsolidados();

    const { handleDeleteFilters, clickSearch } = useFiltrosConsolidado(consolidados);

    const handleCleanSearch = () => {
        handleDeleteFilters();
        resetField();
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
                Consolidación
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
                <Grid item xs={3}>
                    <TextField
                        label={`Mes`}
                        name="mes"
                        size="small"
                        fullWidth
                        type="number"
                        {...register("mes")}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={`Año`}
                        name="anio"
                        size="small"
                        fullWidth
                        type="number"
                        {...register("anio")}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" type="submit" fullWidth>
                        Consultar
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" onClick={handleCleanSearch} fullWidth>
                        Limpiar
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <ExportExcelFile data={consolidados} />
                </Grid>
            </Grid>
        </Container>
    )
}
