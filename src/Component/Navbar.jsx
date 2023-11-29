import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    const handelLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                            }
                        >
                            Home
                        </NavLink>;

                        <NavLink
                            to="/survey"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                            }
                        >
                            Survey
                        </NavLink>;
                        <NavLink
                            to="/surveyDetials"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                            }
                        >
                            Survey Details
                        </NavLink>;
                        <NavLink
                            to="/price"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                            }
                        >
                            Price
                        </NavLink>;
                    </ul>
                </div>
                <img src="https://i.ibb.co/7rZbJyS/survey.png" alt="" className="w-20 h-20" />
                {/* <a className="btn btn-ghost text-xl">Survey</a> */}
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-4 font-bold text-xl">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/survey"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                        }
                    >
                        Survey
                    </NavLink>
                    <NavLink
                        to="/surveyDetials"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                        }
                    >
                        Survey Details
                    </NavLink>
                    <NavLink
                        to="/price"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                        }
                    >
                        Price
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                        }
                    >
                        Dashboard
                    </NavLink>
                    {
                        user ? <><button onClick={handelLogout} className="btn btn-ghost">Logout</button>
                        </> : <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-orange-300 btn-ghost bg-orange-500 p-1 rounded-lg" : ""
                            }
                        >
                            Login
                        </NavLink>
                    }
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;