import { useGetSingleCarQuery } from "@/redux/features/Car/carManagementApi";
import { useAppDispatch } from "@/redux/features/hook";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/features/hook";
import { useAddToCartMutation } from "@/redux/features/Cart/CartApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const Details = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { data: car, isLoading } = useGetSingleCarQuery(id);
    const [addToCart, { isLoading: addToCartLoading }] = useAddToCartMutation(); // Use the mutation hook
    const user = useAppSelector(selectCurrentUser);

    if (isLoading) {
        return <p>Loading.....</p>;
    }

    const handleAddToCart = async () => {
        if(!user?.email){
          toast.error("Please login to add to cart.", {position:'top-center'});
          return;
        }

        try {
            await addToCart({
                product: car?.data._id,
                name: car?.data.brand,
                price: car?.data.price,
                quantity: 1,
                stock: 10,
                imageUrl: car?.data.image,
                email: user?.email, //send user email to backend.
            }).unwrap(); // Use unwrap to handle errors
            toast.success("Product added to cart", { position: "top-center" });
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to add to cart", { position: "top-center" });
        }
    };

    return (
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto">
            <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${car?.data?.image})` }}></div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{car?.data.brand}</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className="font-semibold">Model</span>: {car.data.model}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className="font-semibold">Category</span>: {car.data.category}</p>

                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${car?.data.price}</h1>
                    <button onClick={handleAddToCart} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;