import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";
import { PersistPartial } from "redux-persist/es/persistReducer";

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:5000/api',
    credentials:"include",
    prepareHeaders:(headers, {getState})=>{
        const token = (getState() as RootState & PersistPartial).auth?.token;
        if(token){
            headers.set("authorization",`${token}`);
        }
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery,
    endpoints:()=>({})
})