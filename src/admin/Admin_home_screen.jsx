import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "antd";

import Tab_products from "./component/Tab_products";
import Tab_orders from "./component/Tab_orders";
import Tab_users from "./component/Tab_users";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../redux/action";

const types = [

    {
        txt: "Products",
        icon: "fas fa-shopping-cart",
    },
    {
        txt: "Orders",
        icon: "far fa-money-bill-alt",
    },
    {
        txt: "Users",
        icon: "fas fa-users",
    },
];
export default function Admin_home_screen() {
    const [toggleSearch, settoggleSearch] = useState(false);
    const [active, setactive] = useState(types[0]);
    const [loading, setLoading] = useState(true);
    let history = useHistory();
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders);
    const user = JSON.parse(localStorage.getItem("currentUser"));



    useEffect(() => {
        const products = "https://api-ban-hang.herokuapp.com/products";
        const orders = "https://api-ban-hang.herokuapp.com/order";
        const users = "https://api-ban-hang.herokuapp.com/costomer";
        const reqProducts = axios.get(products);
        const reqOrders = axios.get(orders, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + user.token,
            },
        });
        const reqUser = axios.get(users, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + user.token,
            },
        });
        axios.all([reqProducts, reqOrders, reqUser]).then(axios.spread((...responses) => {
            const reqProducts = responses[0];
            const reqOrders = responses[1];
            const reqUser = responses[2];
            dispatch(allActions.productsAction.setProducts(reqProducts.data));
            dispatch(allActions.orderAction.setOrders(reqOrders.data));
            dispatch(allActions.costomerAction.setCostomer(reqUser.data));


        })).catch((err) => {
            console.log(err);
        })


    }, [])

    const showTab = (active) => {
        if (active === types[0]) {
            return <Tab_products />;
        } else if (active === types[1]) {
            return <Tab_orders />;
        } else if (active === types[2]) {
            return <Tab_users />;
        }
    };

    const logOut = async () => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        const token = user.token;
        await axios.post(
            "https://api-ban-hang.herokuapp.com/admin/dangxuat",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        localStorage.removeItem("currentUser");
        dispatch(allActions.userActions.logOut());

        history.push("/admin/login");
    };
    return (
        <div className="Admin_home_container">
            {/* header  */}
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="header_left">
                                <p className="intro">ADMINBSB - MATERIAL DESIGN</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="header_right">
                                <ul className="list_icon">
                                    <li className="icon_cotent">
                                        <i
                                            className="fas fa-search"
                                            onClick={() => settoggleSearch(true)}
                                        ></i>
                                    </li>
                                    <li className="icon_cotent"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* search  */}
                {toggleSearch ? (
                    <div className="search__container">
                        <div className="search_right">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                className="input_search"
                                placeholder="START TYPING..."
                            />
                        </div>
                        <div className="search_left">
                            <div className="close" onClick={() => settoggleSearch(false)}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>
                ) : (
                        ""
                    )}
            </header>

            <div className="Admin_body">
                <div className="Admin_body_left">
                    <div className="user_info">
                        <div className="user_avatar">
                            <img
                                className="user_avatar_image"
                                src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg"
                                alt=""
                            />
                        </div>
                        <div className="user_name ">
                            John Doe{" "}
                            <Button
                                className="ml-2"
                                type="primary"
                                danger
                                onClick={() => logOut()}
                            >
                                Đăng xuất
              </Button>
                        </div>
                        <p className="user_email ">john.doe@example.com</p>
                    </div>
                    <div className="navigation">
                        {loading ? (
                            <ul className="list_navigaion">
                                {types.map((type, index) => {
                                    return (
                                        <li key={index}
                                            className="list_navigaion_item"
                                            key={index}
                                            onClick={() => setactive(type)}
                                        >
                                            <i className={type.icon}></i>
                                            <p className="list_navigaion_item_name">
                                                {type.txt}{" "}
                                                {type.txt === "Orders" ? (
                                                    <span style={{ color: "blue" }}>{orders.length}</span>
                                                ) : (
                                                        ""
                                                    )}
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                                <p>Loading...</p>
                            )}
                    </div>
                    <div className="footer">
                        <div className="copyright">
                            © 2016 - 2017{" "}
                            <span style={{ color: "#FFEB3B " }}>
                                AdminBSB - Material Design.
                            </span>
                        </div>
                        <div className="version">Version: 1.0.5</div>
                    </div>
                </div>
                <div className="Admin_body_right">{showTab(active)}</div>
            </div>
        </div>
    );
}
