import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const styleImage = {
    display: "flex",
    alignItems: "center",
    height: "100%",
};
export default function TabCart({ closeTab }) {
    const listCart = useSelector((state) => state.cart);
    const close = () => {
        closeTab(false);
    };
    const showCartItem = () => {
        return listCart.map((item, index) => {
            return <CartItem product={item} key={index} />;
        });
    };
    return (
        <div className="tab__cart">
            <div className="overplay" onClick={() => close()}></div>
            {listCart.length > 0 ? (
                <div className="tab__cart__content">
                    <h4 className="tab_title">Giỏ hàng </h4>
                    <ul className="list_item_cart">{showCartItem()}</ul>
                    <div className="order">
                        <div className="text_sum">TỔNG CỘNG: € 590,00</div>
                        <div className="button_order">Tiếp tục với đơn đặt hàng</div>
                        <p className="order_view">Hoặc xem qua giỏ hàng của bạn</p>
                    </div>
                </div>
            ) : (
                    <div className="tab__cart__content ">
                        <div className="image_empty" style={styleImage}>
                            <img
                                className="img-fluid"
                                src="https://bizweb.dktcdn.net/100/328/680/themes/682739/assets/empty-cart.png?1593137430857"
                                alt=""
                            />
                        </div>
                    </div>
                )}
        </div>
    );
}
