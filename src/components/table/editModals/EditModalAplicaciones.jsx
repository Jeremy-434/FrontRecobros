import { Edit } from '@mui/icons-material';
import { MenuItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useCrudAliados, useForm } from '../../../hooks';
import { useCrudAplicaciones } from '../../../hooks/useCrudAplicaciones';
import { useCrudServicios } from '../../../hooks/useCrudServicios';
import { ModalForm } from '../layout/ModalForm';

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
    idServicio,
}) => {

    const {
        nombreDeAplicacionInput, estadoDeAplicacionInput, nombreDeSegmentoInput, aliadoResponsableInput, servicioInput,
        nombreDeAplicacionInputValid, estadoDeAplicacionInputValid, nombreDeSegmentoInputValid, aliadoResponsableInputValid, servicioInputValid,
        onInputChange, onResetForm, isFormValid
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

    return (
        <ModalForm
            funtion={editarAplicaciones}
            nameButton={"Actualizar"}
            styleButton={<Edit />}
            handleCloseModal={handleCloseModal}
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
            <TextField
                label="Servicio"
                name="servicioInput"
                value={servicioInput}
                onChange={onInputChange}
                error={!!servicioInputValid && formSubmitted}
                helperText={formSubmitted ? servicioInputValid : null}
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
                name="aliadoResponsableInput"
                label="Aliado Responsable"
                value={aliadoResponsableInput}
                onChange={onInputChange}
                error={!!aliadoResponsableInputValid && formSubmitted}
                helperText={formSubmitted ? aliadoResponsableInputValid : null}
                size="small"
                fullWidth
                select
            >
                {
                    aliados.map((aliado) => (
                        <MenuItem
                            key={aliado.idAliado}
                            value={aliado.idAliado}
                        >
                            {aliado.nombreAliado}
                        </MenuItem>
                    ))
                }
            </TextField>
        </ModalForm>
    )
}
