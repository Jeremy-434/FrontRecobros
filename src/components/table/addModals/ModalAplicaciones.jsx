import { useState } from 'react';

import { Add } from '@mui/icons-material';
import { MenuItem, TextField, Typography } from '@mui/material';

import { useForm } from '../../../hooks';
import { ModalForm } from '../layout/ModalForm';
import { useCrudAplicaciones } from '../../../hooks/useCrudAplicaciones';
import { useCrudServicios } from '../../../hooks/useCrudServicios';

const styleIconButton = {
    color: 'white',
    backgroundColor: 'primary.main',
    ':hover': { backgroundColor: 'primary.main', opacity: 0.9 },
    position: 'absolute',
    'border-radius': '100px',
    width: '40px',
    right: 100,
    top: 100,
    // left: 100,
    // bottom: 100,
}

const formData = {
    'nombreDeAplicacion': '',
    'estadoDeAplicacion': 'Activo',
    'nombreDeSegmento': '',
    'servicio': '',
    'aliado': ''
}

const formValidations = {
    nombreDeAplicacion: [(value) => value.length >= 2, 'El nombre de la aplicacion es obligatorio'],
    estadoDeAplicacion: [(value) => value.length >= 1, 'El estado es obligatorio.'],
    // nombreDeSegmento: [(value) => value.length >= 1, 'El nombre del segmento es obligatorio.'],
    servicio: [(value) => value >= 1, 'Selecciona algun servicio'],
    aliado: [(value) => value >= 1, 'Selecciona algun aliado'],
}

export const ModalAplicaciones = () => {

    const {
        nombreDeAplicacion, estadoDeAplicacion, nombreDeSegmento, servicio, aliado,
        nombreDeAplicacionValid, estadoDeAplicacionValid, nombreDeSegmentoValid, servicioValid, aliadoValid,
        onInputChange, onResetForm, isFormValid
    } = useForm(formData, formValidations);

    const { aplicaciones, addAplicacion } = useCrudAplicaciones();
    const { servicios } = useCrudServicios();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const agregarAplicacion = () => {
        setFormSubmitted(true);

        if (!isFormValid) return;

        addAplicacion(
            nombreDeAplicacion,
            estadoDeAplicacion,
            nombreDeSegmento,
            servicio,
            aliado
        )
        onResetForm();
        setFormSubmitted(false);
        return true;
    }

    const handleCloseModal = () => {
        onResetForm();
        setFormSubmitted(false);
    }

    return (
        <ModalForm
            funtion={agregarAplicacion}
            nameButton={"agregar"}
            styleButton={<Add />}
            handleCloseModal={handleCloseModal}
            styleIconButton={styleIconButton}
            title="Agregar"
        >
            <Typography variant="h4" color="inherit" mb={2}>
                Agregar aplicacion
            </Typography>
            <TextField
                label="Nombre de aplicación"
                name='nombreDeAplicacion'
                value={nombreDeAplicacion}
                onChange={onInputChange}
                error={!!nombreDeAplicacionValid && formSubmitted}
                helperText={formSubmitted ? nombreDeAplicacionValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Estado de aplicacion"
                name="estadoDeAplicacion"
                value={estadoDeAplicacion}
                onChange={onInputChange}
                error={!!estadoDeAplicacionValid && formSubmitted}
                helperText={formSubmitted ? estadoDeAplicacionValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
                select
            >
                <MenuItem value={"Activo"} >Activo</MenuItem>
                <MenuItem value={"Inactivo"} >Inactivo</MenuItem>
            </TextField>
            <TextField
                label="Nombre de segmento"
                name='nombreDeSegmento'
                value={nombreDeSegmento}
                onChange={onInputChange}
                error={!!nombreDeSegmentoValid && formSubmitted}
                helperText={formSubmitted ? nombreDeSegmentoValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Servicio"
                name="servicio"
                value={servicio}
                onChange={onInputChange}
                error={!!servicioValid && formSubmitted}
                helperText={formSubmitted ? servicioValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
                select
            >
                {
                    servicios.map((servicio) => (
                        <MenuItem
                            key={servicio.idServicio}
                            value={servicio.idServicio}
                        >
                            {servicio.nombreServicio}
                        </MenuItem>
                    ))
                }
            </TextField>
            <TextField
                label="Aliado"
                name="aliado"
                value={aliado}
                onChange={onInputChange}
                error={!!aliadoValid && formSubmitted}
                helperText={formSubmitted ? aliadoValid : null}
                size="small"
                fullWidth
                select
            >
                {
                    aplicaciones.map(({ idAliadoNavigation }) => (
                        <MenuItem
                            key={idAliadoNavigation.idAliado}
                            value={idAliadoNavigation.idAliado}
                        >
                            {idAliadoNavigation.nombreAliado}
                        </MenuItem>
                    ))
                }
            </TextField>
        </ModalForm>
    )
}
