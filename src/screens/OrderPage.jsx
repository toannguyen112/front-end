import React, { useReducer, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "../component/OrderItem";
import Axios from "axios";
import swal from "sweetalert";
import allActions from "../redux/action";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";
export default function OrderPage() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [showOrderSuccess, setShowOrderSuccess] = useState(false);

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name_costomer_order: "",
            address: "",
            phone: "",
            age: 20,
            email: "",
            payment: "",
        }
    );
    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    };

    const handleOrder = async () => {
        const orderData = {
            address: userInput.address,
            name_costomer_order: userInput.name_costomer_order,
            phone: userInput.phone,
            email: userInput.email,
            age: userInput.age,
            payment: "Trả tiền mặt khi giao hàng",
            active: false,
        };
        let costomer = JSON.parse(localStorage.getItem("currentUser"));
        try {
            const tokenCostomer = costomer["token"];
            const res = await Axios.post(
                "https://api-ban-hang.herokuapp.com/order",
                orderData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + tokenCostomer,
                    },
                }
            );
            if (res.data) {
                dispatch(allActions.cartAction.deleteAllCart());
                setShowOrderSuccess(true);
            }
        } catch (error) {
            swal({ title: "Yêu cầu đăng nhập" });
        }
    };

    const showMessageOrderSuccess = () => {
        if (showOrderSuccess) {
            return (
                <Result
                    status="success"
                    title="Đặt hàng thành công"
                    subTitle="Số đơn hàng: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                    extra={[
                        <Button type="primary" key="console">
                            <Link to="/order/checkout">Tới đơn hàng</Link>
                        </Button>,
                        <Button key="buy">
                            <Link to="/">Tiếp tục mua</Link>
                        </Button>,
                    ]}
                />
            );
        } else {
            return (
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-lg-4 ">
                        <div className="Order__info">
                            <h4 className="title">Thông tin khách hàng</h4>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name_costomer_order"
                                            id
                                            className="form-control"
                                            placeholder="Họ và Tên"
                                            aria-describedby="helpId"
                                            onChange={handleChange}
                                            value={userInput.name}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phone"
                                            id
                                            className="form-control"
                                            placeholder="Điện thoại"
                                            aria-describedby="helpId"
                                            onChange={handleChange}
                                            value={userInput.phone}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            id
                                            className="form-control"
                                            placeholder="Email"
                                            aria-describedby="helpId"
                                            onChange={handleChange}
                                            value={userInput.email}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="address"
                                            id
                                            className="form-control"
                                            placeholder="Địa chỉ"
                                            aria-describedby="helpId"
                                            onChange={handleChange}
                                            value={userInput.address}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <select className="form-control" id="sel1">
                                    <option>Tỉnh / thành phố</option>
                                    <option> Bà Rịa Vũng Tàu </option>
                                    <option> TP.HCM </option>
                                    <option> BẠC Liêu </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 ">
                        <div className="Order__pay">
                            <h4 className="title">Thanh toán</h4>
                            <div className="Order__pay__content">
                                <div className="Order__pay__content__title">
                                    Thanh toán chuyển khoản
                </div>
                                <div className="Order__pay__content__box">
                                    Quý khách có thể thực hiện toán chuyển khoản bằng các tài
                                    khoản ngân hàng nội địa hoặc quốc tế. * Sau khi đặt hàng, tư
                                    vấn viên của Luxury Shopping sẽ chủ động liên hệ để hướng dẫn
                                    cụ thể cho Quý khách hàng.
                </div>
                                <div className="Order__pay__content__title">
                                    Thanh toán khi giao hàng (COD)
                </div>
                                <div className="Order__pay__content__box">
                                    Giao hàng trên phạm vi toàn quốc.
                  <br />
                  Quý khách nhận hàng, kiểm tra và thanh toán thông qua các đối
                  tác vận chuyển của Luxury Shopping.
                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 ">
                        <div className="Order__order">
                            <h4 className="Order__order__title">Đơn hàng</h4>
                            <div className="Order__order__content">
                                <ul className="listOrder">
                                    {cart.map((item, index) => {
                                        return <OrderItem product={item} key={index} />;
                                    })}
                                </ul>
                                <div className="code">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <input
                                                className="input_code"
                                                placeholder="Mã khuyến mãi"
                                            ></input>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <button type="button" className="apply">
                                                Áp dụng
                      </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="Provisional">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <span className="Provisional__title">Tạm tính</span>
                                            <p className="Provisional__title__freee">
                                                Miễn phí vận chuyển toàn quốc
                      </p>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="Provisional__price">976,694,600</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="total">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="total__title">Tổng cộng</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="total__price">976,694,600</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="continue">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="continue__title"> Tiếp tục mua sắm</div>
                                        </div>
                                        <div className="col-7">
                                            <button
                                                style={{ cursor: "pointer" }}
                                                className="total__price btn__order"
                                                onClick={handleOrder}
                                            >
                                                Đặt hàng
                      </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
    return (
        <div className="Order">
            <Header />
            <Nav />
            <div className="Order__content">
                <div className="container">{showMessageOrderSuccess()}</div>
            </div>
            <div className="More">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="More--qrcode">
                                <img
                                    className="img-fluid"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="More--address">
                                <p className="More--address--text">
                                    VIET NAM GENUINE IMPORT EXPORT USA CO.,LTD
                </p>
                                <div className="">
                                    331 Nguyen Dinh Chieu St., Ward 5, Dist.3, HCMC
                  <br />
                  Tel: 1800 0091 | 028-3833-9999
                  <br />
                  Customer care: 1800 0091
                  <br /> Email: contact@luxshopping.vn
                  <br /> Tax code: 0312756049
                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="More--map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.689306057136!2d106.72724121474447!3d10.835071661071412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e0e1e1ce71%3A0x6616c714a53789d8!2zxJAuIFBo4bqhbSBWxINuIMSQ4buTbmcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1606992844539!5m2!1svi!2s"
                                    width={350}
                                    height={300}
                                    frameBorder={0}
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex={0}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
