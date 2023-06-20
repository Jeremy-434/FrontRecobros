import { Add } from '@mui/icons-material';
import { ModalForm } from '../../../layout';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAuthStore } from '../../../../hooks';

export const AddUser = () => {
  const [forCloseModal, setForCloseModal] = useState(false);
  const { starRegister } = useAuthStore();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      "user": "",
      "email": "",
      "password": "",
    }
  });

  const onSubmit = ({ user, email, password }) => {
    starRegister({ user, email, password });
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
        label="Usuario"
        {...register("user", { required: "Usuario requerido" })}
        error={!!errors.user}
        helperText={errors.user?.message}
        size="small"
        sx={{ mb: 2 }}
        fullWidth
      />
      <TextField
        label="Correo"
        {...register("email", { required: "Correo requerido" })}
        error={!!errors.email}
        helperText={errors.email?.message}
        size="small"
        sx={{ mb: 2 }}
        fullWidth
      />
      <TextField
        label="Contraseña"
        type="password"
        {...register("password", { required: "Contraseña requerida" })}
        error={!!errors.password}
        helperText={errors.password?.message}
        size="small"
        sx={{ mb: 2 }}
        fullWidth
      />
    </ModalForm>
  )
}
