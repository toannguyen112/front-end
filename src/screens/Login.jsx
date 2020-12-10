import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "../redux/action/index";
import axios from "axios";
export default function Login({ closeLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const submitLogin = async (event) => {
        event.preventDefault();
        const loginUser = {
            email: "nguyencongtoana1nhvt@gmail.com",
            password: "1234567",
        };
        const user = await axios.post(
            "http://api-ban-hang.herokuapp.com/costomer/dangnhap",
            loginUser
        );

        closeLogin();
        dispatch(allActions.userActions.setUser(user.data));
    };
    return (
        <div className="login">
            <div className="login_content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="loginTitle">Đăng nhập vào tài khoản của bạn</h3>
                            <p className="des">
                                Vui lòng nhập email và mật khẩu của bạn để truy cập tài khoản và
                                sở thích mua sắm của bạn.
              </p>
                            <form onSubmit={submitLogin}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={email}
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        value={password}
                                        name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Đăng Nhập
                </button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h3 className="loginTitle">ĐĂNG KÝ NGAY</h3>
                            <p className="des">
                                Tạo tài khoản và tận hưởng trải nghiệm mua sắm cá nhân:
              </p>
                            <ul className="list_icon_social__login">
                                <li className="list_icon_social__login">
                                    <i className="fad fa-envelope" />
                                    <span className=" ml-3 icon_text">Nhận bản tin </span>
                                </li>
                                <li className="list_icon_social__login">
                                    <i className="fad fa-heart"></i>
                                    <span className=" ml-3 icon_text">
                                        Tạo một danh sách mong muốn
                  </span>
                                </li>
                                <li className="list_icon_social__login">
                                    <i className="fad fa-envelope"></i>
                                    <span className=" ml-3 icon_text"> Tăng tốc độ mua sắm</span>
                                </li>
                                <li className="list_icon_social__login">
                                    <i className="fad fa-envelope"></i>
                                    <span className=" ml-3 icon_text">
                                        Theo dõi đơn đặt hàng và trả lại
                  </span>
                                </li>
                            </ul>
                            <p className="text_bottom">
                                Trước khi bạn cung cấp cho chúng tôi dữ liệu cá nhân của mình,
                                vui lòng đọc chính sách bảo mật của Fendi & Me
              </p>
                            <button className="btn btn-primary">Đăng Ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
