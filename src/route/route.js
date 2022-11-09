import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService";
import Blog from "../pages/Blog";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import Services from "../pages/Services";
import NeedLogin from "./NeedLogin";

export const route = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        errorElement:<Error/>,
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
                element:<NeedLogin><AddService/></NeedLogin>
            },
            {
                path: "/services",
                loader:()=> fetch('https://visa-service-bakcend.vercel.app/services'),
                element:<Services/>
            },
            {
                path: "/services/:id",
                loader: ({params})=> fetch(`https://visa-service-bakcend.vercel.app/services/${params.id}`),
                element:<ProductDetails/>,
            },
            {
                path: "/my-reviews",
                element:<NeedLogin><MyReviews/></NeedLogin>,
            },
            {
                path: "/blog",
                element:<Blog/>
            }
        ]
    }
])