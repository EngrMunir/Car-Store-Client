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

  console.log('car',car)

  if (isLoading) {
    return <p className="text-center py-4">Loading.....</p>;
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

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Car Image */}
        <div className="flex justify-center items-center">
          <div
            className="w-full max-w-md h-80 bg-center bg-cover rounded-lg"
            style={{ backgroundImage: `url(${car?.data?.image})` }}
          />
        </div>

        {/* Car Details */}
        <div className="flex flex-col justify-between p-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{car?.data.brand}</h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Model:</span> {car?.data.model}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Category:</span> {car?.data.category}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Description:</span> {car?.data.description}
          </p>

          <div className="flex justify-between items-center mt-4">
            <h1 className="text-xl font-bold text-gray-700 dark:text-gray-200">${car?.data.price}</h1>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold text-lg">Product Details:</h2>
            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
              <li>Fuel Type: {car?.data.fuelType}</li>
              <li>Transmission: {car?.data.transmission}</li>
              <li>Color: {car?.data.color}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
