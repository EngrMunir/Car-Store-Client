import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        login:builder.mutation({
            query:(useInfo)=>({
                url:'/auth/login',
                method:'POST',
                body:useInfo
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;