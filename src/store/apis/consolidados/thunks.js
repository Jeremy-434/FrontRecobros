import { useGetConsolidadosQuery } from './consolidadosApi';


export const loadingConsolidados = () => {
    const { data, error, isLoading, refetch } = useGetConsolidadosQuery();
    const consolidados = data ?? [];

    return {
        consolidados,
        error,
        isLoading
    };
}