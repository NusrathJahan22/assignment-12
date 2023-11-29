import { NavLink, Outlet } from "react-router-dom";
import { FaHistory, FaHome, FaPen, FaUser, FaUsers} from "react-icons/fa"
import { MdPayment } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="flex mx-auto">
          
           <div className="w-64 min-h-screen bg-orange-400">
                <ul className="mt-4">
                <li className="flex gap-2 m-2">
                    <FaHome />
                    <NavLink to="/dashboard">Admin Home</NavLink>
                </li>
                <li className="flex gap-2 m-2">
                    <FaPen />
                    <NavLink to="/dashboard/survey">Survey Creation</NavLink>
                </li>
                <li className="flex gap-2 m-2">
                <MdPayment />
                    <NavLink to="/dashboard/payment">Payment</NavLink>
                </li>
                <li className="flex gap-2 m-2">
                <FaHistory />
                    <NavLink to="/dashboard/history">Payment History</NavLink>
                </li>
                <li className="flex gap-2 m-2">
                <FaUsers />
                    <NavLink to="/dashboard/users">All Users</NavLink>
                </li>
                
                <div className="divider"></div> 

                <li className="flex gap-2 m-2">
                    <FaHome />
                    <NavLink to="/">Home</NavLink>
                </li>
                
                </ul>
            </div>
           
           <div className="flex-1 p-8">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;