import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import BeAMember from "../Pages/BeAMember";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <BeAMember/>
            }
        ]
    },
]);