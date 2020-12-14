import React from "react";

export default function OrderItem({ product }) {
    return (
        <li className="listOrder__item">
            <div className="row">
                <div className="col-2">
                    <div className="listOrder__item__image_and_delete">
                        <img src={product.product_image} alt="" className="img-fluid" />
                        <div className="deleteProduct">Xóa</div>
                    </div>
                </div>
                <div className="col-4">
                    <span className="listOrder__item__name">{product.name}</span>
                    <p className="listOrder__item__name"> Số lượng: {product.amount}</p>

                </div>
                <div className="col-6">
                    <div className="listOrder__item__price">{product.price}</div>
                </div>
            </div>
        </li>
    );
}
