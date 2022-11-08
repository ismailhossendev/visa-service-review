import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import Services from "../pages/Services";

export const route = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children: [
            {
                path: "/",
                element:<Home/>,
            },
            {
                path: "/login",
                element:<Login/>,
            },
            {
                path: "register",
                element:<Register/>,
            }, 
            {
                path:'/services/add',
                loader: () => fetch('https://restcountries.com/v3.1/all'),
                element:<AddService/>
            },
            {
                path: "/services",
                element:<Services/>,
            },
            {
                path: "/service/details",
                element:<ProductDetails/>,
            }
        ]
    }
])