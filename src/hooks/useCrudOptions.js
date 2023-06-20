import { useDispatch } from 'react-redux';
import { useGetOptionsQuery, useCreateOptionMutation, useUpdateOptionMutation, useDeleteOptionMutation } from '../store/apis';
import { checkingProgress, handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudOptions = () => {
    const dispatch = useDispatch();
    
    const { data, error, isLoading, refetch } = useGetOptionsQuery();
    const options = data ? data : [];

    const [createOption] = useCreateOptionMutation();
    const addOption = async ({option, description}) => {
        dispatch(checkingProgress());

        await createOption({
            opcion: option,
            descripcion: description
        }).then((res) => {
            console.log("🚀 ~ res:", res);
            dispatch(setMessage({
                text: `Opción creada correctamente`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
    }

    const [updateOption] = useUpdateOptionMutation();
    const editOption = async ({idOption, option, description}) => {
        dispatch(checkingProgress());

        await updateOption({
            idOpcion: idOption,
            opcion: option,
            descripcion: description
        }).then((res) => {
            console.log("🚀 ~ res:", res)
            dispatch(setMessage({
                text: `Opción actualizada correctamente`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
    };

    const [deleteOption] = useDeleteOptionMutation();
    const removeOption = async (id) => {
        dispatch(checkingProgress());

        await deleteOption(id)
            .then((res) => {
                dispatch(setMessage({
                    text: `Opción borrada correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    }

    return {
        error,
        isLoading,
        options,
        addOption,
        editOption,
        removeOption
    }
}
