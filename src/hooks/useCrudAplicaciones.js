import { useCreateAplicacionMutation, useDeleteAplicacionMutation, useGetAplicacionesQuery, useUpdateAplicacionMutation } from '../store/apis/aplicacionesApi';

export const useCrudAplicaciones = () => {

    // * OBTENER LOS DATOS Y GUARDARLOS EN "aplicaciones"
    // const [aplicaciones, setAplicaciones] = useState([])
    const { data, error, isLoading, refetch } = useGetAplicacionesQuery();
    const aplicaciones = data ? data.response : [];

    // * GUARDAR UNA APLICACION
    const [createAplicacion] = useCreateAplicacionMutation();
    const addAplicacion = (
        nombreDeAplicacion,
        estadoDeAplicacion,
        nombreDeSegmento,
        servicio,
        aliado
    ) => {
        createAplicacion({
            "nombreAplicacion": nombreDeAplicacion,
            "estado": estadoDeAplicacion,
            "nombreSegmento": nombreDeSegmento,
            "idServicio": servicio,
            "idAliado": aliado
        }).then(() => refetch());
    }

    // * EDITAR UNA APLICACION
    const [updateAplicacion] = useUpdateAplicacionMutation();
    const editAplicaciones = (
        idAplicacion,
        nombreDeAplicacionInput,
        estadoDeAplicacionInput,
        nombreDeSegmentoInput,
        aliadoResponsableInput,
        servicioInput,
    ) => {

        // console.log(`
        // 🚀 ~ idAplicacion: ${idAplicacion}
        // 🚀 ~ nombreDeAplicacionInput: ${nombreDeAplicacionInput}
        // 🚀 ~ estadoDeAplicacionInput: ${estadoDeAplicacionInput}
        // 🚀 ~ nombreDeSegmentoInput: ${nombreDeSegmentoInput}
        // 🚀 ~ servicioInput: ${servicioInput}
        // 🚀 ~ aliadoResponsableInput: ${aliadoResponsableInput}`)

        updateAplicacion({
            idAplicacion: idAplicacion,
            nombreAplicacion: nombreDeAplicacionInput,
            estado: estadoDeAplicacionInput,
            nombreSegmento: nombreDeSegmentoInput,
            idServicio: servicioInput,
            idAliado: aliadoResponsableInput,
        }).then((res) => {
            // console.log(res);
            refetch()
        });
    };

    // * BORRAR UNA APLICACION
    const [deleteAplicacion] = useDeleteAplicacionMutation();
    const borrarAplicacion = (idAplicacion) => {
        deleteAplicacion(idAplicacion).then(() => refetch());
    }

    return {
        error,
        isLoading,
        aplicaciones,
        addAplicacion,
        editAplicaciones,
        borrarAplicacion
    }
}
