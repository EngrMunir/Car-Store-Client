import { useGetSingleCarQuery } from "@/redux/features/Car/carManagementApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/features/hook";
import { useAddToCartMutation } from "@/redux/features/Cart/CartApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const Details = () => {
    const { id } = useParams();
    console.log(id);
    const { data: car, isLoading } = useGetSingleCarQuery(id);
    const [addToCartMutation] = useAddToCartMutation();
    const user = useAppSelector(selectCurrentUser);

    if (isLoading) {
        return <p>Loading.....</p>;
    }

    const handleAddToCart = async () => {
        try {
            await addToCartMutation({ email: user?.email, productId: car?.data._id }).unwrap();
            toast.success("Product added to cart", { position: "top-center" });
        } catch (err: any) {
            if (err?.data?.message) {
                toast.error(err.data.message, { position: "top-center" }); // Display backend error message
            } else {
                toast.error("Failed to add to cart", { position: "top-center" }); // Generic error
            }
        }
    };

    return ( // Added return statement here!
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto">
            <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${car?.data?.image})` }}></div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{car?.data.brand}</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className="font-semibold">Model</span>: {car?.data.model}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className="font-semibold">Category</span>: {car?.data.category}</p>

                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${car?.data.price}</h1>
                    <button onClick={handleAddToCart} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;