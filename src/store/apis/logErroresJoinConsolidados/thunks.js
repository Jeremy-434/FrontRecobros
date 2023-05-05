import { useGetLogErroresJoinConsolidadoQuery } from './logErroresJoinConsolidadosApi';

export const loadingLogErroresJoinConsolidados = () => {
    const { data, error, isLoading } = useGetLogErroresJoinConsolidadoQuery();
    const logErroresJoinConsolidado = data ?? [];

    return {
        logErroresJoinConsolidado,
        error,
        isLoading
    };
}