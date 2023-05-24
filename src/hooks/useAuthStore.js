import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLoginUserMutation, useRegisterUserMutation, useRenewTokenQuery } from '../store/auth/UserAccount/accountApi';
import { clearErrorMessage, onCheckingCredentials, onLogin, onLogout } from '../store/auth/authSlice';
import { handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useAuthStore = () => {

    const [loginUser] = useLoginUserMutation();
    const [registerUser] = useRegisterUserMutation();
    const { data, isFetching, error } = useRenewTokenQuery();
    const renew = data ?? {};

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    //* LOGIN
    const startLogin = async ({ user, password }) => {

        dispatch(onCheckingCredentials());

        try {

            await loginUser({
                "nombreUsuario": user,
                "correo": "",
                "contraseña": password
            })
                .then((res) => {
                    if (res?.error) {
                        // * Mensaje de error en el modal
                        dispatch(onLogout('Credenciales incorrectas'));
                        setTimeout(() => {
                            dispatch(clearErrorMessage());
                        }, 1000);

                        // ! Mensaje de error, con <MessagesComponent/>
                        // dispatch(setMessage({
                        //     text: `${res?.error?.data}`,
                        //     severity: 'error',
                        // }))
                        // dispatch(handleMessageOpen());
                        return;
                    }

                    localStorage.setItem('token', res?.data?.token);
                    localStorage.setItem('token-init-date', new Date().getTime());

                    dispatch(onLogin(res?.data?.user));

                }).catch(error => {
                    console.error("🚀 ~ error:", error);
                });

        } catch (error) {
            console.error("🚀 ~ error:", error);
        }
    }

    const starRegister = async ({ user, admin, password }) => {

        dispatch(onCheckingCredentials());

        try {
            await registerUser({
                "nombreUsuario": user,
                "administrador": admin,
                "correo": "",
                "contraseña": password
            })
                .then((res) => {
                    console.log("🚀 ~ res:", res);

                });
        } catch (error) {
            console.error("🚀 ~ error:", error);
        }
    }

    const checkAuthToken = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return dispatch(onLogout());

            const dataRenewToken = renew;
            if (Object.keys(dataRenewToken).length === 0) return dispatch(onLogout());

            localStorage.setItem('token', dataRenewToken?.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin(dataRenewToken?.user));

        } catch (error) {
            console.error("🚀 ~ error:", error);
            localStorage.clear();
            dispatch(onLogout())
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    return {
        //* Propiedades
        errorMessage,
        isFetching,
        status,
        user,

        //* Metodos
        checkAuthToken,
        starRegister,
        startLogin,
        startLogout,
    }
}