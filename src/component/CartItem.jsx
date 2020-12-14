import React from 'react'

export default function CartItem({ product }) {
    return (
        <li className="item__cart">
            <div className="row">
                <div className="col-4">
                    <div className="item__cart__img">
                        <img src={product.product_image} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="item__cart_des">
                        <div className="title_product">
                            {product.name}
                        </div>
                        <div className="price">
                            € {product.price}
                        </div>
                        <div className="amount">
                            Số lượng:  {product.amount}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
