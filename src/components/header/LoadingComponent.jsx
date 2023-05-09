import { LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { useCrudAliados, useCrudAplicaciones, useCrudCierreMes, useCrudControlArchivos, useCrudParametros, useCrudServicios } from '../../hooks';
import { loadingLogErroresJoinConsolidados } from '../../store/apis/logErroresJoinConsolidados/thunks';
import { loadingConsolidados } from '../../store/apis/consolidados/thunks';
import { getCECOs } from '../../store/apis/CECO/thunks';

export const LoadingComponent = () => {

    const { status } = useSelector(state => state.messageCreated)

    const { isLoading: isLoadingServicios } = useCrudServicios();
    const { isLoading: isLoadingAplicaciones } = useCrudAplicaciones();
    const { isLoading: isLoadingAliados } = useCrudAliados();
    const { isLoading: isLoadingControlArchivos } = useCrudControlArchivos();
    const { isLoading: isLoadingParametros } = useCrudParametros();
    const { isLoading: isLoadingCierreMes } = useCrudCierreMes();
    const { isLoading: isLoadingConsolidados } = loadingConsolidados
    const { isLoading: isLoadingLogErroresJoinConsolidados } = loadingLogErroresJoinConsolidados();
    const { isLoading: isLoadingCECOs } = getCECOs();

    const isLoadingBool = isLoadingServicios
        || (status == 'inProgress')
        || isLoadingAplicaciones
        || isLoadingAliados
        || isLoadingControlArchivos
        || isLoadingParametros
        || isLoadingCierreMes
        || isLoadingConsolidados
        || isLoadingLogErroresJoinConsolidados
        || isLoadingCECOs

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
