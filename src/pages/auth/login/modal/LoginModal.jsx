import { ModalForm } from '../../../layout/ModalForm';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../../../hooks';
import { CheckingCredetials } from '../components/checkingCredetials';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const LoginModal = () => {

    const [forCloseModal, setForCloseModal] = useState(false);
    const { startLogin, errorMessage } = useAuthStore();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            "user": "",
            "password": "",
        }
    });

    const onSubmit = (response) => {
        startLogin(response);
        setForCloseModal(true);
    };

    useEffect(() => {
        if (errorMessage != undefined) {
            Swal.fire({
                title: 'Error en la autenticación',
                text: errorMessage,
                icon: 'error',
            });
        }
    }, [errorMessage]);


    return (
        <ModalForm
            nameButton={"Iniciar sesion"}
            function={handleSubmit(onSubmit)}
            styleIconButton={{
                variant: 'contained'
            }}
            styleButton="Iniciar sesion"
            forCloseModal={forCloseModal}
            setForCloseModal={setForCloseModal}
        >

            {/* //* Loading Component */}
            <CheckingCredetials />

            <Typography
                variant="h1"
                component="h1"
                fontSize={34}
                fontWeight={600}
                color="inherit"
                textAlign="center"
                mb={2}
            >
                LOGIN
            </Typography>

            <TextField
                label="Usuario"
                {...register("user", { required: "Escriba el usuario" })}
                error={!!errors.user}
                helperText={errors.user?.message}
                size="small"
                sx={{ mb: 2 }}
                fullWidth
            />
            <TextField
                label="Contraseña"
                type="password"
                {...register("password", { required: "Escriba la contraseña" })}
                error={!!errors.password}
                helperText={errors.password?.message}
                size="small"
                fullWidth
            />
        </ModalForm>
    )
}
