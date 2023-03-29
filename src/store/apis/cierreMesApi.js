// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const cierreMesApi = createApi({
    reducerPath: 'cierreMes',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/CierreMes'
    }),
    endpoints: (builder) => ({

        getCierreMes: builder.query({
            query: () => {
                return {
                    url: '/listar',
                    providesTags: (result, error, arg) =>
                        result
                            ? console.log(result)
                            : console.log(error)
                }
            }
        }),
        createCierreMes: builder.mutation({
            query: (body) => ({
                url: '/guardar',
                method: 'POST',
                body
            })
        }),
        deleteCierreMes: builder.mutation({
            query: (id) => ({
                url: `/eliminar/${id}`,
                method: 'DELETE',
            })
        })
    })
})

export const {
    useGetCierreMesQuery,
    useCreateCierreMesMutation,
    useDeleteCierreMesMutation
} = cierreMesApi;