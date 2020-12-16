import Axios from "axios";
import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../redux/action/index";
import { Form, Input, Button, Checkbox } from "antd";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
export default function Admin_login_screen() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const currentUser = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();

    const onFinish = async () => {
        const data = {
            email: email,
            password: password,
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

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className="admin_login_container">
            <div className="container">
                <div className="row " style={{ margin: "0 auto" }}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                { required: true, message: "Please input your username!" },
                            ]}
                        >
                            <Input onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: "Please input your password!" },
                            ]}
                        >
                            <Input.Password onChange={(e) => setPassword(e.target.value)} />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
              </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}
