// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const logErroresJoinConsolidadosApi = createApi({
    reducerPath: 'logErroresJoinConsolidado',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/Consultas'
    }),
    endpoints: (builder) => ({

        getLogErroresJoinConsolidado: builder.query({
            query: () => {
                return {
                    url: '/listar/consolidados-and-logErrores',
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