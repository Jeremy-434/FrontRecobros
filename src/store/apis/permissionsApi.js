// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnvVariables } from '../../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();
// Define a service using a base URL and expected endpoints
export const permissionsApi = createApi({
    reducerPath: 'permissions',

    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_API_URL}/Permissions`
    }),
    endpoints: (builder) => ({

        getPermissions: builder.query({
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
        getPermissionById: builder.query({
            query: (id) => {
                return {
                    url: `/GetById/${id}`,
                    method: 'GET',
                }
            }
        }),
        createPermission: builder.mutation({
            query: (body) => {
                return {
                    url: '/Create',
                    method: 'POST',
                    body
                }
            }
        }),
        updatePermission: builder.mutation({
            query: (body) => {
                return {
                    url: '/Update',
                    method: 'PUT',
                    body
                }
            }
        }),
        deletePermission: builder.mutation({
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
    useGetPermissionsQuery,
    useGetPermissionByIdQuery,
    useCreatePermissionMutation,
    useUpdatePermissionMutation,
    useDeletePermissionMutation
} = permissionsApi;
