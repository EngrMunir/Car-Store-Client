import { useGetAllCarsQuery } from "@/redux/features/Car/carManagementApi";
import ProductCard from "./ProductCard";
import { TCar } from "@/types";


const AllProduct = () => {
    const {data: carsData } = useGetAllCarsQuery(undefined);
    console.log(carsData);
    return (
        <div>
            <h2 className="text-3xl text-center">Available Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    carsData?.data.map((item:TCar)=><ProductCard key={item._id} car={item}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProduct;