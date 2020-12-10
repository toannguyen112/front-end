import React, { Fragment, useState, useReducer, useEffect } from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import allActions from "../../redux/action";

let user = JSON.parse(localStorage.getItem("currentUser"));
export default function Tab_products() {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [list_product, setList_product] = useState([]);
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

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setUserInput({ [name]: value });
    };
    const addNew = async () => {
        console.log("add");
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
        console.log(id);
    };
    return (
        <div className="tab_products">
            <Button type="primary" onClick={() => setVisible(true)}>
                New Product
      </Button>

            <Modal
                title=" New Product"
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
                                <h6>Tên Sản Phẩm</h6>
                                <input
                                    name="name"
                                    value={userInput.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="price">
                                <h6>Giá</h6>
                                <input
                                    name="price"
                                    value={userInput.price}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="categories">
                                <h6>Thể Loại</h6>
                                <input
                                    name="categories"
                                    value={userInput.categories}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="rate">
                                <h6>Đánh giá</h6>
                                <input
                                    name="rate"
                                    value={userInput.rate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="image">
                                <h6>Ảnh đại diện</h6>
                                <input
                                    name="image"
                                    value={userInput.image}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="status">
                                <h6>Trạng thái</h6>
                                <input
                                    name="status"
                                    value={userInput.status}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="discount">
                                <h6>Giảm giá</h6>
                                <input
                                    name="discount"
                                    value={userInput.discount}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="des">
                                <h6>Miêu Tả</h6>
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
            </Modal>
            <Button
                className="ml-2"
                type="primary"
                danger
                onClick={() => handleDeleteAll()}
            >
                Xóa tất cả
      </Button>
            <Fragment>
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
            </Fragment>
        </div>
    );
}
