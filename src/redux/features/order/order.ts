import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (orderData) => ({
                url: "/order",
                method: "POST",
                body: orderData,
            }),
        }),
        getOrders: builder.query({
            query: () => "/order",
        }),
        getOrderById: builder.query({
            query: (orderId) => `/order/${orderId}`,
        }),
        verifyOrder: builder.query({
            query: (orderId) => ({
                url: "/order/verify",
                params: { order_id: orderId },
                method: "GET",
            }),
        }),
        getAllOrders: builder.query({
            query: () => "/orders", // Assuming the API endpoint for fetching all orders
        }),
        updateOrderStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `/order/${id}`,
                method: "PATCH",
                body: { status },
            }),
        }),
        deleteOrder: builder.mutation({
            query: (orderId) => ({
                url: `/order/${orderId}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useCreateOrderMutation,
    useGetOrdersQuery,
    useGetOrderByIdQuery,
    useVerifyOrderQuery,
    useGetAllOrdersQuery,
    useUpdateOrderStatusMutation,
    useDeleteOrderMutation,
} = orderApi;



// import { baseApi } from "@/redux/api/baseApi";

// const orderApi = baseApi.injectEndpoints({
//     endpoints:(builder)=>({
//         createOrder: builder.mutation({
//             query:(userInfo)=>({
//                 url:"/order",
//                 method:"POST",
//                 body:userInfo,
//             }),
//         }),
//         getOrders: builder.query({
//             query:()=>"/order",
//         }),
//         verifyOrder: builder.query({
//             query:(order_id)=>({
//                 url:"/order/verify",
//                 params:{ order_id},
//                 method:"GET",
//             }),
//         }),
//     }),
// });

// export const {
//     useCreateOrderMutation,
//     useGetOrdersQuery,
//     useVerifyOrderQuery,
// }= orderApi;