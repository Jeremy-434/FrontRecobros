// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

// Define a service using a base URL and expected endpoints
export const cierreMesApi = createApi({
    reducerPath: 'cierreMes',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/ClosingMonth`
    }),
    endpoints: (builder) => ({

        getCierreMes: builder.query({
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
        createCierreMes: builder.mutation({
            query: (body) => ({
                url: '/Create',
                method: 'POST',
                body
            })
        }),
        deleteCierreMes: builder.mutation({
            query: (id) => ({
                url: `/Delete/${id}`,
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