import { useState } from 'react';
import { Add } from '@mui/icons-material';
import { Autocomplete, TextField, Typography } from '@mui/material';
import { useCrudAplicaciones, useCrudServicios, useForm } from '../../../../hooks';
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
    'servicio': '',
}

const formValidations = {
    nombreDeAplicacion: [(value) => value.length >= 2, 'El nombre de la aplicacion es obligatorio'],
    servicio: [(value) => value >= 1, 'Selecciona algun servicio'],
}

export const ModalAplicaciones = () => {

    const {
        nombreDeAplicacion, servicio,
        nombreDeAplicacionValid, servicioValid,
        onInputChange, onResetForm, isFormValid
    } = useForm(formData, formValidations);

    const { addAplicacion } = useCrudAplicaciones();
    const { servicios } = useCrudServicios();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const agregarAplicacion = (data) => {
        setFormSubmitted(true);

        if (!isFormValid) return;

        addAplicacion(
            nombreDeAplicacion,
            servicio
        )
        onResetForm();
        setFormSubmitted(false);
        console.log('ARREGLAR ESTO!!');
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
        </ModalForm>
    )
}
