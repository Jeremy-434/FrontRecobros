import { useDispatch } from 'react-redux';
import { useCreateServicioMutation, useDeleteServicioMutation, useGetServiciosQuery, useUpdateServicioMutation } from '../store/apis/serviciosApi';
import { handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudServicios = () => {

    // * Para hacer el "dispatch" del Mensaje de confirmacion
    const dispatch = useDispatch();

    // * OBTENER LOS DATOS Y GUARDARLOS EN "servicios"
    // const [aplicaciones, setAplicaciones] = useState([])
    const { data, error, isLoading, refetch } = useGetServiciosQuery();
    const servicios = data ? data : [];

    // * GUARDAR UN SERVICIO
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
        })
            .then((res) => {
                dispatch(setMessage({
                    text: `Servicio creado correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    }

    // * EDITAR UN SERVICIO
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
        })
            .then((res) => {
                dispatch(setMessage({
                    text: `Servicio actualizado correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    };

    // * BORRAR UN SERVICIO
    const [deleteServicio] = useDeleteServicioMutation();
    const borrarServicio = (id) => {
        deleteServicio(id)
            .then((res) => {
                if (res.error) {
                    dispatch(setMessage({
                        text: `Lo sentimos, no se pudo borrar el servicio. 
                        Verifique que no se este usando en ninguna aplicacion`,
                        severity: 'error'
                    }));
                    dispatch(handleMessageOpen());
                } else {
                    dispatch(setMessage({
                        text: `Servicio borrado correctamente`,
                        severity: 'success'
                    }));
                    dispatch(handleMessageOpen());
                }
                refetch();
            });
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
