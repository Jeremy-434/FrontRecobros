// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const parametrosApi = createApi({
    reducerPath: 'parametros',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/Parametros'
    }),
    endpoints: (builder) => ({

        getParametrosById: builder.query({
            query: (id) => {
                return {
                    url: `/listar/${id}`,
                    providesTags: (result, error, arg) =>
                        result
                            ? console.log(result, arg)
                            : console.log(error)
                }
            }
        }),
        updateParametro: builder.mutation({
            query: (body) => ({
                url: '/editar',
                method: 'PUT',
                body,
            }),
        }),
    })
})

export const {
    useGetParametrosByIdQuery,
    useUpdateParametroMutation
} = parametrosApi;