import { useState } from 'react';
import { Edit } from '@mui/icons-material';
import { TextField, Typography } from '@mui/material';

import { ModalForm } from '../../../layout';
import { useCrudServicios, useForm } from '../../../../hooks';


const formValidations = {
    nombreServicioInput: [(value) => value.length >= 2, 'El nombre de servicio es obligatorio'],
    // descripcion: [(value) => value.length >= 1, 'Agrega una descripcion'],
    // driver: [(value) => value.length >= 1, 'El driver es obligatorio.'],
    claseActividadInput: [(value) => value.length >= 1, 'La clase de actividad es obligatoria.'],
    claseCostoInput: [(value) => value.length >= 1, 'La clase de costo es obligatoria.'],
    porcentajeComparacionInput: [(value) => (value >= 1 && value <= 100), 'Agrega un porcentaje entre el 1 y 100'],
    responsableReporteInput: [(value) => value.length >= 1, 'El responsable del reporte es obligatorio.'],
}

export const EditModalServicios = ({
    idServicio,
    nombreServicio,
    descripcion,
    driver,
    claseActividad,
    claseCosto,
    porcentajeComparacion,
    responsableReporte,
}) => {

    const {
        nombreServicioInput, descripcionInput, driverInput, claseActividadInput,
        claseCostoInput, porcentajeComparacionInput, responsableReporteInput,
        nombreServicioInputValid, descripcionInputValid, driverInputValid, claseActividadInputValid,
        claseCostoInputValid, porcentajeComparacionInputValid, responsableReporteInputValid,
        onInputChange, onResetForm, isFormValid
    } = useForm({
        'nombreServicioInput': nombreServicio,
        'descripcionInput': descripcion,
        'driverInput': driver,
        'claseActividadInput': claseActividad,
        'claseCostoInput': claseCosto,
        'porcentajeComparacionInput': porcentajeComparacion,
        'responsableReporteInput': responsableReporte,
    }, formValidations);

    const [formSubmitted, setFormSubmitted] = useState(false);
    const { editServicio } = useCrudServicios();

    const editarServicios = () => {
        setFormSubmitted(true);

        if (!isFormValid) return;

        editServicio(
            idServicio,
            nombreServicioInput,
            descripcionInput,
            driverInput,
            claseActividadInput,
            claseCostoInput,
            porcentajeComparacionInput,
            responsableReporteInput,
        )
        setFormSubmitted(false);

        return true;
    }

    const handleCloseModal = () => {
        onResetForm();
        setFormSubmitted(false);
    }

    return (
        <ModalForm
            funtion={editarServicios}
            nameButton={"Actualizar"}
            styleButton={<Edit />}
            handleCloseModal={handleCloseModal}
            title="Editar"
        >
            <Typography variant="h4" color="inherit" mb={2}>
                Editar servicio
            </Typography>
            <TextField
                label="Nombre de servicio"
                name='nombreServicioInput'
                value={nombreServicioInput}
                onChange={onInputChange}
                error={!!nombreServicioInputValid && formSubmitted}
                helperText={formSubmitted ? nombreServicioInputValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Descipcion"
                name='descripcionInput'
                value={descripcionInput}
                onChange={onInputChange}
                error={!!descripcionInputValid && formSubmitted}
                helperText={formSubmitted ? descripcionInputValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Driver No. de usuarios"
                name='driverInput'
                value={driverInput}
                onChange={onInputChange}
                error={!!driverInputValid && formSubmitted}
                helperText={formSubmitted ? driverInputValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Clase de actividad"
                name='claseActividadInput'
                value={claseActividadInput}
                onChange={onInputChange}
                error={!!claseActividadInputValid && formSubmitted}
                helperText={formSubmitted ? claseActividadInputValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Clase de costo"
                name='claseCostoInput'
                value={claseCostoInput}
                onChange={onInputChange}
                error={!!claseCostoInputValid && formSubmitted}
                helperText={formSubmitted ? claseCostoInputValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Porcentaje de comparacion"
                name='porcentajeComparacionInput'
                value={porcentajeComparacionInput}
                onChange={onInputChange}
                error={!!porcentajeComparacionInputValid && formSubmitted}
                helperText={formSubmitted ? porcentajeComparacionInputValid : null}
                size="small"
                fullWidth
                type="number"
                sx={{ mb: 2 }}
            />
            <TextField
                label="Responsable del reporte"
                name='responsableReporteInput'
                value={responsableReporteInput}
                onChange={onInputChange}
                error={!!responsableReporteInputValid && formSubmitted}
                helperText={formSubmitted ? responsableReporteInputValid : null}
                size="small"
                fullWidth
            />
        </ModalForm>
    )
}
