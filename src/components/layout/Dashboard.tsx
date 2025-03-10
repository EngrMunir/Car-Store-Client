import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdAssignment } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { GoPackage } from "react-icons/go";





const Dashboard = () => {
    return (
        <div className="flex">
            {/* left side */}
            <div className="w-64 min-h-screen">
                <ul className="menu p-4">
                    <li className="border-b-2 py-2 pl-3"><NavLink to="/dashboard/addCar" className="flex items-center gap-2"><GoPackage/><span>Manage Products</span></NavLink></li>
                    <li className="border-b-2 py-2 pl-3"><NavLink to="/dashboard/manageUsers" className="flex items-center gap-2"><FaUserCheck/> Manage Users</NavLink></li>
                    <li className="border-b-2 py-3 pl-3"><NavLink to="/dashboard/manageCar" className="flex items-center gap-2"><MdAssignment/> Manage Orders</NavLink></li>
                    <li className="border-b-2 py-3 pl-3"><NavLink to="/dashboard/manageCar" className="flex items-center gap-2"><MdOutlineShoppingBag/><span>My Orders</span></NavLink></li>
                    <li className="border-b-2 py-3 pl-3"><NavLink to="/dashboard/manageCar" className="flex items-center gap-2"><GrDeliver/><span>Track Orders</span></NavLink></li>
                    <li className="border-b-2 py-3 pl-3"><NavLink to="/dashboard/myProfile" className="flex items-center gap-2"><CgProfile/> <span>My Profile</span></NavLink></li>
                    <div className="divider py-3"></div> 
                    <li className="pl-3"><Link to="/" className="flex items-center gap-2"><FaHome /><span>Home</span></Link> </li>
                </ul>
            </div>
            {/* right side */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;