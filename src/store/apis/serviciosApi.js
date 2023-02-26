// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const serviciosApi = createApi({
    reducerPath: 'servicios',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/Servicios'
    }),
    endpoints: (builder) => ({

        getServicios: builder.query({
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
        getServicioById: builder.query({
            query: (id) => `/listar/${id}`
        }),
        createServicio: builder.mutation({
            query: (body) => ({
                url: '/guardar',
                method: 'POST',
                body,
            }),
        }),
        updateServicio: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: '/editar',
                method: 'PUT',
                body: rest
            })
        }),
        deleteServicio: builder.mutation({
            query: (id) => ({
                url: `/eliminar/${id}`,
                method: 'DELETE',
            })
        })
    })
})

export const {
    useGetServiciosQuery,
    useGetServicioByIdQuery,
    useCreateServicioMutation,
    useUpdateServicioMutation,
    useDeleteServicioMutation
} = serviciosApi;