import { useState } from 'react';
import { Edit } from '@mui/icons-material';
import { MenuItem, TextField, Typography } from '@mui/material';

import { ModalForm } from '../../../layout';

import { useCrudAliados, useForm } from '../../../../hooks';

const formValidations = {
    nombreAliadoInput: [(value) => value.length >= 2, 'El nombre del aliado es obligatorio'],
    usuarioInput: [(value) => value.length >= 1, 'El usuario es obligatorio.'],
    estadoInput: [(value) => value.length >= 1, 'El estado es obligatorio.'],
    correoResponsableInput: [(value) => value.length >= 1, 'El correo del responsable es obligatorio'],
    // fechaInput: [(value) => value.length >= 1, 'Selecciona algun aliado'],
}

export const EditModalAliados = ({
    idAliado,
    nombreAliado,
    usuario,
    estado,
    correoResponsable,
    fecha,
}) => {

    const {
        nombreAliadoInput, usuarioInput, estadoInput, correoResponsableInput, fechaInput,
        nombreAliadoInputValid, usuarioInputValid, estadoInputValid, correoResponsableInputValid, fechaInputValid,
        onInputChange, onResetForm, isFormValid
    } = useForm({
        'nombreAliadoInput': nombreAliado,
        'usuarioInput': usuario,
        'estadoInput': estado,
        'correoResponsableInput': correoResponsable,
        'fechaInput': fecha,
    }, formValidations);

    const [formSubmitted, setFormSubmitted] = useState(false);
    const { editAliado } = useCrudAliados();

    const editarAliado = () => {
        setFormSubmitted(true);

        if (!isFormValid) return;

        editAliado(
            idAliado,
            nombreAliadoInput,
            usuarioInput,
            estadoInput,
            correoResponsableInput,
            fechaInput,
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
            funtion={editarAliado}
            nameButton={"Actualizar"}
            styleButton={<Edit />}
            styleIconButton={{ width: 20, padding: 0 }}
            handleCloseModal={handleCloseModal}
            title="Editar"
        >
            <Typography variant="h4" color="inherit" mb={2}>
                Editar aplicacion
            </Typography>
            <TextField
                label="Nombre del aliado"
                name='nombreAliadoInput'
                value={nombreAliadoInput}
                onChange={onInputChange}
                error={!!nombreAliadoInputValid && formSubmitted}
                helperText={formSubmitted ? nombreAliadoInputValid : null}
                size="small"
                inputProps={{
                    maxLength: 100
                }}
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Estado del aliado"
                name='estadoInput'
                value={estadoInput}
                onChange={onInputChange}
                error={!!estadoInputValid && formSubmitted}
                helperText={formSubmitted ? estadoInputValid : null}
                size="small"
                fullWidth
                select
                sx={{ mb: 2 }}

            >
                <MenuItem value={"Activo"} >Activo</MenuItem>
                <MenuItem value={"Inactivo"} >Inactivo</MenuItem>
            </TextField>
            <TextField
                label="Usuario"
                name='usuarioInput'
                value={usuarioInput}
                onChange={onInputChange}
                error={!!usuarioInputValid && formSubmitted}
                helperText={formSubmitted ? usuarioInputValid : null}
                size="small"
                inputProps={{
                    maxLength: 30
                }}
                fullWidth
                sx={{ mb: 2 }}
                disabled
            />
            <TextField
                label="Correo del responsable"
                name="correoResponsableInput"
                value={correoResponsableInput}
                onChange={onInputChange}
                error={!!correoResponsableInputValid && formSubmitted}
                helperText={formSubmitted ? correoResponsableInputValid : null}
                size="small"
                type="email"
                inputProps={{
                    maxLength: 200
                }}
                fullWidth
                sx={{ mb: 2 }}
            />
            {/* <TextField
                // label="Fecha"
                name="fechaInput"
                value={fechaInput}
                onChange={onInputChange}
                error={!!fechaInputValid && formSubmitted}
                helperText={formSubmitted ? fechaInputValid : null}
                size="small"
                // type="date"
                fullWidth
            /> */}
        </ModalForm>
    )
}
