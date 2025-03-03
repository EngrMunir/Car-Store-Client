import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* left side */}
            <div className="w-64 min-h-screen bg-yellow-400">
                <ul className="menu p-4">
                    <li><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                    <li><NavLink to="/dashboard/addCar">Add Car</NavLink></li>
                    <li><NavLink to="/dashboard/manageUsers">Manage Users</NavLink></li>
                    <li><NavLink to="/dashboard/manageCar">Manage Car</NavLink></li>
                    <div className="divider"></div> 
                     <li><Link to="/"><FaHome />Home</Link> </li>
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