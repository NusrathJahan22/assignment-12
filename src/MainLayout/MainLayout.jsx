import { Outlet } from "react-router-dom";
// import Home from "../Pages/Home";
import Navbar from "../Component/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;