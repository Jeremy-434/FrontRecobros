import { useAccount, useMsal } from '@azure/msal-react';
import { Button } from '@mui/material';

export const ButtonLogin = () => {
    const { instance } = useMsal();
    const account = useAccount();

    const handleLogin = () => {
        instance.loginRedirect();
    };

    const handleLogout = () => {
        instance.logout();
    };
    return (
        <>
            {!account && <Button variant="contained" onClick={handleLogin}>Iniciar sesión</Button>}
            {account && <Button variant="contained" onClick={handleLogout}>Cerrar sesión</Button>}
        </>
    )
}
