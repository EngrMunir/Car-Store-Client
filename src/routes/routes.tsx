import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Main from "@/Layout/Main";
import AllProduct from "@/pages/Cars/AllProduct";
import Home from "@/pages/Home/Home/Home";
import Details from "@/pages/Details/Details";
import Cart from "@/components/Cart/Cart";
import Dashboard from "@/components/layout/Dashboard";
import AddCar from "@/pages/Dashboard/AddCar";
import About from "@/pages/about/About";
import ManageCar from "@/pages/Dashboard/ManageCar";
import ManageUsers from "@/pages/Dashboard/ManageUser";

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
            },
            {
                path:'/details/:id',
                element:<Details/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'addCar',
                element:<AddCar/>
            },
            {
                path:'manageCar',
                element:<ManageCar/>
            },
            {
                path:'manageUsers',
                element:<ManageUsers/>
            }
        ]
    }
   
]);

export default router;