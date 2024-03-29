// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

// Define a service using a base URL and expected endpoints
export const CECOFileApi = createApi({
    reducerPath: 'CECOFile',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/CECOFile`
    }),
    endpoints: (builder) => ({

        uploadCECOFile: builder.mutation({
            query: (body) => {
                return {
                    method: 'POST',
                    body: body
                }
            }
        })
    })
})

export const {
    useUploadCECOFileMutation
} = CECOFileApi;