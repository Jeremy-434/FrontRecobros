import { Add } from '@mui/icons-material';
import { MenuItem, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { ModalForm } from './layout/ModalForm';

export const ModalServicios = () => {
    const {
        nombreServicio,
        descripcion,
        driver,
        claseActividad,
        claseCosto,
        porcentajeComparacion,
        responsableReporte,
        onInputChange,
        onResetForm
    } = useForm({
        'nombreServicio': '',
        'descripcion': '',
        'driver': '',
        'claseActividad': '',
        'claseCosto': '',
        'porcentajeComparacion': '',
        'responsableReporte': '',
    });

    const { addServicio } = useCrudServicios();
    const agregarServicio = () => {
        addServicio(
            nombreServicio,
            descripcion,
            driver,
            claseActividad,
            claseCosto,
            porcentajeComparacion,
            responsableReporte,
        )
        onResetForm();
    }

    return (
        <ModalForm funtion={agregarServicio} nameButton={"agregar"} styleButton={<Add/>}>
            <Typography variant="h4" color="inherit" mb={2}>
                Agregar Servicio
            </Typography>
            <TextField
                label="Nombre del servicio"
                name='nombreServicio'
                value={nombreServicio}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Descripción del servicio"
                name='descripcion'
                value={descripcion}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Driver No. de usuarios"
                name='driver'
                value={driver}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Clase de actividad"
                name='claseActividad'
                value={claseActividad}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Clase de costo"
                name='claseCosto'
                value={claseCosto}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Porcentaje de comparacion"
                name='porcentajeComparacion'
                value={porcentajeComparacion}
                onChange={onInputChange}
                size="small"
                fullWidth
                type="number"
                sx={{ mb: 2 }}

            />
            <TextField
                label="Responsable del reporte"
                name='responsableReporte'
                value={responsableReporte}
                onChange={onInputChange}
                size="small"
                fullWidth

            />
        </ModalForm>
    )
}
