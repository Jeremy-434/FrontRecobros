// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();
// Define a service using a base URL and expected endpoints
export const rolesApi = createApi({
    reducerPath: 'roles',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/Roles`
    }),
    endpoints: (builder) => ({

        getRoles: builder.query({
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
        getRoleById: builder.query({
            query: (id) => {
                return {
                    url: `/GetById/${id}`,
                    method: 'GET',
                }
            }
        }),
        createRole: builder.mutation({
            query: (body) => {
                return {
                    url: '/Create',
                    method: 'POST',
                    body
                }
            }
        }),
        updateRole: builder.mutation({
            query: (body) => {
                return {
                    url: '/Update',
                    method: 'PUT',
                    body
                }
            }
        }),
        deleteRole: builder.mutation({
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
    useGetRolesQuery,
    useGetRoleByIdQuery, 
    useCreateRoleMutation,
    useUpdateRoleMutation,
    useDeleteRoleMutation
} = rolesApi;