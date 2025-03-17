import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
       <>
         <Helmet>
                <title>Home</title>
              </Helmet>
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