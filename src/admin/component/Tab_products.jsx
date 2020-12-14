import React, { useState, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import allActions from "../../redux/action";
import { Table, Space, Switch, Modal, Button, Input, Upload, message } from "antd";
import { DeleteOutlined, AppstoreAddOutlined, UploadOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
let user = JSON.parse(localStorage.getItem("currentUser"));
export default function Tab_products() {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [visibleModal, setVisibleModal] = useState(false);
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: "",
            price: "",
            image: "",
            description: "",
            categories: "",
            rate: "",
            status: "",

            hidden: true,
            discount: "",
        }
    );
    const columns = [
        {
            title: "Tên Sản phẩm",
            dataIndex: "name",
            key: "name",
            render: (text) => <span>{text}</span>,
        },
        {
            title: "Hình ảnh",
            dataIndex: "image",
            key: "image",
            render: (text) => (
                <img style={{ width: "50px", height: "50px" }} src={text} alt="" />
            ),
        },
        {
            title: "Thể loại",
            dataIndex: "categories",
            key: "categories",
        },
        {
            title: "Ẩn/Hiện ",
            dataIndex: "hidden",
            key: "hidden",
            render: () => <Switch defaultChecked onChange={onChange} />,
        },
        {
            title: "Giá (VND)",
            dataIndex: "price",
            key: "price",
            render: (text) => <span>{text}</span>,
        },
        {
            title: "Trạng thái",
            key: "status",
            dataIndex: "status",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Thao tác",
            key: "action",
            render: (text, prod) => (
                <Space size="middle">
                    <Button onClick={() => handleUpadte(prod._id)}>Cập nhật</Button>
                    <Button danger onClick={() => handleDelete(prod._id)}>
                        Xóa
          </Button>
                    <Button type="primary" onClick={() => setVisibleModal(true)}>
                        Xem chi tiết
          </Button>
                    <Modal
                        title="Xem chi tiết"
                        centered
                        visible={visibleModal}
                        onOk={() => setVisibleModal(false)}
                        onCancel={() => setVisibleModal(false)}
                        width={1000}
                    >
                        <p>Name : {prod.name} </p>
                        <p>Hình ảnh : {prod.image}</p>
                        <p>Giá : {prod.price}</p>
                        <p>Trạng thái : {prod.status}</p>
                    </Modal>
                </Space>
            ),
        },
    ];
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setUserInput({ [name]: value });
    };
    const addNew = async () => {
        setVisible(false);

        const result = await Axios.post(
            "https://api-ban-hang.herokuapp.com/products",
            userInput,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
            }
        );
        dispatch(allActions.productsAction.addProduct(result.data));
    };

    const handleDelete = async (id) => {
        console.log(id);
        const result = await Axios.delete(
            `https://api-ban-hang.herokuapp.com/products/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
            }
        );
        dispatch(allActions.productsAction.deleteProduct(result.data._id));
    };
    const handleDeleteAll = async () => {
        await Axios.delete("https://api-ban-hang.herokuapp.com/products", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + user.token,
            },
        });
        dispatch(allActions.productsAction.deleteAllProducts());
    };
    const handleUpadte = (id) => {
        console.log("update");
    };
    return (
        <div className="tab_products">
            <Button
                type="primary"
                onClick={() => setVisible(true)}
                icon={<AppstoreAddOutlined />}
            >
                Thêm Sản Phẩm
      </Button>

            <Modal
                title="Thêm sản phẩm"
                centered
                visible={visible}
                onOk={() => addNew()}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="name">
                                <p>Tên Sản Phẩm</p>

                                <Input
                                    placeholder="Tên sản phẩm"
                                    name="name"
                                    value={userInput.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="price">
                                <p>Giá</p>

                                <Input
                                    placeholder="Giá"
                                    name="price"
                                    value={userInput.price}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="categories">
                                <p>Thể Loại</p>

                                <Input
                                    placeholder="Giá"
                                    name="categories"
                                    value={userInput.categories}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="rate">
                                <p>Đánh giá</p>

                                <Input
                                    placeholder="Đánh giá"
                                    name="rate"
                                    value={userInput.rate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="image">
                                <p>Ảnh đại diện</p>

                                <Input
                                    type="file"
                                    placeholder="Ảnh đại diện"
                                    name="image"
                                    value={userInput.image}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="status">
                                <p>Trạng thái</p>

                                <Input
                                    placeholder="Giá"
                                    name="status"
                                    value={userInput.status}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="discount">
                                <p>Giảm giá</p>

                                <Input
                                    placeholder="Giá"
                                    name="discount"
                                    value={userInput.discount}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="des">
                                <p>Miêu Tả</p>
                                <textarea
                                    maxLength={100}
                                    name="description"
                                    value={userInput.description}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}
                />
            </Modal>
            <Button
                className="ml-2"
                type="primary"
                danger
                onClick={() => handleDeleteAll()}
                icon={<DeleteOutlined />}
            >
                Xóa tất cả
      </Button>
            {/* <Fragment>
                {!products.length ? (
                    <div className="noHavingProduct text-center ">
                        Không có sản phẩm nào
                    </div>
                ) : (
                        <Fragment>
                            <h2>Sản Phẩm</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên Sản Phẩm</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Thể Loại</th>

                                        <th scope="col">Giá</th>
                                        <th scope="col">Trạng thái</th>
                                        <th scope="col">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((prod, index) => {
                                        return (
                                            <tr key={prod._id}>
                                                <th scope="row"> {index + 1} </th>
                                                <td> {prod.name} </td>
                                                <td>
                                                    <img
                                                        style={{ width: "50px", height: "50px" }}
                                                        src={prod.image}
                                                        alt=""
                                                    />
                                                </td>

                                                <td> {prod.categories} </td>

                                                <td> {prod.price} </td>
                                                <td>{prod.status}</td>

                                                <td>
                                                    <Button
                                                        danger
                                                        danger
                                                        onClick={() => handleDelete(prod._id)}
                                                    >
                                                        Xóa
                        </Button>
                                                    <Button
                                                        primary
                                                        className="ml-2"
                                                        onClick={() => handleUpadte(prod._id)}
                                                    >
                                                        Cập nhật
                        </Button>
                                                    <Button primary className="ml-2">
                                                        Xem chi tiết
                        </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Fragment>
                    )}
            </Fragment> */}
            <Table columns={columns} dataSource={products} />
        </div>
    );
}
