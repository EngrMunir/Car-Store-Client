import { PayloadAction } from "@reduxjs/toolkit";
import reducer from "../auth/authSlice";
import { act } from "react";

export type TCartItem ={
    product:string; //Product ID
    name:string;
    price:number;
    quantity:number;
    stock:number;
    imageUrl: string;
}

export type TCartState ={
    items:TCartItem[];
    totalQuantity:number;
    totalPrice:number;
}

const initialState: TCartState ={
    items:[],
    totalQuantity:0,
    totalPrice:0,
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action:PayloadAction<TCartItem>){
            console.log({state:state.items});
            const existingItem = state.items.find(
                (item) => item.product === action.payload.product
            );
            if(existingItem){
                existingItem.quantity += action.payload.quantity;
            }else{
                state.items.push(action.payload);
            }
            state.totalQuantity += action.payload.quantity;
            state.totalPrice +=action.payload.price*action.payload.quantity;
        },
        removeFromCart(state, action:PayloadAction<string>){
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item.product === itemId);
            if(existingItem){
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter((item) => item.product !== itemId);
            }
        },
        updateQuantity(
            state,
            action:PayloadAction<{id:string; quantity:number}>
        ){
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.product === id);
            if(existingItem && quantity>0){
                const quantityDifference = quantity - existingItem.quantity;
                existingItem.quantity = quantity;
                state.totalQuantity += quantityDifference;
                state.totalPrice += quantityDifference*existingItem.price;   
            }
        },
        clearCart(state){
            state.items =[];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;


// // import { baseApi } from "@/redux/api/baseApi";

// export const cartApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getCart: builder.query({
//       query:()=>{
//         return { url:'/cart/cartItem', method:'GET' }
//       },
//       providesTags: ["cart"],
//     }),
//     // addToCart: builder.mutation({
//     //   query: (cartItem) => ({
//     //     url: "/cart",
//     //     method: "POST",
//     //     body: cartItem,
//     //   }),
//     //   invalidatesTags: ["cart"],
//     // }),
//     // increaseQuantityCart: builder.mutation({
//     //   query: ({ id, quantity }) => ({
//     //     url: `/cart/${id}`,
//     //     method: "PATCH",
//     //     body: { quantity },
//     //   }),
//     //   invalidatesTags: ["cart"],
//     // }),
//     // decreaseQuantityCart: builder.mutation({
//     //   query: ({ id, quantity }) => ({
//     //     url: `/cart/${id}`,
//     //     method: "PATCH",
//     //     body: { quantity },
//     //   }),
//     //   invalidatesTags: ["cart"],
//     // }),
//     // removeFromCart: builder.mutation({
//     //   query: (id) => ({
//     //     url: `/cart/${id}`,
//     //     method: "DELETE",
//     //   }),
//     //   invalidatesTags: ["cart"],
//     // }),
//   }),
// });

// export const {
//   useGetCartQuery,
//   // useAddToCartMutation,
//   // useUpdateCartMutation,
//   // useRemoveFromCartMutation,
// } = cartApi;