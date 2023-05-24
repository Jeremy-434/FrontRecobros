import { useAccount, useMsal } from '@azure/msal-react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

export const ButtonLogin = () => {
    const { instance } = useMsal();
    const account = useAccount();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            item1: "",
            item2: "",
        }
    });

    const handleLogin = () => {
        // instance.loginRedirect();
        console.log("LOGIN");
    };

    const handleLogout = () => {
        instance.logout();
    };
    return (
        <>
            {!account &&
                <Button
                    variant="contained"
                    onClick={handleLogin}
                >
                    Iniciar sesión
                </Button>
            }
            {account &&
                <Button
                    variant="contained"
                    onClick={handleLogout}
                >
                    Cerrar sesión
                </Button>
            }
        </>
    )
}
