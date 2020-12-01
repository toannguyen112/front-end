import React, { Fragment, useState, useReducer, useEffect } from "react";
import { Modal, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import allActions from "../../redux/action";
const { TextArea } = Input;

const user = JSON.parse(localStorage.getItem("currentUser"));
export default function Tab_products() {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

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
                                <h6>Name</h6>
                                <input
                                    name="name"
                                    value={userInput.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="price">
                                <h6>Price</h6>
                                <input
                                    name="price"
                                    value={userInput.price}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="categories">
                                <h6>categories</h6>
                                <input
                                    name="categories"
                                    value={userInput.categories}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="rate">
                                <h6>rate</h6>
                                <input
                                    name="rate"
                                    value={userInput.rate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="image">
                                <h6>Image</h6>
                                <input
                                    name="image"
                                    value={userInput.image}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="status">
                                <h6>status</h6>
                                <input
                                    name="status"
                                    value={userInput.status}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="discount">
                                <h6>discount</h6>
                                <input
                                    name="discount"
                                    value={userInput.discount}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="des">
                                <h6>Description</h6>
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
                Delete All
      </Button>
            <Fragment>
                {!products.length ? (
                    <div className="noHavingProduct text-center ">No Having Products</div>
                ) : (
                        <Fragment>
                            <h2>Products</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Category</th>

                                        <th scope="col">Status</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((prod, index) => {
                                        return (
                                            <tr key={prod._id}>
                                                <th scope="row"> {index + 1} </th>
                                                <td> {prod.name} </td>
                                                <td> {prod.description} </td>
                                                <td> {prod.price} </td>
                                                <td> {prod.categories} </td>

                                                <td>{prod.status}</td>
                                                <td>
                                                    <img
                                                        style={{ width: "50px", height: "50px" }}
                                                        src={prod.image}
                                                        alt=""
                                                    />
                                                </td>
                                                <td>
                                                    <Button
                                                        danger
                                                        danger
                                                        onClick={() => handleDelete(prod._id)}
                                                    >
                                                        Delete
                        </Button>
                                                    <Button
                                                        primary
                                                        className="ml-2"
                                                        onClick={() => handleUpadte(prod._id)}
                                                    >
                                                        Update
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
