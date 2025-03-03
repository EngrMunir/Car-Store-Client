import { baseApi } from "@/redux/api/baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query:()=>{
        return { url:'/cart/cartItem', method:'GET' }
      },
      providesTags: ["cart"],
    }),
    // addToCart: builder.mutation({
    //   query: (cartItem) => ({
    //     url: "/cart",
    //     method: "POST",
    //     body: cartItem,
    //   }),
    //   invalidatesTags: ["cart"],
    // }),
    // increaseQuantityCart: builder.mutation({
    //   query: ({ id, quantity }) => ({
    //     url: `/cart/${id}`,
    //     method: "PATCH",
    //     body: { quantity },
    //   }),
    //   invalidatesTags: ["cart"],
    // }),
    // decreaseQuantityCart: builder.mutation({
    //   query: ({ id, quantity }) => ({
    //     url: `/cart/${id}`,
    //     method: "PATCH",
    //     body: { quantity },
    //   }),
    //   invalidatesTags: ["cart"],
    // }),
    // removeFromCart: builder.mutation({
    //   query: (id) => ({
    //     url: `/cart/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["cart"],
    // }),
  }),
});

export const {
  useGetCartQuery,
  // useAddToCartMutation,
  // useUpdateCartMutation,
  // useRemoveFromCartMutation,
} = cartApi;