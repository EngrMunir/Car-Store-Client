import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAddToCartMutation } from "@/redux/features/Cart/CartApi";
import { useAppSelector } from "@/redux/features/hook";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type CarProps ={
    car:{
        _id:string;
        brand:string;
        price:number;
        image:string;
    }
}

const ProductCard = ({car}:CarProps) => {
    const user = useAppSelector(selectCurrentUser);
    const [addToCartMutation] = useAddToCartMutation();

    const handleAddToCart = async() => {        
      try {
        await addToCartMutation({ email: user?.email, productId: car._id }).unwrap();
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
        <div>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mt-5">
            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${car.image})`}}></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{car.brand}</h3>
                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">${car.price}</span>
                    <button
                    onClick={handleAddToCart} 
                    className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-[#fb923c] rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                </div>
            </div>
        </div>
        <div>
        <Link to={`/details/${car._id}`}>
        <button className="btn mt-2 w-full bg-[#fb923c] text-white hover:bg-[#0864b9]">
          See Details
        </button>
      </Link>
        </div>
        </div>

    );
};

export default ProductCard;