import ProductCard from "@/pages/Cars/ProductCard";
import { useGetAllCarsQuery } from "@/redux/features/Car/carManagementApi";
import { TCar } from "@/types";
import { Link } from "react-router-dom";

const Featured = () => {
    const {data: carsData } = useGetAllCarsQuery(undefined);

    return (
         <div>
            <h2 className="text-3xl text-center">---Featured Product---</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    carsData?.data.slice(0,6).map((item:TCar)=><ProductCard key={item._id} car={item}></ProductCard>)
                }
            </div>
            <div className="text-center mt-5">
                <Link to="/allProducts"><button>View All</button></Link>
            </div>
        </div>
    );
};

export default Featured;