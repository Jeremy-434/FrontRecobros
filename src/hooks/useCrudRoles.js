import { useDispatch } from 'react-redux';
import { useCreateRoleMutation, useDeleteRoleMutation, useGetRolesQuery, useUpdateRoleMutation } from '../store/apis';
import { checkingProgress, handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudRoles = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, refetch } = useGetRolesQuery();
    const roles = data ? data : [];

    const [createRole] = useCreateRoleMutation();
    const addRole = async ({role, description}) => {
        dispatch(checkingProgress());

        await createRole({
            rol: role,
            descripcion: description
        }).then((res) => {
            dispatch(setMessage({
                text: `Rol creado correctamente`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
    }

    const [updateRole] = useUpdateRoleMutation();
    const editRole = async ({idRole, role, description}) => {
        dispatch(checkingProgress());

        await updateRole({
            idRol: idRole,
            rol: role,
            descripcion: description
        }).then((res) => {
            dispatch(setMessage({
                text: `Rol actualizado correctamente`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
    };

    const [deleteRole] = useDeleteRoleMutation();
    const removeRole = async (idRol) => {
        dispatch(checkingProgress());

        await deleteRole(idRol)
            .then((res) => {
                dispatch(setMessage({
                    text: `Rol borrado correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    }

    return {
        error,
        isLoading,
        roles,
        addRole,
        editRole,
        removeRole
    }
}
