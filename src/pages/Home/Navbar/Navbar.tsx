import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

import { NavbarMenu } from "@/mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
      <div className="w-full flex justify-between items-center py-8">
        {/* logo section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <FaDumbbell/>
          <p>Car</p>
          <p className="text-[#fb923c]">Shop</p>
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {
              NavbarMenu.map((item)=>{
                return (
                  <li key={item.id}>
                    <a href={item.link} className="inline-block py-1 px-3 hover:text-[#ff8901] font-semibold">{item.title}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {/* icon section */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:bg-[#ff8901] hover:text-white rounded-full p-2 duration-200">
            <CiSearch />
          </button>
          <NavLink to="/cart"><button className="text-2xl hover:bg-[#ff8901] hover:text-white rounded-full p-2 duration-200">
            <BsCart3 />
          </button></NavLink>
          <NavLink to="/login"><button className="hover:bg-[#ff8901] font-semibold  hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200 hidden md:block">Login</button>
          </NavLink>
        </div>
        {/* mobile hamburger menu section */}
           <div className="md:hidden" onClick={()=>setOpen(!open)}>
           <MdMenu className="text-4xl"/>
           </div>
      </div>
    </nav>
    {/* mobile sidebar section */}
    <ResponsiveMenu open={open}/>
    </>
  );
};

export default Navbar;
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//     const navlinks =
//     <>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/allProducts">All Car</NavLink></li>
//         <li><NavLink to="/login">Login</NavLink></li>
//         <li><NavLink to="/cart">Cart</NavLink></li>
//         <li><NavLink to="/dashboard">Dashboard</NavLink></li>
//     </>
//     return (
//         <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//               {navlinks}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">CarShop</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             {navlinks}
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Button</a>
//         </div>
//       </div>
//     );
// };

// export default Navbar;