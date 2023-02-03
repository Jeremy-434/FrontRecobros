import { useEffect, useState } from 'react';
import { recobrosApi } from '../api/recobrosApi';

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {
        try {
            setState({
                ...state,
                isLoading: true,
            });
            const resp = await recobrosApi.get("listar");
            const { data } = resp;
            setState({
                data: data.response,
                isLoading: false,
                hasError: null,
            });
            // console.log(data);
        } catch (err) {
            setState({
                ...state,
                isLoading: false,
                hasError: err,
            });
        }
    }

    useEffect(() => {
        getFetch();
    }, [recobrosApi])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
