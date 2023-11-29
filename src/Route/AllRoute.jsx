import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Survey from "../Pages/Survey";
import ServeyDetails from "../Pages/ServeyDetails";
import Price from "../Pages/Price";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Error from "../Component/Error";
import Dashboard from "../MainLayout/Dashboard/Dashboard";
import Cart from "../Component/Cart";
import AddSurvey from "../Component/AddSurvey";
import Userhome from "../Component/Dashboard/Userhome";
import Payment from "../Component/Dashboard/Payment/Payment";
import PaymentHistory from "../Component/Dashboard/Payment/PaymentHistory";
import AllUsers from "../Component/Dashboard/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/survey",
        element: <Survey></Survey>
      },
      {
        path: "/surveyDetials",
        element: <ServeyDetails></ServeyDetails>
      },
      {
        path: "/price",
        element: <Price></Price>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]

  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>
      },
      {
        path:"/dashboard",
        element:<Userhome></Userhome>
      },
      {
        path: "/dashboard/survey",
        element: <AddSurvey></AddSurvey>
      },
      {
        path: "/dashboard/payment",
        element:<Payment></Payment>
      },
      {
        path: "/dashboard/history",
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path: "/dashboard/users",
        element:<AllUsers></AllUsers>
      },
    ]
  }
]);

export default router;