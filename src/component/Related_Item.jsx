import React from 'react'

export default function Related_Item() {
    return (
        <li className="item__cart">
            <div className="row">
                <div className="col-4">
                    <div className="item__cart__img">
                        <img src="https://images.www.fendi.com/images/h87/h64/9067394236446/8BN321A6V3F1CMP_01_small-grey#cart" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="item__cart_des">
                        <div className="title_product">
                            VERSAND INNERHALB 30 TAGEN AM SPÄTESTENS AB
                        </div>
                        <div className="price">
                            € 100
                        </div>
                        <div className="amount">
                            Số lượng:  1
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
