import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:5000/api/v1',
    credentials:"include",
    prepareHeaders:(headers, {getState})=>{
        const token = (getState() ).auth.token;
        if(token){
            headers.set("authorization",`${token}`);
        }
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath:'baseApi',
    endpoints:()=>({})
})