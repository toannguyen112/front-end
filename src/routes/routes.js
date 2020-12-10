import React from "react";
import Admin_login_screen from "../admin/Admin_login_screen";
import Admin_home_screen from "../admin/Admin_home_screen";

import HomePage from "../screens/HomePage";
import DetailPage from "../screens/DetailPage";

import OrderPage from "../screens/OrderPage";
import OrderCheck from "../screens/OrderCheck";
import Profile from "../screens/Profile";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />,
    },
    {
        path: "/detail/:id",
        main: () => <DetailPage />,
    },
    {
        path: "/order",
        exact: true,
        main: () => <OrderPage />,
    },
    {
        path: "/profile",
        exact: true,
        main: () => <Profile />,
    },
    {
        path: "/order/checkout",
        exact: true,
        main: () => <OrderCheck />,
    },
    {
        path: "/admin/login",
        exact: true,
        main: () => <Admin_login_screen />,
    },
    {
        path: "/admin/home",
        exact: true,
        main: () => <Admin_home_screen />,
    },
];

export default routes;
