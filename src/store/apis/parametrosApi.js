// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const parametrosApi = createApi({
    reducerPath: 'parametros',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/Parameters'
    }),
    endpoints: (builder) => ({

        getFirstParametro: builder.query({
            query: (id) => {
                return {
                    url: `/GetParameter`,
                    providesTags: (result, error, arg) =>
                        result
                            ? console.log(result, arg)
                            : console.log(error)
                }
            }
        }),
        updateParametro: builder.mutation({
            query: (body) => ({
                url: '/Update',
                method: 'PUT',
                body,
            }),
        }),
    })
})

export const {
    useGetFirstParametroQuery,
    useUpdateParametroMutation
} = parametrosApi;