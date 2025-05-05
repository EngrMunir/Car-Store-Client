/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/features/hook";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { useGetOrderByEmailQuery } from "@/redux/features/order/order";

const MyOrders = () => {
    const user = useAppSelector(selectCurrentUser);
    
    const { data: orders, isLoading, error } = useGetOrderByEmailQuery(user?.email);
    // console.log('orders',orders);
    
    if (isLoading) return <p className="text-center">Loading orders...</p>;
    if (error) return <p className="text-center text-red-500">Error fetching orders.</p>;

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
            {orders?.data.length === 0 ? (
                <p className="text-gray-600">No orders found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">Order ID</th>
                                <th className="border p-2">Product</th>
                                <th className="border p-2">Quantity</th>
                                <th className="border p-2">Total Price</th>
                                <th className="border p-2">Status</th>
                                <th className="border p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.data.map((order:any )=> (
                                <tr key={order.id} className="text-center border">
                                    <td className="border p-2">{order._id}</td>
                                    <td className="border p-2">{order.productName}</td>
                                    <td className="border p-2">{order.products.reduce((total:number, product:any) => total + product.quantity, 0)}</td>
                                    <td className="border p-2">${order.totalPrice}</td>
                                    <td className="border p-2">{order.status}</td>
                                    <td className="border p-2">
                                        <Link to={`/dashboard/trackOrders/${order.id}`} className="text-blue-500 hover:underline">Track</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyOrders;