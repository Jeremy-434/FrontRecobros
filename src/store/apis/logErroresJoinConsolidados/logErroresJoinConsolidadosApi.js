// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

// Define a service using a base URL and expected endpoints
export const logErroresJoinConsolidadosApi = createApi({
    reducerPath: 'logErroresJoinConsolidado',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/Querys`
    }),
    endpoints: (builder) => ({

        getLogErroresJoinConsolidado: builder.query({
            query: () => {
                return {
                    url: '/GetAll/ConsolidatedAndLogErrors',
                    providesTags: (result, error, arg) =>
                        result
                            ? console.log(result, arg)
                            : console.log(error, arg)
                }
            }
        })
    })
})

export const {
    useGetLogErroresJoinConsolidadoQuery,
} = logErroresJoinConsolidadosApi;