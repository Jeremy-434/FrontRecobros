import { useDispatch } from 'react-redux';
import { checkingProgress, handleMessageOpen, setMessage } from '../../slices/messageCreated';
import { useGetUsersQuery, useRenewTokenQuery, useUpdateUserMutation } from './accountApi';

export const loadingUsers = () => {

    const { data, error, isLoading } = useGetUsersQuery();
    const users = data ?? [];

    return {
        users,
        error,
        isLoading
    }
}

export const updateUserAccount = () => {

    const [updateUser] = useUpdateUserMutation();
    const dispatch = useDispatch();

    const update = async (user = {}) => {
        console.log("🚀 ~ user:", user)
        if (!user) return;

        dispatch(checkingProgress());

        await updateUser(user)
            .then((res) => {
                console.log(res);
                dispatch(setMessage({
                    text: 'El usuario se guardo correctamente',
                    severity: 'success'
                }))
                dispatch(handleMessageOpen());
            })
            .catch((error) => {
                console.error(error);
                dispatch(setMessage({
                    text: 'El usuario no se guardo correctamente',
                    severity: 'error'
                }))
                dispatch(handleMessageOpen());
            })
    }

    return {
        update
    }
}