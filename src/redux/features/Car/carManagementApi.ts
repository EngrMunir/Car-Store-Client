import { url } from "inspector";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({

    endpoints:(builder)=>({
            getAllCars: builder.query({
                query:()=>{
                    return { url:'/cars',
                    method:'GET',
                }
                },
                transformResponse:(response)=>{
                    console.log( response?.data);
                    return {
                        data: response.data,
                    };
                }
            }),
            getSingleCar: builder.query({
                query:(carId)=>{
                    return { url:`/cars/${carId}`,
                    method:'GET',
                }
                },
                transformResponse:(response)=>{
                    console.log( response?.data);
                    return {
                        data: response.data,
                    };
                }
            }),
            addCar: builder.mutation({
                query:(carInfo)=>({
                    url:'/cars',
                    method:'POST',
                    body:carInfo
                })
            })
        }),
});

export const { 
    useGetAllCarsQuery,
    useGetSingleCarQuery,
    useAddCarMutation,
} = courseManagementApi;