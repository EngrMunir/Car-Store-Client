import Navbar from "@/pages/Home/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;