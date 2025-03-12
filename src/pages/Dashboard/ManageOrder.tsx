import { useDeleteOrderMutation, useGetAllOrdersQuery, useUpdateOrderStatusMutation } from "@/redux/features/order/order";
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageOrders = () => {
    const { data } = useGetAllOrdersQuery(undefined);
    const [updateOrderStatus] = useUpdateOrderStatusMutation();
    const [deleteOrder] = useDeleteOrderMutation();
    const [filterStatus, setFilterStatus] = useState("");

    const orders = data?.data || [];
    console.log(orders)

    const handleStatusChange = async (orderId: string, newStatus: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Change order status to ${newStatus}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await updateOrderStatus({ id: orderId, status: newStatus }).unwrap();
                    if (response.success) {
                        Swal.fire("Updated!", "Order status has been changed.", "success");
                    }
                } catch (error) {
                    Swal.fire("Error!", "Failed to update order status.", "error");
                }
            }
        });
    };

    const handleDeleteOrder = (orderId: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await deleteOrder(orderId).unwrap();
                    if (response.success) {
                        Swal.fire("Deleted!", "Order has been deleted.", "success");
                    }
                } catch (error) {
                    Swal.fire("Error!", "Failed to delete order.", "error");
                }
            }
        });
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Manage Orders</h2>
                <select 
                    className="border p-2 rounded"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="">All Orders</option>
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">#</th>
                            <th className="p-2 border">Customer</th>
                            <th className="p-2 border">Product</th>
                            <th className="p-2 border">Total Price</th>
                            <th className="p-2 border">Status</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders
                            .filter(order => !filterStatus || order.status === filterStatus)
                            .map((order, index) => (
                                <tr key={order._id} className="border-t">
                                    <td className="p-2 border">{index + 1}</td>
                                    <td className="p-2 border">{order.customerName}</td>
                                    <td className="p-2 border">{order.productName}</td>
                                    <td className="p-2 border">${order.totalPrice}</td>
                                    <td className="p-2 border">
                                        <select 
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                            className="border p-1 rounded"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="shipped">Shipped</option>
                                            <option value="delivered">Delivered</option>
                                        </select>
                                    </td>
                                    <td className="p-2 border flex gap-2">
                                        <button onClick={() => handleDeleteOrder(order._id)} className="text-red-500">
                                            <FaTrash size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
