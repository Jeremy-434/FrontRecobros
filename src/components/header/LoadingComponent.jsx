import { LinearProgress } from '@mui/material';

import { useCrudAliados, useCrudAplicaciones, useCrudServicios } from '../../hooks';

export const LoadingComponent = () => {
    const { isLoading: isLoadingServicios } = useCrudServicios();
    const { isLoading: isLoadingAplicaciones } = useCrudAplicaciones();
    const { isLoading: isLoadingAliados } = useCrudAliados();
    return (
        <>
            {
                (
                    isLoadingServicios || isLoadingAplicaciones || isLoadingAliados
                ) && <LinearProgress color="secondary" />
            }
        </>
    )
}
