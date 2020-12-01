import React from 'react'

export default function CartItem() {
    return (
        <li className="item__cart">
            <div className="row">
                <div className="col-4">
                    <div className="item__cart__img">
                        <img src="https://images.www.fendi.com/images/h2a/hfe/9047024893982/8AH014B08F0CFK_01_small-grey#cart" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="item__cart_des">
                        <div className="title_product">
                            FF-OHRRINGE IN KLEIN
                    </div>
                        <div className="price">
                            € 590,00
                    </div>
                        <div className="amount">
                            Menge: 1
                    </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
