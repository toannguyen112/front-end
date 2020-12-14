import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Header from "../component/Header";
import Loading from "../component/loading/Loading";
import { Steps } from "antd";
import Moment from "react-moment";
const { Step } = Steps;
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
        setLoading(true);
        setListOrder(res.data);
    };
    return (
        <Fragment>
            <Header />

            <div className="OrderCheck">
                <div className="OrderCheck__content">
                    <div className="container-fluid">
                        <div className="row">
                            {loading ? (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th> STT </th>
                                            <th> Sản phẩm</th>
                                            <th>Địa chỉ</th>
                                            <th>Ngày đặt hàng</th>

                                            <th>Hình thức thanh toán</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listOrder.length > 0
                                            ? listOrder.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td> {index + 1} </td>
                                                        <td>
                                                            <ul>
                                                                {item.list_product.map((prod, index) => {
                                                                    return <li key={index}> {prod.name} </li>;
                                                                })}
                                                            </ul>
                                                        </td>
                                                        <td> {item.address}</td>
                                                        <td>
                                                            <Moment format="YYYY/MM/DD">
                                                                {item.createdAt}
                                                            </Moment>
                                                        </td>
                                                        <td> {item.payment}</td>
                                                        <td>
                                                            <Steps current={!item.active ? 1 : 2}>
                                                                <Step title="Đã đặt hàng" />
                                                                <Step title="Đơn hàng đang xử lý" />
                                                                <Step title="Đơn hàng đang được giao" />
                                                                <Step title="Đã thanh toán" />
                                                            </Steps>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                            : "Chưa có đơn hàng nào"}
                                    </tbody>
                                </table>
                            ) : (
                                    <div style={centerLoading}>
                                        <Loading />
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
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
