import React from 'react'
import Moment from "react-moment";
import { Button, Steps } from "antd";
const { Step } = Steps

const styleImage = {
    width: "50px",
    height: "50px"
}

const showButtonCancleOrder = (active) => {
    return !active ? (<Button style={{ marginLeft: "5px" }}>
        Hủy đơn hàng
    </Button>) : ""
}

export default function Order_Checkout_Item({ order }) {
    console.log(order.list_product);
    return (
        <li className="order_list_item">
            <div className="order_list_item-header">
                <h5>Đơn hàng :<span className="idOrder"> {order._id} </span></h5>
                <h6 className="timeOrder" >
                    <Moment format="YYYY/MM/DD">
                        {order.createdAt}
                    </Moment>
                </h6>
                <Button danger>
                    Chi tiết đơn hàng
                </Button>
                {showButtonCancleOrder(order.active)}
            </div>
            <div className="order_list_item-body">
                <div className="step">
                    <Steps progressDot current={!order.active ? 1 : 2}>
                        <Step title="Đã đặt hàng" />
                        <Step title="Đơn hàng đang xử lý" />
                        <Step title="Đơn hàng đang được giao" />
                        <Step title="Đã thanh toán" />
                    </Steps>



                </div>
                {order.list_product.map((item, index) => {
                    return (
                        <div className="order__products">
                            <div className="row">
                                <div className="col-md-1">
                                    <div className="order__products__image">
                                        <img style={styleImage} src={item.product_image} alt="" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="order__products__name">
                                        {item.name}
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="order__products__price">
                                        {item.price}
                                    </div>
                                </div>
                                <div className="col-5">
                                    <p className="qty">Qty : {item.amount} </p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </li>
    )
}
