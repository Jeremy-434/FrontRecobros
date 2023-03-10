import { useDispatch } from 'react-redux';
import { useCreateAliadoMutation, useGetAliadosQuery } from '../store/apis/aliadosApi';

export const useCrudAliados = () => {

    // * Para hacer el "dispatch" del Mensaje de confirmacion
    const dispatch = useDispatch();

    // * OBTENER LOS DATOS Y GUARDARLOS EN "aliado"
    // const [aplicaciones, setAplicaciones] = useState([])
    const { data, error, isLoading, refetch } = useGetAliadosQuery();
    const aliados = data ? data : [];

    // * GUARDAR UN ALIADO
    const [createAliado] = useCreateAliadoMutation();
    const addAliado = (
        nombreAliado,
        usuario,
        estado,
        correoResponsable,
        fecha,
    ) => {
        createAliado({
            "nombreAliado": nombreAliado,
            "usuario": usuario,
            "estado": estado,
            "correoResponsable": correoResponsable,
            "fecha": fecha,
        })
            .then((res) => {
                dispatch(setMessage({
                    text: `Aliado creado correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    }

    // // * EDITAR UN ALIADO
    // const [updateServicio] = useUpdateServicioMutation();
    // const editServicio = (
    //     idServicio,
    //     nombreServicio,
    //     descripcion,
    //     driver,
    //     claseActividad,
    //     claseCosto,
    //     porcentajeComparacion,
    //     responsableReporte,
    // ) => {
    //     updateServicio({
    //         "idServicio": idServicio,
    //         "nombreServicio": nombreServicio,
    //         "descripcion": descripcion,
    //         "driver": driver,
    //         "claseActividad": claseActividad,
    //         "claseCosto": claseCosto,
    //         "porcentajeComparacion": porcentajeComparacion,
    //         "responsableReporte": responsableReporte
    //     })
    //         .then((res) => {
    //             dispatch(setMessage({
    //                 text: `Servicio actualizado correctamente`,
    //                 severity: 'success'
    //             }));
    //             dispatch(handleMessageOpen());
    //             refetch();
    //         });
    // };

    // // * BORRAR UN ALIADO
    // const [deleteServicio] = useDeleteServicioMutation();
    // const borrarServicio = (idAplicacion) => {
    //     deleteServicio(idAplicacion)
    //         .then((res) => {
    //             if (res.error) {
    //                 dispatch(setMessage({
    //                     text: `Lo sentimos, no se pudo borrar el servicio. 
    //                     Verifique que no se este usando en ninguna aplicacion`,
    //                     severity: 'error'
    //                 }));
    //                 dispatch(handleMessageOpen());
    //             } else {
    //                 dispatch(setMessage({
    //                     text: `Servicio borrado correctamente`,
    //                     severity: 'success'
    //                 }));
    //                 dispatch(handleMessageOpen());
    //             }
    //             refetch();
    //         });
    // }

    return {
        error,
        aliados,
        isLoading,
        addAliado,
    }
}