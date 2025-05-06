import SliderCategory from "@/components/home/sliderCategory";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import { useGetAllCarsQuery } from "@/redux/features/Car/carManagementApi";

const Home = () => {
    const {data: carsData } = useGetAllCarsQuery({});
    // console.log('home', carsData);
    return (
       <>
        <div className="mb-10">
            <Banner/>
            <Featured/>
            <SliderCategory data={carsData}/>
            <FAQ/>
            <Footer/>
        </div>
       </>
    );
};

export default Home;