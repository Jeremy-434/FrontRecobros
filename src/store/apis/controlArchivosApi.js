// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

// Define a service using a base URL and expected endpoints
export const controlArchivosApi = createApi({
    reducerPath: 'controlArchivos',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/FileControl`
    }),
    endpoints: (builder) => ({

        getControlArchivos: builder.query({
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
        createControlArchivos: builder.mutation({
            query: (body) => ({
                url: '/Create',
                method: 'POST',
                body,
            }),
        }),
        updateControlArchivos: builder.mutation({
            query: (body) => ({
                url: '/Update',
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