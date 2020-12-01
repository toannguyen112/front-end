import React, { useState } from "react";
import Login from "../screens/Login";
import TabCart from "./TabCart";

export default function Header() {
    const [showLogin, setshowLogin] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const closeTab = () => {
        setShowCart(false);
    }

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
                            <i class="fas fa-search icon_search"></i>
                        </div>
                    </div>
                    <div className="header_center"></div>
                    <div className="header_right">
                        <div className="header_right_content">
                            <i
                                class="icon_right fas fa-user icon_user"
                                onClick={() => setshowLogin(!showLogin)}
                            ></i>
                            <i
                                class="icon_right fas fa-shopping-basket"
                                onClick={() => setShowCart(!showCart)}
                            ></i>
                        </div>
                    </div>

                </div>
                {showLogin ? <Login /> : ""}
            </div>
            {showCart ? <TabCart closeTab={closeTab} /> : ""}
        </header>
    );
}
