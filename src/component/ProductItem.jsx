import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ productitem }) {
    return (
        <div className="item" style={{ textAlign: "center" }}>
            <img style={{ height: "18em" }} className="img-fluid" src={productitem.image} alt="" />
            <div className="detail" style={{ padding: "20px" }}>
                <p className="product_name">{productitem.name}</p>
                <p className="price">€ {productitem.price}</p>
                <p className="status">{productitem.status}</p>
                <Link replace={false}
                    to={`/detail/${productitem._id}`}
                    className="discover"
                    style={{
                        borderRadius: "3.75rem",
                        padding: "10px 30px",
                        backgroundColor: "white",
                        cursor: "pointer",
                        border: "0.75px solid black",
                        color: "black"
                    }}
                >
                    Chi Tiết
          </Link>
            </div>
        </div>
    );
}
