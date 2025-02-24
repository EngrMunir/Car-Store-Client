import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Main from "@/Layout/Main";
import AllProduct from "@/pages/Cars/AllProduct";
import Home from "@/pages/Home/Home/Home";
import About from "@/pages/about/about";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/allProducts',
                element:<AllProduct/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },
   
]);

export default router;