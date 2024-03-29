// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

// Define a service using a base URL and expected endpoints
export const aplicacionesApi = createApi({
    reducerPath: 'aplicaciones',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/Applications`
    }),
    endpoints: (builder) => ({

        getAplicaciones: builder.query({
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
        getAplicacionById: builder.query({
            query: (id) => `/GetById/${id}`
        }),
        createAplicacion: builder.mutation({
            query: (body) => ({
                url: '/Create',
                method: 'POST',
                body,
            }),
        }),
        updateAplicacion: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: '/Update',
                method: 'PUT',
                body: rest
            })
        }),
        deleteAplicacion: builder.mutation({
            query: (id) => ({
                url: `/Delete/${id}`,
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