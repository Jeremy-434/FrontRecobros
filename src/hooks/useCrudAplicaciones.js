import { useEffect, useState } from 'react';
import { useDeleteAplicacionMutation, useGetAplicacionesQuery } from '../store/apis/aplicacionesApi';

export const useCrudAplicaciones = () => {

    //OBTENER LOS DATOS Y GUARDARLOS EN UN ESTADO "aplicaciones"
    const [aplicaciones, setAplicaciones] = useState([])
    const { data, error, isLoading } = useGetAplicacionesQuery();
    useEffect(() => {
        if (data) {
            setAplicaciones(data.response)
        }
    }, [data])

    // //GUARDAR UNA APLICACION
    // const [createAplicacion] = useCreateAplicacionMutation();
    // const agregarAplicacion = () => {
    //     createAplicacion({
    //         "nombreDeAplicación": nombreDeAplicación,
    //         "estadoDeAplicación": estadoDeAplicacion,
    //         "nombreDeSegmento": nombreDeSegmento,
    //         "aliadoResponsable": aliadoResponsable,
    //         "idServicio": servicio,
    //     });
    //     onResetForm();
    // }

    // //EDITAR UNA APLICACION
    // const [updateAplicacion] = useUpdateAplicacionMutation();
    // const editarAplicaciones = () => {
    //     updateAplicacion({
    //         "idAplicaciones": idAplicacion,
    //         "nombreDeAplicación": nombreDeAplicacionInput,
    //         "estadoDeAplicación": estadoDeAplicacionInput,
    //         "nombreDeSegmento": nombreDeSegmentoInput,
    //         "aliadoResponsable": aliadoResponsableInput,
    //         "idServicio": servicioInput
    //     });
    // }

    //BORRAR UNA APLICACION
    const [deleteAplicacion] = useDeleteAplicacionMutation();
    const borrarAplicacion = (idAplicacion) => {
        deleteAplicacion(idAplicacion);
    }
    return {
        data,
        error,
        isLoading,
        aplicaciones,
        // agregarAplicacion,
        // editarAplicaciones,
        borrarAplicacion
    }
}
