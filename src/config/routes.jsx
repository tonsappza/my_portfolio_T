import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("../App"));
const MyProfile = React.lazy(() => import("../pages/Profile"));
const PageSkill = React.lazy(() => import("../pages/Skill"));
const PageExp = React.lazy(() => import("../pages/Exp"));
const PageContactMe = React.lazy(() => import("../pages/ContactMe"));
const PageNotFound = React.lazy(() => import("../pages/page404"));
const Loadings = React.lazy(() => import("../components/Loading"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <MyProfile />,
            },
            {
                path: "skill",
                element: <PageSkill />,
            },
            {
                path: "experience",
                element: <PageExp />,
            },
            {
                path: "contact",
                element: <PageContactMe />,
            },
        ],
    },
    {
        path: "*",
        element: <Loadings />,
    },
    {
        path: "loading",
        element: <PageNotFound />,
    },
])
export default router;