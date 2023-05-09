// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const CECOApi = createApi({
    reducerPath: 'CECO',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5054/api/CECO'
    }),
    endpoints: (builder) => ({

        getAllCECOs: builder.query({
            query: () => {
                return {
                    url: '/GetAll',
                    providesTags: (result, error, arg) =>
                        result
                            ? console.log(result, arg)
                            : console.log(error, arg)
                }
            }
        })
    })
})

export const {
    useGetAllCECOsQuery
} = CECOApi;