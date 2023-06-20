import { Add } from '@mui/icons-material';
import { ModalForm } from '../../../layout';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useCrudOptions } from '../../../../hooks';

export const AddOption = () => {
  const [forCloseModal, setForCloseModal] = useState(false);
  const {addOption} = useCrudOptions();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      "option": "",
      "description": "",
    }
  });

  const onSubmit = ({ option, description }) => {
    addOption({ option, description });
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
        label="Opción"
        {...register("option", { required: "Opcion requerida" })}
        error={!!errors.option}
        helperText={errors.option?.message}
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
