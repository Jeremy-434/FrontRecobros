import { LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { useCrudAliados, useCrudAplicaciones, useCrudControlArchivos, useCrudServicios } from '../../hooks';

export const LoadingComponent = () => {

    const { status } = useSelector(state => state.messageCreated)

    const { isLoading: isLoadingServicios } = useCrudServicios();
    const { isLoading: isLoadingAplicaciones } = useCrudAplicaciones();
    const { isLoading: isLoadingAliados } = useCrudAliados();
    const { isLoading: isLoadingControlArchivos } = useCrudControlArchivos();
    const isLoadingBool =  isLoadingServicios || isLoadingAplicaciones || isLoadingAliados || isLoadingControlArchivos || (status == 'inProgress')
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
