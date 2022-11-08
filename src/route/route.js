import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
            }
        ]
    }
])