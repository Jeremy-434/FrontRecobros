// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

// Define a service using a base URL and expected endpoints
export const accountApi = createApi({
    reducerPath: 'user',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/Account`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token != undefined) {
                headers.set('x-token', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({

        getUsers: builder.query({
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
        updateUser: builder.mutation({
            query: (body) => {
                return {
                    url: '/Update',
                    method: 'PUT',
                    body,
                }
            }
        }),
        deleteUser: builder.mutation({
            query: (id) => {
                return {
                    url: `/Delete/${id}`,
                    method: 'DELETE'
                }
            }
        }),
        registerUser: builder.mutation({
            query: (body) => {
                return {
                    url: '/Register',
                    method: 'POST',
                    body,
                }
            }
        }),
        loginUser: builder.mutation({
            query: (body) => {
                return {
                    url: '/Login',
                    method: 'POST',
                    body
                }
            }
        }),
        renewToken: builder.query({
            query: () => {
                return {
                    url: '/Renew',
                }
            }
        })
    })
})

export const {
    useGetUsersQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useRegisterUserMutation,
    useLoginUserMutation,
    useRenewTokenQuery
} = accountApi;