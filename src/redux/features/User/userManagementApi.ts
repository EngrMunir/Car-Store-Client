import { baseApi } from "@/redux/api/baseApi";

export const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query:()=>{
        return { url:'/auth/users', method:'GET' }
      },
      providesTags:['users']
    }),
    changeUserRole: builder.mutation({
      query:(data)=>({
        url:'/auth/role-change',
        method:'PATCH',
        body:data
      })
    }),
    deleteUsers: builder.mutation({
      query:(userId)=>{
        return { 
          url:`/auth/delete-user/${userId}`, 
          method:'DELETE',
         }
      },
      invalidatesTags:['users']
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUsersMutation,
  useChangeUserRoleMutation,
} = userManagementApi;