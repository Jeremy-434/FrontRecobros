import { useState } from 'react';

import { Add } from '@mui/icons-material';
import { Autocomplete, MenuItem, TextField, Typography } from '@mui/material';

import { useCrudAliados, useCrudAplicaciones, useCrudServicios, useForm } from '../../../../hooks';
import { ModalForm } from '../../../layout';

const styleIconButton = {
    color: 'primary.main',
    backgroundColor: 'none',
    ':hover': { backgroundColor: 'none', opacity: 1 },
    borderRadius: '100px',
    width: '40px',
    mr: 2,
}

const formData = {
    'nombreDeAplicacion': '',
    'estadoDeAplicacion': 'Activo',
    'nombreDeSegmento': '',
    'servicio': '',
    // 'aliado': ''
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

    const { addAplicacion } = useCrudAplicaciones();
    const { servicios } = useCrudServicios();
    const { aliados } = useCrudAliados();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const agregarAplicacion = (data) => {
        setFormSubmitted(true);

        if (!isFormValid) return;

        addAplicacion(
            nombreDeAplicacion,
            estadoDeAplicacion,
            nombreDeSegmento,
            servicio,
            // aliado
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
            <Autocomplete
                disablePortal
                id="combo-box-demo-servicios"
                options={servicios}
                getOptionLabel={(option) => String(option.nombreServicio)}
                onChange={(event, newValue) => {
                    onInputChange({ target: { name: "servicio", value: newValue?.idServicio } })
                }}
                renderOption={(props, option) => (
                    <li {...props} key={option.idServicio}>
                        {option.nombreServicio}
                    </li>
                )}
                renderInput={(params) => (<TextField
                    {...params}
                    label="Servicio"
                    error={!!servicioValid && formSubmitted}
                    helperText={formSubmitted ? servicioValid : null}
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                )}
            />
            {/* <Autocomplete
                disablePortal
                id="combo-box-demo-aliados"
                options={aliados}
                getOptionLabel={(option) => String(option.nombreAliado)}
                onChange={(event, newValue) => {
                    onInputChange({ target: { name: "aliado", value: newValue?.idAliado } })
                }}
                renderOption={(props, option) => (
                    <li {...props} key={option.idAliado}>
                        {option.nombreAliado}
                    </li>
                )}
                renderInput={(params) => (<TextField
                    {...params}
                    label="Aliado"
                    error={!!aliadoValid && formSubmitted}
                    helperText={formSubmitted ? aliadoValid : null}
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                )}
            /> */}
        </ModalForm>
    )
}
