import { Button } from "@/components/ui/button";
import ProductCard from "@/pages/Cars/ProductCard";
import { useGetAllCarsQuery } from "@/redux/features/Car/carManagementApi";
import { TCar } from "@/types";
import { Link } from "react-router-dom";

const Featured = () => {
    const {data: carsData, isLoading } = useGetAllCarsQuery({});

    if(isLoading){
        return <p className="text-center">Loading....</p>
    }

    return (
         <div className="container pt-4 mx-auto">
            <h2 className="text-4xl font-extrabold text-center relative uppercase tracking-wide">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Featured Products
            </span>
            <div className="w-24 h-1 bg-orange-500 mx-auto m-5 rounded"></div>
        </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    carsData?.data.slice(0,8).map((item:TCar)=><ProductCard key={item._id} car={item}></ProductCard>)
                }
            </div>
            <div className="text-center mt-5">
                <Link to="/allProducts"><Button className="bg-blue-600">View All</Button></Link>
            </div>
        </div>
    );
};

export default Featured;