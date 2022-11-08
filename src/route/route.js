import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
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
                loader:()=> fetch('http://localhost:5000/services'),
                element:<Services/>
            },
            {
                path: "/service/:id",
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
                element:<ProductDetails/>,
            },
            {
                path: "/my-reviews",
                element:<MyReviews/>,
            }
        ]
    }
])