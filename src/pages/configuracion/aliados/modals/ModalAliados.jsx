import { useState } from 'react';
import { Add } from '@mui/icons-material';
import { MenuItem, TextField, Typography } from '@mui/material';
import { ModalForm } from '../../../layout';
import { useAuthStore, useCrudAliados, useForm } from '../../../../hooks';

const styleIconButton = {
    color: 'primary.main',
    backgroundColor: 'none',
    ':hover': { backgroundColor: 'none', opacity: 0.9 },
    borderRadius: '100px',
    width: '40px',
    mr: 2,
}

const formValidations = {
    nombreAliado: [(value) => value.length >= 1, 'El nombre del aliado es obligatorio'],
    // usuario: [(value) => value.length >= 1, 'El usuario es obligatorio.'],
    estado: [(value) => value.length >= 1, 'El estado es obligatorio.'],
    correoResponsable: [(value) => value.length >= 1, 'El correo del responsable es obligatorio'],
    // fecha: [(value) => value >= 1, 'La fecha es obligatoria'],
}

export const ModalAliados = () => {

    const { addAliado } = useCrudAliados();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { user } = useAuthStore();

    const {
        nombreAliado, usuario, estado, correoResponsable, fecha,
        nombreAliadoValid, usuarioValid, estadoValid, correoResponsableValid, fechaValid,
        onInputChange, onResetForm, isFormValid
    } = useForm({
        'nombreAliado': '',
        'usuario': user?.usuario,
        'estado': 'Activo',
        'correoResponsable': '',
        'fecha': ''
    }, formValidations);


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
            function={agregarAliado}
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
                name="nombreAliado"
                value={nombreAliado}
                onChange={onInputChange}
                error={!!nombreAliadoValid && formSubmitted}
                helperText={formSubmitted ? nombreAliadoValid : null}
                size="small"
                fullWidth
                inputProps={{
                    maxLength: 100
                }}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Usuario"
                name="usuario"
                value={usuario}
                onChange={onInputChange}
                error={!!usuarioValid && formSubmitted}
                helperText={formSubmitted ? usuarioValid : null}
                size="small"
                fullWidth
                inputProps={{
                    maxLength: 30
                }}
                sx={{ mb: 2 }}
                disabled
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
                type="email"
                inputProps={{
                    maxLength: 200
                }}
                fullWidth
                sx={{ mb: 2 }}
            />
        </ModalForm>
    )
}
