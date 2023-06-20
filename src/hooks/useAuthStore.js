import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useGetUsersQuery, useLoginUserMutation, useRegisterUserMutation, useRenewTokenQuery } from '../store/auth/UserAccount/accountApi';
import { clearErrorMessage, onCheckingCredentials, onLogin, onLogout } from '../store/auth/authSlice';
import { checkingProgress, handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useAuthStore = () => {

    const { refetch } = useGetUsersQuery();
    const { data, isFetching, error } = useRenewTokenQuery();
    const renew = data ?? {};

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    //* LOGIN
    const [loginUser] = useLoginUserMutation();
    const startLogin = async ({ user, password }) => {

        dispatch(onCheckingCredentials());

        try {

            await loginUser({
                "usuario": user,
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

    //* Register or Create User
    const [registerUser] = useRegisterUserMutation();
    const starRegister = async ({ user, email, password }) => {

        dispatch(checkingProgress());

        await registerUser({
            "usuario": user,
            "correo": email,
            "contraseña": password
        })
            .then((res) => {
                dispatch(setMessage({
                    text: 'Usuario creado corretamente',
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
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