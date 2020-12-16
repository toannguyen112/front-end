import { Fragment } from "react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Nav from "../component/Nav";

import Loading from "../component/loading/Loading";
import Order_Checkout_Item from "../component/Order_Checkout_Item";

export default function OrderCheck() {
    const [listOrder, setListOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getOrder();
    }, []);
    const getOrder = async () => {
        let costomer = JSON.parse(localStorage.getItem("currentUser"));
        const tokenCostomer = costomer["token"];
        setLoading(false);
        const res = await Axios.get(
            "https://api-ban-hang.herokuapp.com/order/costomer",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + tokenCostomer,
                },
            }
        );
        console.log(res.data);
        setLoading(true);
        setListOrder(res.data);
    };
    return (
        <Fragment>
            <Header />
            <Nav />

            <div className="OrderCheck">
                <div className="OrderCheck__content">
                    <div className="container">
                        {loading ? (
                            <ul className="order__list">
                                {listOrder.length > 0 ? (
                                    listOrder.map((order, index) => {
                                        return <Order_Checkout_Item key={index} order={order} />;
                                    })
                                ) : (
                                        <div className="">Chưa có đơn hàng nào</div>
                                    )}
                            </ul>
                        ) : (
                                <div style={centerLoading}>
                                    <Loading />
                                </div>
                            )}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

const centerLoading = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "100px",
    height: "100%",
};
