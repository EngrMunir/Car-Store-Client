import SliderCategory from "@/components/home/sliderCategory";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import { useGetAllCarsQuery } from "@/redux/features/Car/carManagementApi";
import TodayDeals from "@/components/home/todayDeals";
import { TCarData } from "@/types";

const Home = () => {
    const {data: carsData, isLoading } = useGetAllCarsQuery({});
    if(isLoading){
        return <p>Loading</p>
    }
    // console.log('home', carsData);
    return (
       <>
        <div className="mb-10">
            <Banner/>
            <Featured/>
            <TodayDeals data={carsData}/>
            <SliderCategory data={carsData}/>
            <FAQ/>
            <Footer/>
        </div>
       </>
    );
};

export default Home;