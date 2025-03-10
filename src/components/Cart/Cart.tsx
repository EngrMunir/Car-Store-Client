import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { removeFromCart, updateQuantity } from "@/redux/features/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/features/hook";
import { useCreateOrderMutation } from "@/redux/features/order/order";
import { useEffect } from "react";
import { toast } from "sonner";


const Cart = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state) => state.cart);
  const [ createOrder, { isError, isLoading, isSuccess, error, data }] = useCreateOrderMutation();
  const token = useAppSelector(selectCurrentToken)
  console.log('token from cart',token);

  const handlePlaceOrder = async () =>{
    if (!token) {
      toast.error("Unauthorized: No token found!");
      return;
    }
      await createOrder({cars:cartData.items});
      toast.success("Order placed Successfully")
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id: productId, quantity }));
    }
  };

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const toastId="cart";

  useEffect(()=>{
    if(isLoading) toast.loading("Processing ...",{id:toastId})
    if(isSuccess){
      toast.success(data?.message, {id:toastId})
      if(data?.data){
        setTimeout(()=>{
          window.location.href = data.data;
        },1000)
        
      }
    }
    if(isError){
      toast.error(JSON.stringify(error), {id:toastId})
    }
  },[data?.data, data?.message, error, isError, isLoading, isSuccess]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartData.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Product</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartData.items.map((item) => (
              <tr key={item.product} className="border-b">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">${item.price.toFixed(2)}</td>
                <td className="border p-2">
                  <button
                    className="px-2 py-1 bg-gray-200"
                    onClick={() => handleUpdateQuantity(item.product, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200"
                    onClick={() => handleUpdateQuantity(item.product, item.quantity + 1)}
                  >
                    +
                  </button>
                </td>
                <td className="border p-2">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="border p-2">
                  <button
                    className="px-2 py-1 bg-red-500 text-white"
                    onClick={() => handleRemoveItem(item.product)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
      <div className="border-b my-3"></div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-700">
          Total Quantity:
        </span>
        <span className="text-lg font-bold">{cartData.totalQuantity}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-700">
          Total Price:
        </span>
        <span className="text-lg font-bold">
          ${cartData.totalPrice.toFixed(2)}
        </span>
      </div>
      <button className="w-full" onClick={handlePlaceOrder}>
        Place Order
      </button>
          
    </div>
  );
};

export default Cart;
