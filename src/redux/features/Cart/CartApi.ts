import { baseApi } from "@/redux/api/baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => ({
        url: "/cart/cartItem",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "/cart/add",
        method: "POST",
        body: cartItem,
      }),
      invalidatesTags: ["cart"],
    }),
    removeFromCart: builder.mutation({
      query: (itemId) => ({
        url: `/cart/remove/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: "/cart/clear",
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = cartApi;