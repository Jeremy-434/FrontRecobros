// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();
// Define a service using a base URL and expected endpoints
export const optionsApi = createApi({
    reducerPath: 'options',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/Options`
    }),
    endpoints: (builder) => ({

        getOptions: builder.query({
            query: () => {
                return {
                    url: '/GetAll',
                    providesTags: (result, error, arg) =>
                        result
                            ? console.log(result, arg)
                            : console.log(error, arg)
                }
            }
        }),
        getOptionById: builder.query({
            query: (id) => {
                return {
                    url: `/GetById/${id}`,
                    method: 'GET',
                }
            }
        }),
        createOption: builder.mutation({
            query: (body) => {
                return {
                    url: '/Create',
                    method: 'POST',
                    body
                }
            }
        }),
        updateOption: builder.mutation({
            query: (body) => {
                return {
                    url: '/Update',
                    method: 'PUT',
                    body
                }
            }
        }),
        deleteOption: builder.mutation({
            query: (id) => {
                return {
                    url: `/Delete/${id}`,
                    method: 'DELETE'
                }
            }
        })
    })
})

export const {
    useGetOptionsQuery,
    useGetOptionByIdQuery,
    useCreateOptionMutation,
    useUpdateOptionMutation,
    useDeleteOptionMutation
} = optionsApi;
