import { useDispatch } from 'react-redux';

import { useCreateAliadoMutation, useDeleteAliadoMutation, useGetAliadosQuery, useUpdateAliadoMutation } from '../store/apis/aliadosApi';
import { handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudAliados = () => {

    // * Para hacer el "dispatch" del Mensaje de confirmacion
    const dispatch = useDispatch();

    // * OBTENER LOS DATOS Y GUARDARLOS EN "aliado"
    // const [aplicaciones, setAplicaciones] = useState([])
    const { data, error, isLoading, refetch, isFetching  } = useGetAliadosQuery();
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
            "fecha": fecha ? fecha : null,
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

    // * EDITAR UN ALIADO
    const [updateAliado] = useUpdateAliadoMutation();
    const editAliado = (
        idAliado,
        nombreAliado,
        usuario,
        estado,
        correoResponsable,
        fecha
    ) => {
        updateAliado({
            "idAliado": idAliado,
            "nombreAliado": nombreAliado,
            "usuario": usuario,
            "estado": estado,
            "correoResponsable": correoResponsable,
            "fecha": fecha
        })
            .then((res) => {
                dispatch(setMessage({
                    text: `Aliado actualizado correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    };

    // * BORRAR UN ALIADO
    const [deleteAliado] = useDeleteAliadoMutation();
    const borrarAliado = (id) => {
        deleteAliado(id)
            .then((res) => {
                if (res.error) {
                    dispatch(setMessage({
                        text: `Lo sentimos, no se pudo borrar el Aliado. 
                        Verifique que no se este usando`,
                        severity: 'error'
                    }));
                    dispatch(handleMessageOpen());
                } else {
                    dispatch(setMessage({
                        text: `Aliado borrado correctamente`,
                        severity: 'success'
                    }));
                    dispatch(handleMessageOpen());
                }
                refetch();
            });
    }

    return {
        error,
        aliados,
        isLoading,
        addAliado,
        editAliado,
        borrarAliado
    }
}