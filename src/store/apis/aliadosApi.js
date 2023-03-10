// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const aliadosApi = createApi({
    reducerPath: 'aliados',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/Aliados'
    }),
    endpoints: (builder) => ({

        getAliados: builder.query({
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
        getAliadoById: builder.query({
            query: (id) => `/listar/${id}`
        }),
        createAliado: builder.mutation({
            query: (body) => ({
                url: '/guardar',
                method: 'POST',
                body,
            }),
        }),
        updateAliado: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: '/editar',
                method: 'PUT',
                body: rest
            })
        }),
        deleteAliado: builder.mutation({
            query: (id) => ({
                url: `/eliminar/${id}`,
                method: 'DELETE',
            })
        })
    })
})

export const {
    useGetAliadosQuery,
    useGetAliadoByIdQuery,
    useCreateAliadoMutation,
    useUpdateAliadoMutation,
    useDeleteAliadoMutation
} = aliadosApi;