import { selectCurrentToken, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useDecreaseQuantityMutation, useGetIndividualCartItemsQuery, useIncreaseQuantityMutation, useRemoveFromCartMutation } from "@/redux/features/Cart/CartApi";
import { useAppSelector } from "@/redux/features/hook";
import { useCreateOrderMutation } from "@/redux/features/order/order";
import { useEffect } from "react";
import { toast } from "sonner";

const Cart = () => {
    const user = useAppSelector(selectCurrentUser);
    const { data: cartData, error, isLoading } = useGetIndividualCartItemsQuery(user?.email);
    const [createOrder, { isError, isSuccess, data }] = useCreateOrderMutation();
    const token = useAppSelector(selectCurrentToken);
    const [increaseQuantityMutation] = useIncreaseQuantityMutation();
    const [decreaseQuantityMutation] = useDecreaseQuantityMutation();
    const [removeFromCartMutation] = useRemoveFromCartMutation();

    console.log('token from cart', token);
    console.log('cartData', cartData?.data?.items);


   const handlePlaceOrder = async () => {
    if (!cartData?.data?.items) {
        toast.error("Your cart is empty.", { id: "cart" });
        return;
    }

    const orderItems = cartData.data.items.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
    }));

    await createOrder({ cars: orderItems });
   
  };
    const handleIncreaseQuantity = async (productId: string) => {

            await increaseQuantityMutation({ productId: productId, email:user?.email });
    };
    const handleDecreaseQuantity = async (productId: string) => {
        
            await decreaseQuantityMutation({ productId: productId, email:user?.email });        
    };

    const handleRemoveItem = async (itemId: string) => { //changed to itemId
        await removeFromCartMutation(itemId); //using itemId
    };

    const toastId = "cart";

    useEffect(() => {
        if (isLoading) toast.loading("Processing ...", { id: toastId });
        if (isSuccess) {
            toast.success(data?.message, { id: toastId });
            if (data?.data) {
                setTimeout(() => {
                    window.location.href = data.data;
                }, 1000);
            }
        }
        if (isError) {
            toast.error(JSON.stringify(error), { id: toastId });
        }
    }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

    // Calculate total quantity and total price
    const totalQuantity = cartData?.data?.items.reduce((total, item) => total + item.quantity, 0) || 0;
    const totalPrice = cartData?.data?.items.reduce((total, item) => total + (item.product.price * item.quantity), 0) || 0;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

            {cartData?.data?.items.length === 0 ? (
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
    {cartData?.data?.items.map((item) => (
        <tr key={item._id} className="border-b">
            <td className="border p-2">{item.product.name}</td>
            <td className="border p-2">${item.product.price?.toFixed(2) || '0.00'}</td>
            <td className="border p-2">
                <button
                    className="px-2 py-1 bg-gray-200"
                    onClick={() => handleDecreaseQuantity(item.product._id)}
                    disabled={item.quantity <= 1}
                >
                    -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                    className="px-2 py-1 bg-gray-200"
                    onClick={() => handleIncreaseQuantity(item.product._id)}
                >
                    +
                </button>
            </td>
            <td className="border p-2">${(item.product.price * item.quantity)?.toFixed(2) || '0.00'}</td>
            <td className="border p-2">
                <button
                    className="px-2 py-1 bg-red-500 text-white"
                    onClick={() => handleRemoveItem(item._id)}
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
                <span className="text-lg font-bold">{totalQuantity}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-700">
                    Total Price:
                </span>
                <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full" onClick={handlePlaceOrder}>
                Place Order
            </button>
        </div>
    );
};

export default Cart;