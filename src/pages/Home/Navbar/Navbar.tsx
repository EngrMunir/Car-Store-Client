/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavbarMenu } from "@/mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useGetIndividualCartItemsQuery } from "@/redux/features/Cart/CartApi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const { data: cartData } = useGetIndividualCartItemsQuery(currentUser?.email, {
  skip: !currentUser?.email,
}); 

    const handleLogout = () => {
        dispatch(logout());
        toast.success("Logged out success", {
            position: 'top-center'
        });
    };

    const cartItemCount = cartData?.data?.items?.reduce((total: number, item: { product: any; quantity: number }) => total + item.quantity, 0) || 0;

    return (
        <>
            <nav  className="sticky top-0 z-50 bg-blue-600 text-white shadow">
                <div className="w-full flex justify-between items-center py-8 container">
                    {/* logo section */}
                    <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                        <FaDumbbell />
                        <p>Car</p>
                        <p className="text-[#fb923c]">Shop</p>
                    </div>
                    {/* menu section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-gray-600">
                            {
                                NavbarMenu.map((item) => {
                                    let link = item.link;
                                    if (item.title === "Dashboard") {
                                        if (currentUser?.role === "admin") {
                                            link = "/dashboard/overview";
                                        } else if (currentUser) {
                                            link = "/dashboard/myProfile";
                                        }
                                    }
                                return (
                                <li key={item.id}>
                                    <NavLink to={link} className="inline-block py-1 px-3 text-white hover:text-[#ff8901] font-semibold">
                                    {item.title}
                                    </NavLink>
                                </li>
                                );
                                })
                            }

                        </ul>
                    </div>
                    {/* icon section */}
                    <div className="flex items-center gap-4">
                        <button className="text-2xl hover:bg-[#ff8901] hover:text-white rounded-full p-2 duration-200">
                            <CiSearch />
                        </button>
                        <NavLink to="/cart">
                            <div className="relative">
                                <button className="text-2xl hover:bg-[#ff8901] hover:text-white rounded-full p-2 duration-200">
                                    <BsCart3 />
                                </button>
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                                        {cartItemCount}
                                    </span>
                                )}
                            </div>
                        </NavLink>

                        {/* Conditionally render Login or Logout */}
                        {currentUser ? (
                          <>
                           
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <button
                                            className="hover:bg-[#ff8901] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                          </>
                        ) : (
                            <NavLink to="/login">
                                <button className="hover:bg-[#ff8901] font-semibold hover:text-white rounded-md border-2 border-[#ff8901] px-6 py-2 duration-200 hidden md:block">
                                    Login
                                </button>
                            </NavLink>
                        )}
                    </div>
                    {/* mobile hamburger menu section */}
                    <div className="md:hidden" onClick={() => setOpen(!open)}>
                        <MdMenu className="text-4xl" />
                    </div>
                </div>
            </nav>
            {/* mobile sidebar section */}
            <ResponsiveMenu open={open} />
        </>
    );
};

export default Navbar;