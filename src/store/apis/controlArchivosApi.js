// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const controlArchivosApi = createApi({
    reducerPath: 'controlArchivos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/ControlArchivo'
    }),
    endpoints: (builder) => ({

        getControlArchivos: builder.query({
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
        createControlArchivos: builder.mutation({
            query: (body) => ({
                url: '/guardar',
                method: 'POST',
                body,
            }),
        }),
        updateControlArchivos: builder.mutation({
            query: (body) => ({
                url: '/editar',
                method: 'PUT',
                body,
            }),
        }),
    })
})

export const {
    useGetControlArchivosQuery,
    useCreateControlArchivosMutation,
    useUpdateControlArchivosMutation
} = controlArchivosApi;