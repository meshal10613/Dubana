import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import BeAMember from "../Pages/BeAMember";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/beAMember",
                element: <BeAMember/>
            }
        ]
    },
]);