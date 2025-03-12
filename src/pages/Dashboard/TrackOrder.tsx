import { useVerifyOrderQuery } from "@/redux/features/order/order";
import { useParams } from "react-router-dom";


const TrackOrder = () => {
    const { orderId } = useParams();
    const { data: order, isLoading, error } = useVerifyOrderQuery(orderId);

    const statusStages = ["Pending", "Processing", "Shipped", "Delivered"];
    const statusIndex = statusStages.indexOf(order?.status);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error fetching order details!</p>;

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Track Order</h2>
            <p><strong>Order ID:</strong> {order?._id}</p>
            <p><strong>Product:</strong> {order?.productName}</p>
            <p><strong>Quantity:</strong> {order?.quantity}</p>
            <p><strong>Total Price:</strong> ${order?.totalPrice}</p>
            <p><strong>Estimated Delivery:</strong> {order?.estimatedDelivery}</p>

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
                <p className="mt-2 text-lg font-semibold">{order?.status}</p>
            </div>
        </div>
    );
};

export default TrackOrder;
