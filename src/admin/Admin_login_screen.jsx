import Axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../redux/action/index";
import React from "react";

import "./css/Admin_login_screen.css";
export default function Admin_login_screen() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const currentUser = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            email: "toanadmin@gmail.com",
            password: "123456789",
        };
        const result = await Axios.post(
            "https://api-ban-hang.herokuapp.com/admin/dangnhap",
            data
        );
        if (!result.data) {
            return console.log("Đăng nhập thất bại");
        }
        console.log("Đăng nhập thành công");
        dispatch(allActions.userActions.setUser(result.data));
        history.push("/admin/home");

    };
    return (
        <div className="admin_login_container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2" />
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true" />
                        </div>
                        <div className="col-lg-12 login-title">ADMIN PANEL</div>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={submit}>
                                    <div className="form-group">
                                        <label className="form-control-label">USERNAME</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text"></div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="submit" className="btn btn-outline-primary">
                                                LOGIN
                      </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}
