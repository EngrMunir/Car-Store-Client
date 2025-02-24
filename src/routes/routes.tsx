import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "@/Layout/Main";
import AllProduct from "@/pages/Home/AllProduct";
import Home from "@/pages/Home/Home/Home";

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
                path:'/allProducts',
                element:<AllProduct/>
            },
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
]);

export default router;