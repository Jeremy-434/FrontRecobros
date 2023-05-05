import { useDispatch } from 'react-redux';

import { useCreateControlArchivosMutation, useGetControlArchivosQuery, useUpdateControlArchivosMutation } from '../store/apis/controlArchivosApi';
import { checkingProgress, handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudControlArchivos = () => {

    // * Para hacer el "dispatch" del Mensaje de confirmacion
    const dispatch = useDispatch();

    // * OBTENER LOS DATOS Y GUARDARLOS EN "controlArchivos"
    const { data, error, isLoading, refetch, isFetching } = useGetControlArchivosQuery();
    const controlArchivos = data ? data : [];

    // * GUARDAR UN CONTROL DE ARCHIVO
    const [createControlArchivo] = useCreateControlArchivosMutation();
    const addControlArchivo = async ({
        nombreArchivo,
        usuario,
        estado,
        mes,
        anio,
        aliado,
        fechaServidor
    }) => {

        dispatch(checkingProgress());

        await createControlArchivo({
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

    const [updateControlArchivo] = useUpdateControlArchivosMutation();
    const editControlArchivo = async ({
        idControlArchivo,
        nombreArchivo,
        usuario,
        estado,
        mes,
        anio,
        aliado,
        fechaServidor
    }) => {
        console.log("🚀 ~ nombreArchivo:", nombreArchivo)
        console.log("🚀 ~ mes:", mes)
        console.log("🚀 ~ fechaServidor:", fechaServidor)
        console.log("🚀 ~ idControlArchivo:", idControlArchivo)

        dispatch(checkingProgress());

        await updateControlArchivo({
            "idControlArchivo": idControlArchivo,
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
                    text: `Control de archivo actualizado correctamente`,
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
        addControlArchivo,
        editControlArchivo
    }
}