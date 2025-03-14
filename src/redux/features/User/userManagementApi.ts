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
    updatePassword: builder.mutation({
      query: ({ email, oldPassword, newPassword }) => ({
          url: "/auth/change-password",
          method: "PATCH",
          body: { email, oldPassword, newPassword },
      }),
  }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/auth/update-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUsersMutation,
  useChangeUserRoleMutation,
  useUpdateProfileMutation,
  useUpdatePasswordMutation
} = userManagementApi;