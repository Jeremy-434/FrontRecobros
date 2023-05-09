import { useGetAllCECOsQuery } from './CECOApi';

export const getCECOs = () => {
    const { data, error, isLoading } = useGetAllCECOsQuery();
    const CECOs = data ?? [];

    return {
        CECOs,
        error,
        isLoading
    }
}