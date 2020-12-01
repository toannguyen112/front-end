import React from 'react'
import CartItem from './CartItem'

export default function TabCart({ closeTab }) {

    const close = () => {
        closeTab(false);
    }
    return (
        <div className="tab__cart" >
            <div className="overplay" onClick={() => close()}  ></div>
            <div className="tab__cart__content">
                <h4 className="tab_title">Giỏ hàng </h4>
                <ul className="list_item_cart">
                    <CartItem />
                    <CartItem />

                </ul>
                <div className="order">
                    <div className="text_sum">
                        TỔNG CỘNG: € 590,00
            </div>
                    <div className="button_order">
                        Tiếp tục với đơn đặt hàng
            </div>
                    <p className="order_view" >
                        Hoặc xem qua giỏ hàng của bạn
            </p>
                </div>

            </div>
        </div>
    )
}
