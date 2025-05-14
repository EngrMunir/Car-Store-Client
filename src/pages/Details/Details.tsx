import { useGetSingleCarQuery } from "@/redux/features/Car/carManagementApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/features/hook";
import { useAddToCartMutation } from "@/redux/features/Cart/CartApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { FaCar, FaGasPump, FaCogs, FaPalette, FaShoppingCart, FaStar } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const { data: car, isLoading } = useGetSingleCarQuery(id);
  console.log('single car info',car);
  const [addToCartMutation] = useAddToCartMutation();
  const user = useAppSelector(selectCurrentUser);

  const handleAddToCart = async () => {
    try {
      await addToCartMutation({ email: user?.email, productId: car?.data._id }).unwrap();
      toast.success("Product added to cart", { position: "top-center" });
    } catch (err: any) {
      if (err?.data?.message) {
        toast.error(err.data.message, { position: "top-center" });
      } else {
        toast.error("Failed to add to cart", { position: "top-center" });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 dark:bg-gray-700 h-96 rounded-xl animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-6 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Car Image Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-80 md:h-96 w-full">
            <img
              src={car?.data?.image}
              alt={`${car?.data.brand} ${car?.data.model}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {car?.data.year} Model
            </div>
            {car?.data.inStock && (
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                In Stock ({car?.data.quantity})
              </div>
            )}
          </div>
        </div>

        {/* Car Details Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {car?.data.brand} <span className="text-blue-600">{car?.data.model}</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{car?.data.category}</p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
              ${car?.data.price.toLocaleString()}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Description</h2>
            <p className="text-gray-600 dark:text-gray-300">{car?.data.description}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <FaCar className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Model</p>
                <p className="font-medium">{car?.data.model}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaGasPump className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fuel Type</p>
                <p className="font-medium">{car?.data.fuelType || "Premium"}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaCogs className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Transmission</p>
                <p className="font-medium">{car?.data.transmission || "Automatic"}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaPalette className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Color</p>
                <p className="font-medium">{car?.data.color || "Metallic"}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300"
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>

          {/* Additional Features */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <span className="text-gray-600 dark:text-gray-300">Sporty and stylish coupe design</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <span className="text-gray-600 dark:text-gray-300">Dynamic performance</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <span className="text-gray-600 dark:text-gray-300">Premium interior features</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;