import { useDispatch } from 'react-redux';

import { useCreateControlArchivosMutation, useGetControlArchivosQuery } from '../store/apis/controlArchivosApi';
import { handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudControlArchivos = () => {

    // * Para hacer el "dispatch" del Mensaje de confirmacion
    const dispatch = useDispatch();

    // * OBTENER LOS DATOS Y GUARDARLOS EN "controlArchivos"
    const { data, error, isLoading, refetch, isFetching } = useGetControlArchivosQuery();
    const controlArchivos = data ? data : [];

    // * GUARDAR UN CONTROL DE ARCHIVO
    const [createControlArchivo] = useCreateControlArchivosMutation();
    const addControlArchivo = ({
        nombreArchivo,
        usuario,
        estado,
        mes,
        anio,
        aliado,
        fechaServidor
    }) => {
        createControlArchivo({
            "nombreArchivo": nombreArchivo,
            "usuario": usuario,
            "estado": estado,
            "mes": mes,
            "anio": anio,
            "idAliado": aliado,
            "fechaServidor": fechaServidor,
        })
            .then((res) => {
                dispatch(setMessage({
                    text: `Control de archivo creado correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    }

    return {
        error,
        controlArchivos,
        isLoading,
        addControlArchivo
    }
}