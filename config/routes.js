import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("../App"));
const PageSkill = React.lazy(() => import("../pages/Skill"));
const PageExp = React.lazy(() => import("../pages/Exp"));
const PageContactMe = React.lazy(() => import("../pages/ContactMe"));
const PageNotFound = React.lazy(() => import("../pages/page404"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/skill",
        element: <PageSkill />,
    },
    {
        path: "/experience",
        element: <PageExp />,
    },
    {
        path: "/contact",
        element: <PageContactMe />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
])
export default router;