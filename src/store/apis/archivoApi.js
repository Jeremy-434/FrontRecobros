// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

// Define a service using a base URL and expected endpoints
export const archivoApi = createApi({
    reducerPath: 'archivo',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/File`
    }),
    endpoints: (builder) => ({

        uploadArchivo: builder.mutation({
            query: (body) => ({
                method: 'POST',
                body,
            }),
        }),
    })
})

export const {
    useUploadArchivoMutation,
} = archivoApi;