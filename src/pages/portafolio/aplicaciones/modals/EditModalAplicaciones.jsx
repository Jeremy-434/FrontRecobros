import { useEffect, useState } from 'react';
import { Edit } from '@mui/icons-material';
import { Autocomplete, MenuItem, TextField, Typography } from '@mui/material';

import { ModalForm } from '../../../layout';

import { useCrudAliados, useCrudAplicaciones, useCrudServicios, useForm } from '../../../../hooks';


const formValidations = {
    nombreDeAplicacionInput: [(value) => value.length >= 2, 'El nombre de la aplicacion es obligatorio'],
    estadoDeAplicacionInput: [(value) => value.length >= 1, 'El estado es obligatorio.'],
    // nombreDeSegmento: [(value) => value.length >= 1, 'El nombre del segmento es obligatorio.'],
    servicioInput: [(value) => value >= 1, 'Selecciona algun servicio'],
    aliadoResponsableInput: [(value) => value >= 1, 'Selecciona algun aliado'],
}

export const EditModalAplicaciones = ({
    idAplicacion,
    nombreAplicacion,
    estado,
    nombreSegmento,
    idAliado,
    idServicio
}) => {
    const {
        nombreDeAplicacionInput, estadoDeAplicacionInput, nombreDeSegmentoInput, aliadoResponsableInput, servicioInput,
        nombreDeAplicacionInputValid, estadoDeAplicacionInputValid, nombreDeSegmentoInputValid, aliadoResponsableInputValid, servicioInputValid,
        onInputChange, onResetForm, isFormValid, reset
    } = useForm({
        'nombreDeAplicacionInput': nombreAplicacion,
        'estadoDeAplicacionInput': estado,
        'nombreDeSegmentoInput': nombreSegmento,
        'aliadoResponsableInput': idAliado,
        'servicioInput': idServicio,
    }, formValidations);

    const [formSubmitted, setFormSubmitted] = useState(false);
    const { editAplicaciones } = useCrudAplicaciones();
    const { servicios } = useCrudServicios();
    const { aliados } = useCrudAliados();

    const editarAplicaciones = () => {
        setFormSubmitted(true);

        if (!isFormValid) return;

        editAplicaciones(
            idAplicacion,
            nombreDeAplicacionInput,
            estadoDeAplicacionInput,
            nombreDeSegmentoInput,
            aliadoResponsableInput,
            servicioInput,
        )
        setFormSubmitted(false);
        return true;
    }

    const handleCloseModal = () => {
        onResetForm();
        setFormSubmitted(false);
    }

    const defaultValueAliado = aliados.find(option => option.idAliado === idAliado);
    const defaultValueServicio = servicios.find(option => option.idServicio === idServicio);

    return (
        <ModalForm
            funtion={editarAplicaciones}
            nameButton={"Actualizar"}
            styleButton={<Edit />}
            handleCloseModal={handleCloseModal}
            styleIconButton={{ width: 20, padding: 0 }}
            title="Editar"
        >
            <Typography variant="h4" color="inherit" mb={2}>
                Editar aplicacion
            </Typography>
            <TextField
                label="Nombre de aplicación"
                name='nombreDeAplicacionInput'
                value={nombreDeAplicacionInput}
                onChange={onInputChange}
                error={!!nombreDeAplicacionInputValid && formSubmitted}
                helperText={formSubmitted ? nombreDeAplicacionInputValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Estado de aplicacion"
                name='estadoDeAplicacionInput'
                value={estadoDeAplicacionInput}
                onChange={onInputChange}
                error={!!estadoDeAplicacionInputValid && formSubmitted}
                helperText={formSubmitted ? estadoDeAplicacionInputValid : null}
                size="small"
                fullWidth
                select
                sx={{ mb: 2 }}

            >
                <MenuItem value={"Activo"} >Activo</MenuItem>
                <MenuItem value={"Inactivo"} >Inactivo</MenuItem>
            </TextField>
            <TextField
                label="Nombre de segmento"
                name='nombreDeSegmentoInput'
                value={nombreDeSegmentoInput}
                onChange={onInputChange}
                error={!!nombreDeSegmentoInputValid && formSubmitted}
                helperText={formSubmitted ? nombreDeSegmentoInputValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <Autocomplete
                disablePortal
                id="combo-box-demo-aliados"
                options={aliados}
                defaultValue={defaultValueAliado}
                getOptionLabel={(option) => String(option.nombreAliado)}
                isOptionEqualToValue={(option, value) => option.idAliado === value.idAliado}
                onChange={(event, newValue) => {
                    onInputChange({ target: { name: "aliadoResponsableInput", value: newValue?.idAliado } })
                }}
                renderOption={(props, option) => (
                    <MenuItem {...props} key={option.idAliado}>
                        {option.nombreAliado}
                    </MenuItem>
                )}
                renderInput={(params) => (<TextField
                    {...params}
                    label="Aliado responsable"
                    error={!!aliadoResponsableInputValid && formSubmitted}
                    helperText={formSubmitted ? aliadoResponsableInputValid : null}
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                )}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo-servicios"
                options={servicios}
                defaultValue={defaultValueServicio}
                getOptionLabel={(option) => String(option.nombreServicio)}
                isOptionEqualToValue={(option, value) => option.idServicio === value.idServicio}
                onChange={(event, newValue) => {
                    onInputChange({ target: { name: "servicioInput", value: newValue?.idServicio } })
                }}
                renderOption={(props, option) => (
                    <MenuItem {...props} key={option.idServicio}>
                        {option.nombreServicio}
                    </MenuItem>
                )}
                renderInput={(params) => (<TextField
                    {...params}
                    label="Servicio"
                    error={!!servicioInputValid && formSubmitted}
                    helperText={formSubmitted ? servicioInputValid : null}
                    size="small"
                    fullWidth
                />
                )}
            />
        </ModalForm>
    )
}
