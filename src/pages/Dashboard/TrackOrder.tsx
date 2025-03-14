import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/features/hook";
import { useGetAllOrdersQuery } from "@/redux/features/order/order";

const statusStages = ["Order Placed", "Processing", "Shipped", "Out for Delivery", "Delivered"];

const TrackOrder = () => {
    const user = useAppSelector(selectCurrentUser);
    console.log('user', user);
    
    const { data: orders, isLoading, error } = useGetAllOrdersQuery(user.email);
    console.log('orders', orders);

    if (isLoading) return <p className="text-center">Loading orders...</p>;
    if (error) return <p className="text-center text-red-500">Error fetching orders.</p>;

    if (!orders?.data?.length) {
        return <p className="text-center text-gray-600">No orders found.</p>;
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Track Order</h2>

            {orders.data.map((order) => {
                const totalQuantity = order.products.reduce((sum, product) => sum + product.quantity, 0);
                const statusIndex = statusStages.indexOf(order.status);

                return (
                    <div key={order._id} className="mb-6 border-b pb-4">
                        <p><strong>Order ID:</strong> {order._id}</p>
                        <p><strong>Products:</strong> {order.products.map(p => p.productName).join(", ")}</p>
                        <p><strong>Total Quantity:</strong> {totalQuantity}</p>
                        <p><strong>Total Price:</strong> ${order.totalPrice}</p>
                        <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery || "Not available"}</p>

                        <div className="mt-6">
                            <h3 className="font-semibold">Order Status:</h3>
                            <div className="flex items-center space-x-2 mt-2">
                                {statusStages.map((stage, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className={`w-8 h-8 flex items-center justify-center rounded-full 
                                            ${index <= statusIndex ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
                                            {index + 1}
                                        </div>
                                        {index < statusStages.length - 1 && (
                                            <div className={`w-12 h-1 ${index < statusIndex ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-2 text-lg font-semibold">{order.status}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TrackOrder;
