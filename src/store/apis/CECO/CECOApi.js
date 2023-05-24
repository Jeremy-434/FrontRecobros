// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

// Define a service using a base URL and expected endpoints
export const CECOApi = createApi({
    reducerPath: 'CECO',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/CECO`
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