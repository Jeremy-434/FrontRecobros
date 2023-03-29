import { useDispatch } from 'react-redux';
import { useCreateCierreMesMutation, useGetCierreMesQuery, useDeleteCierreMesMutation } from '../store/apis';
import { handleMessageOpen, setMessage } from '../store/slices/messageCreated';

export const useCrudCierreMes = () => {

    // * Para hacer el "dispatch" del Mensaje de confirmacion
    const dispatch = useDispatch();

    // * OBTENER LOS DATOS Y GUARDARLOS EN "CierreMes"
    const { data, error, isLoading, refetch } = useGetCierreMesQuery();
    const cierreMes = data ? data : [];

    // * GUARDAR UN REGISTRO DE CIERRE DE MES
    const [createCierreMes] = useCreateCierreMesMutation();
    const addCierreMes = async ({
        mes,
        anio,
        usuario,
        fechaServidor,
        estado,
    }) => {
        await createCierreMes({
            "mes": mes,
            "anio": anio,
            "estado": estado,
            "usuario": usuario,
            "fechaServidor": fechaServidor,
        })
            .then((res) => {
                console.log("🚀 ~ res:", res)
                dispatch(setMessage({
                    text: `Mes cerrado y su registro creado correctamente`,
                    severity: 'success'
                }));
                dispatch(handleMessageOpen());
                refetch();
            });
    }

    // * BORRAR UN REGISTRO DE CIERRE DE MES
    const [deleteCierreMes] = useDeleteCierreMesMutation();
    const borrarCierreMes = async (id) => {
        await deleteCierreMes(id)
            .then((res) => {
                if (res.error) {
                    dispatch(setMessage({
                        text: `Lo sentimos, no se pudo reabrir mes`,
                        severity: 'error'
                    }));
                    dispatch(handleMessageOpen());
                } else {
                    dispatch(setMessage({
                        text: `El mes esta nuevamente abierto`,
                        severity: 'success'
                    }));
                    dispatch(handleMessageOpen());
                }
                refetch();
            });
    }

    return {
        cierreMes,
        error,
        isLoading,
        addCierreMes,
        borrarCierreMes
    }
}