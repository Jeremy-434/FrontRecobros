import { LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { useCrudAliados, useCrudAplicaciones, useCrudControlArchivos, useCrudParametros, useCrudServicios } from '../../hooks';

export const LoadingComponent = () => {

    const { status } = useSelector(state => state.messageCreated)

    const { isLoading: isLoadingServicios } = useCrudServicios();
    const { isLoading: isLoadingAplicaciones } = useCrudAplicaciones();
    const { isLoading: isLoadingAliados } = useCrudAliados();
    const { isLoading: isLoadingControlArchivos } = useCrudControlArchivos();
    const { isLoading: isLoadingParametros } = useCrudParametros();
    const isLoadingBool = isLoadingServicios || isLoadingAplicaciones || isLoadingAliados || isLoadingControlArchivos || isLoadingParametros || (status == 'inProgress')
    return (
        <>
            {
                (
                    isLoadingBool
                ) && <LinearProgress color="success" />
            }
        </>
    )
}
