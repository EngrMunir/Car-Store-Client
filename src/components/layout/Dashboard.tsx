import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/pages/Dashboard/Sidebar";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/features/hook";

const Dashboard = () => {
    const navigate = useNavigate();
    const token = useAppSelector(state => state.auth.token);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (!token && !storedToken) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) return <p>Loading...</p>;
    return (
        <div className="flex">
            {/* left side */}
           <Sidebar/>
            {/* right side */}
            <div className="w-full p-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;