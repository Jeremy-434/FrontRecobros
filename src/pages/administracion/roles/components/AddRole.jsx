import { Add } from '@mui/icons-material';
import { ModalForm } from '../../../layout';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useCrudRoles } from '../../../../hooks';

export const AddRole = () => {
  const [forCloseModal, setForCloseModal] = useState(false);
  const {addRole} = useCrudRoles();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      "role": "",
      "description": "",
    }
  });

  const onSubmit = ({ role, description }) => {
    console.log("🚀 ~ { role, description }:", { role, description })
    addRole({ role, description });
    setForCloseModal(true);
  }

  return (
    <ModalForm
      function={handleSubmit(onSubmit)}
      nameButton={"agregar"}
      styleButton={<Add />}
      title="Agregar"
      forCloseModal={forCloseModal}
      setForCloseModal={setForCloseModal}
    >
      <Typography variant="h4" color="inherit" mb={2}>
        Agregar usuario
      </Typography>
      <TextField
        label="Rol"
        {...register("role", { required: "Rol requerido" })}
        error={!!errors.role}
        helperText={errors.role?.message}
        size="small"
        sx={{ mb: 2 }}
        fullWidth
      />
      <TextField
        label="Descripción"
        {...register("description", { required: "Descripcion requerida" })}
        error={!!errors.description}
        helperText={errors.description?.message}
        size="small"
        sx={{ mb: 2 }}
        fullWidth
      />
    </ModalForm>
  )
}
