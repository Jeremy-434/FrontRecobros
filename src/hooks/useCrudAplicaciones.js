import { useDispatch } from 'react-redux';
import { useCreateAplicacionMutation, useDeleteAplicacionMutation, useGetAplicacionesQuery, useUpdateAplicacionMutation } from '../store/apis/aplicacionesApi';
import { checkingProgress, handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudAplicaciones = () => {

    // * Para hacer el "dispatch" del Mensaje de confirmacion
    const dispatch = useDispatch();

    // * OBTENER LOS DATOS Y GUARDARLOS EN "aplicaciones"
    // const [aplicaciones, setAplicaciones] = useState([])
    const { data, error, isLoading, refetch } = useGetAplicacionesQuery();
    const aplicaciones = data ? data : [];

    // * GUARDAR UNA APLICACION
    const [createAplicacion] = useCreateAplicacionMutation();
    const addAplicacion = async (
        nombreDeAplicacion,
        servicio,
    ) => {

        dispatch(checkingProgress());

        await createAplicacion({
            "nombreAplicacion": nombreDeAplicacion,
            "idServicio": servicio
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
    const editAplicaciones = async (
        idAplicacion,
        nombreDeAplicacionInput,
        servicioInput,
    ) => {

        dispatch(checkingProgress());

        await updateAplicacion({
            idAplicacion: idAplicacion,
            nombreAplicacion: nombreDeAplicacionInput,
            idServicio: servicioInput,
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
    const borrarAplicacion = async (idAplicacion) => {

        dispatch(checkingProgress());

        await deleteAplicacion(idAplicacion)
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
