import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import BeAMember from "../Pages/BeAMember";
import Home from "../Pages/Home";
import Member from "../Pages/Member";

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
            },
            {
                path: "/members",
                element: <Member/>
            }
        ]
    },
]);