import { useDispatch } from 'react-redux';
import { useCreatePermissionMutation, useDeletePermissionMutation, useGetPermissionsQuery, useUpdatePermissionMutation } from '../store/apis';
import { checkingProgress, handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudPermissions = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, refetch } = useGetPermissionsQuery();
    const permissions = data ? data : [];

    const [createPermission] = useCreatePermissionMutation();
    const addPermission = async ({idRole, idOption}) => {
        dispatch(checkingProgress());

        await createPermission({
            idRol: idRole,
            idOpcion: idOption
        }).then((res) => {
            dispatch(setMessage({
                text: `Permiso creado correctamente`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
    }

    const [updatePermission] = useUpdatePermissionMutation();
    const editPermission = async ({idPermission, idRole, idOption}) => {
        dispatch(checkingProgress());

        await updatePermission({
            idPermisos: idPermission,
            idRol: idRole,
            idOpcion: idOption
        }).then((res) => {
            dispatch(setMessage({
                text: `Permiso actualizado correctamente`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
    };

    const [deletePermission] = useDeletePermissionMutation();
    const removePermission = async (id) => {
        dispatch(checkingProgress());

        await deletePermission(id)
            .then((res) => {
                dispatch(setMessage({
                    text: `Permiso borrado correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    }

    return {
        error,
        isLoading,
        permissions,
        addPermission,
        editPermission,
        removePermission
    }
}
