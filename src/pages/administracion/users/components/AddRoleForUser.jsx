import { Edit } from '@mui/icons-material';
import { ModalForm } from '../../../layout';
import { Autocomplete, MenuItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useCrudRoles, useCrudRolesUsers, useForm } from '../../../../hooks';

const formData = {
    'idRol': 0,
    'action': '',
}

const formValidations = {
    idRol: [(value) => value >= 1, 'Selecciona algun rol'],
    action: [(value) => value.length >= 1, 'Selecciona alguna accion'],
}

export const AddRoleForUser = ({ user }) => {

    const [forCloseModal, setForCloseModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { roles } = useCrudRoles();
    const { addRoleUser, removeRoleUser } = useCrudRolesUsers();

    const {
        idRol, action,
        idRolValid, actionValid,
        onInputChange, onResetForm, isFormValid
    } = useForm(formData, formValidations);

    const onSubmit = () => {
        setFormSubmitted(true);

        if (!isFormValid) return;

        switch (action) {
            case 'Agregar':
                addRoleUser({ userId: user?.idUsuario, roleId: idRol });
                setForCloseModal(true);
            case 'Eliminar':
                removeRoleUser({ userId: user?.idUsuario, roleId: idRol });
                setForCloseModal(true);
            default:
                break;
        }

    }

    return (
        <ModalForm
            function={onSubmit}
            nameButton="Realizar"
            styleButton={<Edit sx={{ fontSize: 16 }} />}
            title={`Editar roles de ${user?.usuario}`}
            forCloseModal={forCloseModal}
            setForCloseModal={setForCloseModal}
        >
            <Typography variant="h4" color="inherit" mb={2} width={300}>
                Editar roles
            </Typography>
            <TextField
                label="Usuario"
                value={user.usuario}
                size="small"
                fullWidth
                disabled
                sx={{ mb: 2 }}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo-servicios"
                options={roles}
                getOptionLabel={(option) => String(option.rol)}
                isOptionEqualToValue={(option, value) => option.idRol === value.idRol}
                onChange={(event, newValue) => {
                    onInputChange({ target: { name: "idRol", value: newValue?.idRol } })
                }}
                renderOption={(props, option) => (
                    <MenuItem {...props} key={option.idRol}>
                        {option.rol}
                    </MenuItem>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Roles"
                        error={!!idRolValid && formSubmitted}
                        helperText={formSubmitted ? idRolValid : null}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                )}
            />

            <TextField
                label="Acciones"
                name='action'
                value={action}
                onChange={onInputChange}
                error={!!actionValid && formSubmitted}
                helperText={formSubmitted ? actionValid : null}
                size="small"
                fullWidth
                select
            >
                <MenuItem value={'Agregar'}>Agregar</MenuItem>
                <MenuItem value={'Eliminar'}>Eliminar</MenuItem>
            </TextField>
        </ModalForm>
    )
}
