import { Button } from "antd";
import Axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/action";
import { Table, Tag, Space } from "antd";
import Moment from "react-moment";
export default function Tab_orders() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders);
    console.log(orders);
    const columns = [
        {
            title: "Khách hàng",
            dataIndex: "name_costomer_order",
            key: "name_costomer_order",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Sản phẩm",
            dataIndex: "list_product",
            key: "list_product",
            render: (list_product) =>
                list_product.map((prod, index) => {
                    return (
                        <div>
                            <img src={prod.product_image} style={{ width: "50px" }} />
                            <p>{prod.name}</p>
                        </div>
                    );
                }),
        },

        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Thanh toán",
            dataIndex: "payment",
            key: "payment",
        },
        {
            title: "Ngày khách đặt hàng",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text) => <Moment format="YYYY/MM/DD">{text}</Moment>,
        },

        {
            title: "Trạng thái",
            dataIndex: "active",
            key: "active",
            render: (text) => <span> {text ? "Đã xác nhận" : "Chờ xác nhận"} </span>
        },


        {
            title: "Thao tác",
            key: "action",
            render: (text, order) => (
                <Space size="middle">
                    <Button>Xem chi tiết</Button>
                    {!order.active ? <Button onClick={() => handleConfirmOrder(order._id)} >Xác nhận đơn hàng</Button> : ""}
                    <Button danger onClick={() => handleCancleOrder(order._id)} >Hủy Đơn Hàng</Button>
                </Space>
            ),
        },
    ];

    const handleCancleOrder = async (id) => {
        const result = await Axios.delete(
            `https://api-ban-hang.herokuapp.com/order/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
            }
        );
        dispatch(allActions.orderAction.deleteOrder(result.data._id));
    };
    const handleConfirmOrder = async (id) => {
        const data = {
            active: true,
        };
        const result = await Axios.put(
            `https://api-ban-hang.herokuapp.com/order/${id}`,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
            }
        );
        dispatch(allActions.orderAction.confirmOrder(result.data._id));
    };
    return (
        <div className="tab_orders">
            <Table columns={columns} dataSource={orders} />
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Costomer</th>
                        <th>Products</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Address</th>

                        <th>Payment</th>
                        <th>Date</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => {
                        return (
                            <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {order.name_costomer_order} </td>
                                <td> {order.list_product.map((prod, index) => {
                                    return (
                                        <p key={index} > - {prod.name} </p>
                                    )
                                })} </td>
                                <td> {order.age} </td>
                                <td> {order.phone} </td>
                                <td> {order.address} </td>
                                <td> {order.payment} </td>
                                <td> {Date(order.accreatedAttive)} </td>
                                <td className="d-flex" > {order.active ? <div className="">Đã Xác nhận đơn hàng</div> : <div className="d-flex">
                                    <span> Chờ xác nhận đơn hàng</span>
                                    <Button size="small" danger onClick={() => handleConfirmOrder(order._id)} >
                                        Xác nhận đơn hàng
                                    </Button>
                                </div>}  <Button size="small" onClick={() => handleCancleOrder(order._id)} >Hủy Đơn Hàng</Button> </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */}
        </div>
    );
}
