import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";
import { PersistPartial } from "redux-persist/es/persistReducer";

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:5000/api',
    credentials:"include",
    prepareHeaders:(headers, {getState})=>{
        const token =  localStorage.getItem('authToken')||(getState() as RootState & PersistPartial).auth?.token;
        console.log('token from redux',token);
        if(token){
            headers.set("authorization",`Bearer ${token}`);
        }
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:baseQuery,
    tagTypes:['cart','users'],
    endpoints:()=>({})
})