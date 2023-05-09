import { useState } from 'react';
import { Edit } from '@mui/icons-material';
import { Autocomplete, MenuItem, TextField, Typography } from '@mui/material';
import { ModalForm } from '../../../layout';
import { useCrudAliados, useCrudAplicaciones, useCrudServicios, useForm } from '../../../../hooks';

const formValidations = {
    nombreDeAplicacionInput: [(value) => value.length >= 2, 'El nombre de la aplicacion es obligatorio'],
    servicioInput: [(value) => value >= 1, 'Selecciona algun servicio'],
}

export const EditModalAplicaciones = ({
    idAplicacion,
    nombreAplicacion,
    idServicio
}) => {
    const {
        nombreDeAplicacionInput, servicioInput,
        nombreDeAplicacionInputValid, servicioInputValid,
        onInputChange, onResetForm, isFormValid, reset
    } = useForm({
        'nombreDeAplicacionInput': nombreAplicacion,
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
            servicioInput,
        )
        setFormSubmitted(false);
        return true;
    }

    const handleCloseModal = () => {
        onResetForm();
        setFormSubmitted(false);
    }

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
