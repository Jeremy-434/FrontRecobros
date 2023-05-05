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
                    url: '/GetAll',
                    providesTags: (result, error, arg) =>
                        result
                            ? console.log(result)
                            : console.log(error)
                }
            }
        }),
        getServicioById: builder.query({
            query: (id) => `/GetById/${id}`
        }),
        createServicio: builder.mutation({
            query: (body) => ({
                url: '/Create',
                method: 'POST',
                body,
            }),
        }),
        updateServicio: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: '/Update',
                method: 'PUT',
                body: rest
            })
        }),
        deleteServicio: builder.mutation({
            query: (id) => ({
                url: `/Delete/${id}`,
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