import { useState } from 'react';

import { Add } from '@mui/icons-material';
import { MenuItem, TextField, Typography } from '@mui/material';

import { useCrudAliados, useForm } from '../../../hooks';
import { ModalForm } from '../layout/ModalForm';
import { useCrudAplicaciones } from '../../../hooks/useCrudAplicaciones';
import { useCrudServicios } from '../../../hooks/useCrudServicios';

const styleIconButton = {
    color: 'primary.main',
    backgroundColor: 'none',
    ':hover': { backgroundColor: 'none', opacity: 0.9 },
    borderRadius: '100px',
    width: '40px',
    mr: 2,
}

const formData = {
    'nombreAliado': '',
    'usuario': '',
    'estado': 'Activo',
    'correoResponsable': '',
    'fecha': ''
}

const formValidations = {
    nombreAliado: [(value) => value.length >= 2, 'El nombre del aliado es obligatorio'],
    usuario: [(value) => value.length >= 1, 'El usuario es obligatorio.'],
    estado: [(value) => value.length >= 1, 'El estado es obligatorio.'],
    correoResponsable: [(value) => value.length >= 1, 'El correo del responsable es obligatorio'],
    // fecha: [(value) => value >= 1, 'La fecha es obligatoria'],
}

export const ModalAliados = () => {

    const {
        nombreAliado, usuario, estado, correoResponsable, fecha,
        nombreAliadoValid, usuarioValid, estadoValid, correoResponsableValid, fechaValid,
        onInputChange, onResetForm, isFormValid
    } = useForm(formData, formValidations);

    const { addAliado } = useCrudAliados();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const agregarAliado = () => {
        setFormSubmitted(true);

        if (!isFormValid) return;

        addAliado(
            nombreAliado,
            usuario,
            estado,
            correoResponsable,
            fecha
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
            funtion={agregarAliado}
            nameButton={"agregar"}
            styleButton={<Add />}
            handleCloseModal={handleCloseModal}
            styleIconButton={styleIconButton}
            title="Agregar"
        >
            <Typography variant="h4" color="inherit" mb={2}>
                Agregar aliado
            </Typography>
            <TextField
                label="Nombre del aliado"
                name='nombreAliado'
                value={nombreAliado}
                onChange={onInputChange}
                error={!!nombreAliadoValid && formSubmitted}
                helperText={formSubmitted ? nombreAliadoValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Usuario"
                name='usuario'
                value={usuario}
                onChange={onInputChange}
                error={!!usuarioValid && formSubmitted}
                helperText={formSubmitted ? usuarioValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Estado del aliado"
                name="estado"
                value={estado}
                onChange={onInputChange}
                error={!!estadoValid && formSubmitted}
                helperText={formSubmitted ? estadoValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
                select
            >
                <MenuItem value={"Activo"} >Activo</MenuItem>
                <MenuItem value={"Inactivo"} >Inactivo</MenuItem>
            </TextField>
            <TextField
                label="Correo del responsable"
                name="correoResponsable"
                value={correoResponsable}
                onChange={onInputChange}
                error={!!correoResponsableValid && formSubmitted}
                helperText={formSubmitted ? correoResponsableValid : null}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                // label="Fecha"
                name="fecha"
                value={fecha}
                onChange={onInputChange}
                error={!!fechaValid && formSubmitted}
                helperText={formSubmitted ? fechaValid : null}
                size="small"
                type="date"
                fullWidth
            />
        </ModalForm>
    )
}
