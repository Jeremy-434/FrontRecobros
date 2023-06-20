import { Delete, Edit } from '@mui/icons-material';
import { ModalForm } from '../../../layout';
import { Autocomplete, MenuItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useCrudPermissions, useForm } from '../../../../hooks';

const formData = {
    'idOption': 0,
}

const formValidations = {
    idOption: [(value) => value >= 1, 'Selecciona algun permiso'],
}

export const RemovePermissions = ({ idRol, permiso }) => {

    const [forCloseModal, setForCloseModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { permissions, removePermission, } = useCrudPermissions();

    const {
        idOption,
        idOptionValid,
        onInputChange, onResetForm, isFormValid
    } = useForm(formData, formValidations);

    const onSubmit = () => {
        console.log("asld");
        console.log("🚀 ~ isFormValid:", isFormValid)
        setFormSubmitted(true);

        if (!isFormValid) return;

        const permission = permissions.find(p => {
            if (p.idRolNavigation.idRol == idRol && p.idOpcionNavigation.idOpcion == idOption)
                return p;
        });
        console.log("🚀 ~ permission:", permission)

        removePermission(permission.idPermisos);
        setForCloseModal(true);
    }

    return (
        <ModalForm
            function={onSubmit}
            nameButton="Eliminar"
            styleButton={<Delete color='error' />}
            title={`Eliminar permisos`}
            forCloseModal={forCloseModal}
            setForCloseModal={setForCloseModal}
        >
            <Typography variant="h4" color="inherit" mb={2}>
                Eliminar permisos
            </Typography>
            <TextField
                label="Rol"
                value={permiso.idRolNavigation.rol}
                size="small"
                fullWidth
                disabled
                sx={{ mb: 2 }}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo-servicios"
                options={permissions}
                getOptionLabel={(option) => String(option.idOpcionNavigation.opcion)}
                isOptionEqualToValue={(option, value) => option.idOpcionNavigation.idOpcion === value.idOpcionNavigation.idOpcion}
                onChange={(event, newValue) => {
                    onInputChange({ target: { name: "idOption", value: newValue?.idOpcionNavigation.idOpcion } })
                }}
                renderOption={(props, option) => (
                    option.idRolNavigation.idRol === idRol &&
                    <MenuItem {...props} key={option.idOpcionNavigation.idOpcion}>
                        {option.idOpcionNavigation.opcion}
                    </MenuItem>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Opciones"
                        error={!!idOptionValid && formSubmitted}
                        helperText={formSubmitted ? idOptionValid : null}
                        size="small"
                        fullWidth
                    />
                )}
            />
        </ModalForm>
    )
}
