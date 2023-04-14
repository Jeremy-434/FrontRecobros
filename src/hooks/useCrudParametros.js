import { useDispatch } from 'react-redux';
import { useGetFirstParametroQuery, useUpdateParametroMutation } from '../store/apis';

import { checkingProgress, handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudParametros = () => {

    // * Para hacer el "dispatch" del Mensaje de confirmacion
    const dispatch = useDispatch();

    // * OBTENER EL DATO DE LA PRIMERA FILA Y GUARDARLO EN "parametros"
    const { data, error, isLoading, refetch, isFetching } = useGetFirstParametroQuery();
    const parametros = data ?? [];

    // * GUARDAR UN PARAMETRO
    const [updateParametro] = useUpdateParametroMutation();
    const editarParametro = async ({
        idParametro,
        rutaArchivosProcesar,
        numMesesEliminacionHistorico,
        numColumnasArchivo,
        bytesMaxArchivo,
    }) => {

        dispatch(checkingProgress());

        await updateParametro({
            "idParametro": idParametro,
            "rutaArchivosProcesar": rutaArchivosProcesar ?? null,
            "numMesesEliminacionHistorico": numMesesEliminacionHistorico,
            "numColumnasArchivo": numColumnasArchivo,
            "bytesMaxArchivo": bytesMaxArchivo,
        })
            .then((res) => {
                dispatch(setMessage({
                    text: `Parametros configurados correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    }

    return {
        error,
        parametros,
        isLoading,
        editarParametro
    }
}