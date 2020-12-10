import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../redux/action";
import Login from "../screens/Login";
import TabCart from "./TabCart";
import axios from "axios";
import _ from "lodash";
import Costomer_service from "../services/costomer_service,";
import { Link, useHistory } from "react-router-dom";
let costomer_service = new Costomer_service();
export default function Header() {
    const [showLogin, setshowLogin] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const closeTab = () => {
        setShowCart(false);
    };

    const logOut = async () => {
        let costomer = JSON.parse(localStorage.getItem("currentUser"));

        const tokenCostomer = costomer["token"];
        console.log(tokenCostomer);
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
        setshowLogin(false);
        localStorage.removeItem("currentUser");
        dispatch(allActions.userActions.logOut());
        history.push("/");
    };
    const closeLogin = () => {
        setshowLogin(!showLogin);
    };
    const showLoginUser = (user) => {
        let costomer = JSON.parse(localStorage.getItem("currentUser"));

        if (_.isEmpty(user) && !costomer) {
            return (
                <div className="user">
                    <i
                        className="icon_right fas fa-user icon_user"
                        onClick={() => setshowLogin(!showLogin)}
                    ></i>
                </div>
            );
        } else {
            return (
                <div className="user_login">
                    <div className="dropdown">
                        <button
                            className="btn  dropdown-toggle mr-3"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Hi! Toan
            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <Link to="/profile" class="dropdown-item" type="button">
                                Profile
              </Link>
                            <Link
                                to="/order/checkout"
                                className="dropdown-item"
                                type="button"
                            >
                                Đơn hàng
              </Link>

                            <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => logOut()}
                            >
                                Đăng xuất
              </button>
                        </div>
                    </div>
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
                    <div className="header_center"></div>
                    <div className="header_right">
                        <div className="header_right_content d-flex">
                            {showLoginUser(user)}
                            <div className="cart">
                                <span className="numberCart"> {cart.length} </span>
                                <i
                                    className="icon_right fas fa-shopping-basket icon_cart"
                                    onClick={() => setShowCart(!showCart)}
                                ></i>
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
