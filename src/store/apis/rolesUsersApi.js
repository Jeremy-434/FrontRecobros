// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();
// Define a service using a base URL and expected endpoints
export const rolesUsersApi = createApi({
    reducerPath: 'rolesUsers',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/RolesUsers`
    }),
    endpoints: (builder) => ({

        getRolesUsers: builder.query({
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
        getByUserId: builder.query({
            query: (id) => {
                return {
                    url: `/GetByUserId/${id}`,
                    method: 'GET',
                }
            }
        }),
        getByRoleId: builder.query({
            query: (id) => {
                return {
                    url: `/GetByRoleId/${id}`,
                    methos: 'GET'
                }
            }
        }),
        createRoleUser: builder.mutation({
            query: (body) => {
                return {
                    url: '/Create',
                    method: 'POST',
                    body
                }
            }
        }),
        deleteRoleUser: builder.mutation({
            query: (body) => {
                return {
                    url: `/Delete`,
                    method: 'DELETE',
                    body
                }
            }
        })
    })
})

export const {
    useGetRolesUsersQuery,
    useGetByUserIdQuery,
    useGetByRoleIdQuery,    
    useCreateRoleUserMutation,
    useDeleteRoleUserMutation
} = rolesUsersApi;
