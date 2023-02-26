// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const aplicacionesApi = createApi({
    reducerPath: 'aplicaciones',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/Aplicaciones'
    }),
    endpoints: (builder) => ({

        getAplicaciones: builder.query({
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
        getAplicacionById: builder.query({
            query: (idAplicacion) => `/obtener/${idAplicacion}`
        }),
        createAplicacion: builder.mutation({
            query: (body) => ({
                url: '/guardar',
                method: 'POST',
                body,
            }),
        }),
        updateAplicacion: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: '/editar',
                method: 'PUT',
                body: rest
            })
        }),
        deleteAplicacion: builder.mutation({
            query: (idAplicacion) => ({
                url: `/eliminar/${idAplicacion}`,
                method: 'DELETE',
            })
        })
    })
})

export const {
    useGetAplicacionesQuery,
    useGetAplicacionByIdQuery,
    useCreateAplicacionMutation,
    useUpdateAplicacionMutation,
    useDeleteAplicacionMutation
} = aplicacionesApi;