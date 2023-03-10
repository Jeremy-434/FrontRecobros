import { useDispatch } from 'react-redux';
import { useCreateAplicacionMutation, useDeleteAplicacionMutation, useGetAplicacionesQuery, useUpdateAplicacionMutation } from '../store/apis/aplicacionesApi';
import { handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudAplicaciones = () => {

    // * Para hacer el "dispatch" del Mensaje de confirmacion
    const dispatch = useDispatch();

    // * OBTENER LOS DATOS Y GUARDARLOS EN "aplicaciones"
    // const [aplicaciones, setAplicaciones] = useState([])
    const { data, error, isLoading, refetch } = useGetAplicacionesQuery();
    const aplicaciones = data ? data : [];

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
        }).then((res) => {
            dispatch(setMessage({
                text: `Aplicacion creada correctamente`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
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
            dispatch(setMessage({
                text: `Aplicacion actualizada correctamente`,
                severity: 'success'
            }));
            dispatch(handleMessageOpen());
            refetch();
        });
    };

    // * BORRAR UNA APLICACION
    const [deleteAplicacion] = useDeleteAplicacionMutation();
    const borrarAplicacion = (idAplicacion) => {
        deleteAplicacion(idAplicacion)
            .then((res) => {
                dispatch(setMessage({
                    text: `Aplicacion borrada correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
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
