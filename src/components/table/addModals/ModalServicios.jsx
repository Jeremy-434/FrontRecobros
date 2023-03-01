import { Add } from '@mui/icons-material';
import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from '../../../hooks';
import { useCrudServicios } from '../../../hooks/useCrudServicios';
import { useDispatch } from 'react-redux';
import { handleMessageOpen, setMessage } from '../../../store/slices/messageCreated';
import { ModalForm } from '../layout/ModalForm';

const styleIconButton = {
    color: 'white',
    backgroundColor: 'primary.main',
    ':hover': { backgroundColor: 'primary.main', opacity: 0.9 },
    position: 'fixed',
    right: 90,
    bottom: 50,
}

const formData = {
    'nombreServicio': '',
    'descripcion': '',
    'driver': '',
    'claseActividad': '',
    'claseCosto': '',
    'porcentajeComparacion': '',
    'responsableReporte': '',
}

const formValidations = {
    nombreServicio: [(value) => value.length >= 2, 'El nombre de servicio es obligatorio'],
    // descripcion: [(value) => value.length >= 1, 'Agrega una descripcion'],
    // driver: [(value) => value.length >= 1, 'El driver es obligatorio.'],
    claseActividad: [(value) => value.length >= 1, 'La clase de actividad es obligatoria.'],
    claseCosto: [(value) => value.length >= 1, 'La clase de costo es obligatoria.'],
    porcentajeComparacion: [(value) => (value >= 1 && value <= 100), 'Agrega un porcentaje entre el 1 y 100'],
    responsableReporte: [(value) => value.length >= 1, 'El responsable del reporte es obligatorio.'],
}

export const ModalServicios = () => {

    const {
        nombreServicio, descripcion, driver, claseActividad, claseCosto, porcentajeComparacion, responsableReporte,
        nombreServicioValid, descripcionValid, driverValid, claseActividadValid, claseCostoValid, porcentajeComparacionValid, responsableReporteValid,
        onInputChange, onResetForm, isFormValid
    } = useForm(formData, formValidations);

    const dispatch = useDispatch();
    const { addServicio } = useCrudServicios();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const agregarServicio = () => {
        setFormSubmitted(true);

        if (!isFormValid) return;

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
        setFormSubmitted(false);
        dispatch(setMessage('Servicio agregado correctamente'));
        dispatch(handleMessageOpen());
        return true;
    }


    const handleCloseModal = () => {
        onResetForm();
        setFormSubmitted(false);
    }

    return (
        <ModalForm
            funtion={agregarServicio}
            nameButton={"agregar"}
            styleButton={<Add />}
            handleCloseModal={handleCloseModal}
            styleIconButton={styleIconButton}
            title="Agregar"
        >
            <Typography variant="h4" color="inherit" mb={2}>
                Agregar Servicio
            </Typography>
            <TextField
                label="Nombre del servicio"
                name='nombreServicio'
                value={nombreServicio}
                onChange={onInputChange}
                error={!!nombreServicioValid && formSubmitted}
                helperText={formSubmitted ? nombreServicioValid : null}
                size="small"
                fullWidth
                sx={{ mb: 1 }}
            />
            <TextField
                label="Descripción del servicio"
                name='descripcion'
                value={descripcion}
                onChange={onInputChange}
                error={!!descripcionValid && formSubmitted}
                helperText={formSubmitted ? descripcionValid : null}
                size="small"
                fullWidth
                sx={{ mb: 1 }}

            />
            <TextField
                label="Driver No. de usuarios"
                name='driver'
                value={driver}
                onChange={onInputChange}
                error={!!driverValid && formSubmitted}
                helperText={formSubmitted ? driverValid : null}
                size="small"
                fullWidth
                sx={{ mb: 1 }}

            />
            <TextField
                label="Clase de actividad"
                name='claseActividad'
                value={claseActividad}
                onChange={onInputChange}
                error={!!claseActividadValid && formSubmitted}
                helperText={formSubmitted ? claseActividadValid : null}
                size="small"
                fullWidth
                sx={{ mb: 1 }}

            />
            <TextField
                label="Clase de costo"
                name='claseCosto'
                value={claseCosto}
                onChange={onInputChange}
                error={!!claseCostoValid && formSubmitted}
                helperText={formSubmitted ? claseCostoValid : null}
                size="small"
                fullWidth
                sx={{ mb: 1 }}

            />
            <TextField
                label="Porcentaje de comparacion"
                name='porcentajeComparacion'
                value={porcentajeComparacion}
                onChange={onInputChange}
                error={!!porcentajeComparacionValid && formSubmitted}
                helperText={formSubmitted ? porcentajeComparacionValid : null}
                size="small"
                fullWidth
                type="number"
                sx={{ mb: 1 }}

            />
            <TextField
                label="Responsable del reporte"
                name='responsableReporte'
                value={responsableReporte}
                onChange={onInputChange}
                error={!!responsableReporteValid && formSubmitted}
                helperText={formSubmitted ? responsableReporteValid : null}
                size="small"
                fullWidth
                sx={{ mb: 1 }}
            />
        </ModalForm>
    )
}
