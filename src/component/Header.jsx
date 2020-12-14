import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../redux/action";
import Login from "../screens/Login";
import TabCart from "./TabCart";
import axios from "axios";
import _ from "lodash";
import { Menu, Dropdown, Avatar, Image, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Costomer_service from "../services/costomer_service,";
import { Link, useHistory } from "react-router-dom";
import Loading_Overplay from "./loading/Loading_Overplay";
import Axios from "axios";

// let costomer_service = new Costomer_service();
export default function Header() {
    const [showLogin, setshowLogin] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const userLocal = JSON.parse(localStorage.getItem("currentUser"))
        ? true
        : false;
    const userLG = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser")).costomer.email.charAt(0).toUpperCase()
        : "";

    useEffect(() => {
        if (!userLocal && _.isEmpty(user)) {
            return;
        }
        getCartCostomer();
    }, [userLocal]);
    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/profile" class="dropdown-item" type="button">
                    Hồ sơ
        </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/order/checkout" className="dropdown-item" type="button">
                    Đơn hàng
        </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/order/checkout" className="dropdown-item" type="button">
                    Lịch sử đặt hàng
        </Link>
            </Menu.Item>

            <Menu.Item danger onClick={() => logOut()}>
                Đăng xuất
      </Menu.Item>
        </Menu>
    );
    const getCartCostomer = async () => {
        let costomer = JSON.parse(localStorage.getItem("currentUser"))
            ? JSON.parse(localStorage.getItem("currentUser"))
            : null;
        const tokenCostomer = costomer["token"];
        const res = await Axios.get(
            "https://api-ban-hang.herokuapp.com/cart/costomer",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + tokenCostomer,
                },
            }
        );
        console.log(res.data);
        dispatch(allActions.cartAction.setCartCostomer(res.data));
    };

    const closeTab = () => {
        setShowCart(false);
    };

    const logOut = async () => {
        let costomer = JSON.parse(localStorage.getItem("currentUser"));

        const tokenCostomer = costomer["token"];
        setLoadingPage(false);
        await axios.post(
            "https://api-ban-hang.herokuapp.com/costomer/dangxuat",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + tokenCostomer,
                },
            }
        );
        message.success("Đăng xuất thành công");
        localStorage.removeItem("currentUser");
        setLoadingPage(true);
        setshowLogin(false);
        dispatch(allActions.userActions.logOut());
        dispatch(allActions.cartAction.deleteAllCart());
        history.push("/");
    };
    const closeLogin = () => {
        setshowLogin(!showLogin);
    };
    const showLoginUser = (user) => {
        let costomer = JSON.parse(localStorage.getItem("currentUser"));

        if (_.isEmpty(user) && !costomer) {
            return (
                <div className="user mr-2" onClick={() => setshowLogin(!showLogin)}>
                    <i className="fal fa-user icon_right icon_user" />
                </div>
            );
        } else {
            return (
                <div className="user_login">
                    <Dropdown overlay={menu}  >
                        <a
                            className="ant-dropdown-link mr-3"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>  {userLG ? userLG : ""} </Avatar> <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            );
        }
    };

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="header_content">
                    <div className="header_left">
                        <div className="search_container">
                            <input
                                type="text"
                                className="input_search"
                                placeholder="Tìm sản phẩm"
                                style={{ border: "none", width: "100%" }}
                            />{" "}
                            <i className="fas fa-search icon_search" />
                        </div>
                    </div>
                    <Link to="/">
                        <div className="header_center"></div>
                    </Link>

                    <div className="header_right">
                        <div className="header_right_content d-flex">
                            {showLoginUser(user)}
                            <div
                                className="cart"
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowCart(!showCart)}
                            >
                                {cart.length > 0 ? (
                                    <span className="numberCart"> {cart.length} </span>
                                ) : null}

                                <i className="fal fa-shopping-bag" />
                            </div>
                        </div>
                    </div>
                </div>
                {showLogin ? <Login closeLogin={closeLogin} /> : ""}
            </div>
            {showCart ? <TabCart closeTab={closeTab} /> : ""}
        </header>
    );
}
