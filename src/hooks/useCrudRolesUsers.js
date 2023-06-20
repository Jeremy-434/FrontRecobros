import { useDispatch } from 'react-redux';
import { useGetRolesUsersQuery, useGetByUserIdQuery, useGetByRoleIdQuery, useCreateRoleUserMutation, useDeleteRoleUserMutation } from '../store/apis';
import { checkingProgress, handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudRolesUsers = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, refetch } = useGetRolesUsersQuery();
    const rolesUsers = data ? data : [];

    const getByUserId = (id) => {
        const { data, error, isLoading } = useGetByUserIdQuery(id);
        return { data, error, isLoading };
    }

    const getByRoleId = (id) => {
        const { data, error, isLoading } = useGetByRoleIdQuery(id);
        return { data, error, isLoading };
    }

    const [createRoleUser] = useCreateRoleUserMutation();
    const addRoleUser = async ({ userId, roleId }) => {
        dispatch(checkingProgress());

        await createRoleUser({
            idUsuario: userId,
            idRol: roleId
        }).then((res) => {
            dispatch(setMessage({
                text: `Role agregado correctamente al usuario`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
    }

    const [deleteRoleUser] = useDeleteRoleUserMutation();
    const removeRoleUser = async ({ userId, roleId }) => {
        dispatch(checkingProgress());

        await deleteRoleUser({
            idUsuario: userId,
            idRol: roleId
        }).then((res) => {
            dispatch(setMessage({
                text: `Rol eliminado correctamente del usuario`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
    }

    return {
        error,
        isLoading,
        rolesUsers,
        getByUserId,
        getByRoleId,
        addRoleUser,
        removeRoleUser
    }
}
