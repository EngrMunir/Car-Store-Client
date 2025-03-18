import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
       <>
        <div className="mb-10">
            <Banner/>
            <Featured/>
            <FAQ/>
            <Footer/>
        </div>
       </>
    );
};

export default Home;