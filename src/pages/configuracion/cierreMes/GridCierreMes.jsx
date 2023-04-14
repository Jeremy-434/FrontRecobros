import { useContext } from 'react';
import { FirstContext } from '../../../context/first/FirstContext';
import { Alert, Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import { useCrudCierreMes, useCrudControlArchivos, useForm } from '../../../hooks';

const dateDate = new Date();
const dateYear = dateDate.getFullYear();
const dateMonth = dateDate.getUTCMonth() + 1;

const formData = {
  mes: dateMonth,
  anio: dateYear,
}

export const GridCierreMes = () => {

  const { mesCerrado, setMesCerrado } = useContext(FirstContext);
  const { mes, anio, onInputChange } = useForm(formData);

  const { addCierreMes, borrarCierreMes, cierreMes } = useCrudCierreMes();
  const { controlArchivos } = useCrudControlArchivos();

  // ? En caso de usar estado="Procesando" se revisa si el ultimo archivo cargado es del mes actual
  // const lastControlArchivo = controlArchivos?.slice(-1)[0] ? controlArchivos?.slice(-1)[0].mes : null;
  // const boolControlArchivo = lastControlArchivo == mes;

  const onCerrarMes = () => {
    addCierreMes({
      mes: mes,
      anio: anio,
      usuario: "Ama Gwatterson",
      fechaServidor: null,
      estado: "Cerrado"
    });
    setMesCerrado(true);
  }

  const onReabrirMes = () => {
    borrarCierreMes(cierreMes.slice(-1)[0].idCierreMes);
    setMesCerrado(false);
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
            value={mes}
            onChange={onInputChange}
            size="small"
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label={`Año`}
            name="anio"
            value={anio}
            onChange={onInputChange}
            size="small"
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <Alert
            severity={mesCerrado ? 'error' : 'warning'}
            variant="standard"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
            }}
          >
            {mesCerrado ? 'Cerrado' : 'Pendiente'}
          </Alert>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={onReabrirMes}
            sx={{ display: mesCerrado ? '' : 'none' }}
          >
            Reabrir mes
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={onCerrarMes}
            sx={{ display: mesCerrado ? 'none' : '' }}
          >
            Cerrar mes
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
