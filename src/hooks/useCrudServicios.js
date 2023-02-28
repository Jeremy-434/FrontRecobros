import { useCreateServicioMutation, useDeleteServicioMutation, useGetServiciosQuery, useUpdateServicioMutation } from '../store/apis/serviciosApi';

export const useCrudServicios = () => {

    // * OBTENER LOS DATOS Y GUARDARLOS EN "aplicaciones"
    // const [aplicaciones, setAplicaciones] = useState([])
    const { data, error, isLoading, refetch } = useGetServiciosQuery();
    const servicios = data ? data.response : [];

    // * GUARDAR UNA SERVICIO
    const [createServicio] = useCreateServicioMutation();
    const addServicio = (
        nombreServicioInput,
        descripcionInput,
        driverInput,
        claseActividadInput,
        claseCostoInput,
        porcentajeComparacionInput,
        responsableReporteInput,
    ) => {
        createServicio({
            "nombreServicio": nombreServicioInput,
            "descripcion": descripcionInput,
            "driver": driverInput,
            "claseActividad": claseActividadInput,
            "claseCosto": claseCostoInput,
            "porcentajeComparacion": porcentajeComparacionInput,
            "responsableReporte": responsableReporteInput,
        }).then( () => refetch());
    }

    // * EDITAR UNA APLICACION
    const [updateServicio] = useUpdateServicioMutation();
    const editServicio = (
        idServicio,
        nombreServicio,
        descripcion,
        driver,
        claseActividad,
        claseCosto,
        porcentajeComparacion,
        responsableReporte,
    ) => {
        updateServicio({
            "idServicio": idServicio,
            "nombreServicio": nombreServicio,
            "descripcion": descripcion,
            "driver": driver,
            "claseActividad": claseActividad,
            "claseCosto": claseCosto,
            "porcentajeComparacion": porcentajeComparacion,
            "responsableReporte": responsableReporte
        }).then( () => refetch() );
    };

    // * BORRAR UN SERVICIO
    const [deleteServicio] = useDeleteServicioMutation();
    const borrarServicio = (idAplicacion) => {
        deleteServicio(idAplicacion).then( () => refetch());
    }

    return {
        error,
        isLoading,
        servicios,
        addServicio,
        editServicio,
        borrarServicio
    }
}
