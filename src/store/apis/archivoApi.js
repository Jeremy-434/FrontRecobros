// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const archivoApi = createApi({
    reducerPath: 'archivo',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/File'
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