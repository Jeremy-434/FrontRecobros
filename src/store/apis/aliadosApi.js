// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const aliadosApi = createApi({
    reducerPath: 'aliados',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/Ally'
    }),
    endpoints: (builder) => ({

        getAliados: builder.query({
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
        getAliadoById: builder.query({
            query: (id) => `/GetById/${id}`
        }),
        createAliado: builder.mutation({
            query: (body) => ({
                url: '/Create',
                method: 'POST',
                body,
            }),
        }),
        updateAliado: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: '/Update',
                method: 'PUT',
                body: rest
            })
        }),
        deleteAliado: builder.mutation({
            query: (id) => ({
                url: `/Delete/${id}`,
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