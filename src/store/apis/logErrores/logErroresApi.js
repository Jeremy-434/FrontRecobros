// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const logErroresApi = createApi({
    reducerPath: 'logErrores',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/LogErrores'
    }),
    endpoints: (builder) => ({

        getLogErrores: builder.query({
            query: () => {
                return {
                    url: '/listar',
                    providesTags: (result, error, arg) =>
                        result
                            ? console.log(result, arg)
                            : console.log(error, arg)
                }
            }
        })
    })
});

export const {
    useGetLogErroresQuery,
} = logErroresApi;