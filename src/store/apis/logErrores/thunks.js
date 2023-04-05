import { useGetLogErroresQuery } from './logErroresApi';

export const loadingLogErrores = () => {
    const { data, error, isLoading } = useGetLogErroresQuery();
    const logErrores = data ?? [];

    return {
        logErrores,
        error,
        isLoading
    };
}