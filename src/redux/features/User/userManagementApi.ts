import { baseApi } from "@/redux/api/baseApi";

export const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query:()=>{
        return { url:'/auth/users', method:'GET' }
      },
    }),
    deleteUsers: builder.mutation({
      query:(userId)=>{
        return { 
          url:`/auth/delete-user/${userId}`, 
          method:'DELETE',
         }
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUsersQuery,
} = userManagementApi;