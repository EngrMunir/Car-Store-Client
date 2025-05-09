import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAddToCartMutation } from "@/redux/features/Cart/CartApi";
import { useAppSelector } from "@/redux/features/hook";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type CarProps = {
  car: {
    _id: string;
    brand: string;
    price: number;
    image: string;
  };
};

const ProductCard = ({ car }: CarProps) => {
  const user = useAppSelector(selectCurrentUser);
  const [addToCartMutation] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      await addToCartMutation({ email: user?.email, productId: car._id }).unwrap();
      toast.success("Product added to cart", { position: "top-center" });
    } catch (err: any) {
      if (err?.data?.message) {
        toast.error(err.data.message, { position: "top-center" });
      } else {
        toast.error("Failed to add to cart", { position: "top-center" });
      }
    }
  };

  return (
    <div className="w-full max-w-[300px] h-[420px] flex flex-col rounded-xl shadow-md overflow-hidden bg-white mx-auto hover:shadow-2xl transition-shadow duration-300">
      {/* Car Image */}
      <div
        className="h-[200px] bg-center bg-cover"
        style={{ backgroundImage: `url(${car.image})` }}
      />

      {/* Car Info */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800">{car.brand}</h3>
          <p className="text-xl font-bold text-blue-600 mt-2">${car.price}</p>
        </div>

        {/* Buttons */}
        <div className="mt-4 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full py-2 text-sm font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 transition duration-300"
          >
            Add to Cart
          </button>

          <Link to={`/details/${car._id}`}>
            <button className="w-full py-2 mt-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
