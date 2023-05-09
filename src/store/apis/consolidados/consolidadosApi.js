// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const consolidadosApi = createApi({
    reducerPath: 'consolidados',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/Consolidated'
    }),
    endpoints: (builder) => ({

        getConsolidados: builder.query({
            query: () => {
                return {
                    url: '/GetAll',
                    providesTags: (result, error, arg) =>
                        result
                            ? console.log(result)
                            : console.log(error)
                }
            }
        })
    })
})

export const {
    useGetConsolidadosQuery
} = consolidadosApi;