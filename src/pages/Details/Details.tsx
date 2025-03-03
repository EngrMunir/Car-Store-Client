import { useGetSingleCarQuery } from "@/redux/features/Car/carManagementApi";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const {data: car, isLoading } = useGetSingleCarQuery(id);
    console.log('data:',car)
    if(isLoading){
        return <p>Loading.....</p>
    }
    return (
        <div>
            Details of {car?.data.price}
        </div>
    );
};

export default Details;