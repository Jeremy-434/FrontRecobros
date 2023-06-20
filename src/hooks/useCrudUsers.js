import { useDispatch } from 'react-redux';
import { useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from '../store/auth/UserAccount/accountApi';
import { checkingProgress, handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudUsers = () => {

    const dispatch = useDispatch();

    const { data, error, isLoading, refetch } = useGetUsersQuery();
    const users = data ?? [];

    const [updateUser] = useUpdateUserMutation();

    const upgradeUser = async (user = {}) => {

        if (!user) return;

        dispatch(checkingProgress());

        await updateUser(user)
            .then((res) => {
                dispatch(setMessage({
                    text: 'El usuario se guardo correctamente',
                    severity: 'success'
                }))
                dispatch(handleMessageOpen());
                refetch();
            })
            .catch((error) => {
                dispatch(setMessage({
                    text: 'El usuario no se guardo correctamente',
                    severity: 'error'
                }))
                dispatch(handleMessageOpen());
            })
    }

    const [deleteUser] = useDeleteUserMutation();
    const removeUser = async(id) => {

        if (!id) return;

        dispatch(checkingProgress());

        await deleteUser(id)
        .then((res) => {
            dispatch(setMessage({
                text: 'El usuario se elimino correctamente',
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        })
        .catch((error) => {
            dispatch(setMessage({
                text: 'El usuario no se elimino correctamente',
                severity: 'error'
            }));
        });
    }

    return {
        //* Propiedades
        users,
        error,
        isLoading,

        //* Metodos
        upgradeUser,
        removeUser
    }
}