
import { baseApi } from "../../api/baseApi";

const carManagementApi = baseApi.injectEndpoints({

    endpoints:(builder)=>({
        getAllCars: builder.query({
            query: ({ search, brand, category, model, priceMin, priceMax, sortBy, sortOrder, page, limit }) => {
              const params = new URLSearchParams();
              
              if (search) params.append("search", search);
              if (brand) params.append("brand", brand);
              if (category) params.append("category", category);
              if (model) params.append("model", model);
              if (priceMin) params.append("priceMin", priceMin);
              if (priceMax) params.append("priceMax", priceMax);
              if (sortBy) params.append("sortBy", sortBy);
              if (sortOrder) params.append("sortOrder", sortOrder);
              if (page) params.append("page", page);
              if (limit) params.append("limit", limit);
      
              return { url: `/cars?${params.toString()}`, method: "GET" };
            },
            transformResponse: (response:any) => ({
              data: response.data,
            }),
          }),
            getSingleCar: builder.query({
                query:(carId)=>{
                    return { 
                    url:`/cars/${carId}`,
                    method:'GET',
                }
                },
                transformResponse:(response:any)=>{
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
            }),
            deleteCar: builder.mutation({
                query:(carId)=>({
                    url:`/cars/${carId}`,
                    method:'DELETE',
                })
            })
        }),
});

export const { 
    useGetAllCarsQuery,
    useGetSingleCarQuery,
    useAddCarMutation,
    useDeleteCarMutation,
} = carManagementApi;