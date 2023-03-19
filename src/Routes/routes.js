import Main from "../Main/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Alliance from "../Pages/Alliance/Alliance.js";
import Contact from "../Pages/Contacts/Contact";
import Home from "../Pages/Home/Home";
import Pricing from "../Pages/Pricing/Pricing";
import Products from "../Pages/Products/Products";
import SignIn from "../Pages/SignIn/SignIn";
import UseCase from "../Pages/UseCase/UseCase";

const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h1> 404 not found</h1>,
        children: [
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/Products',
                element:<Products></Products>
            },
            {
                path: '/usecase',
                element:<UseCase></UseCase>
            },
             
            {
                path: '/pricing',
                element:<Pricing></Pricing>
            },
            {
                path: '/about',
                element:<AboutUs></AboutUs>
            },
            {
                path: '/alliance',
                element:<Alliance></Alliance>
            },
            {
                path: '/Contact',
                element:<Contact></Contact>
            },
            {
                path: '/login',
                element:<SignIn></SignIn>
            },
             
        ]
}

])

export default router;