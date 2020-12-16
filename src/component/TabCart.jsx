import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Related_Item from "./Related_Item";
const styleImage = {
    display: "flex",
    alignItems: "center",
    height: "100%",
};
export default function TabCart({ closeTab, showCart }) {
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
            <div className={showCart ? "overplay" : ""} onClick={() => close()}></div>
            <div
                className="tab__cart__content"
                style={{
                    transform: !showCart ? " translateX(100%)" : " translateX(0px)",
                    transition: " 0.2s ease-in-out",
                }}
            >
                {listCart.length > 0 ? (
                    <Fragment>
                        <h4 className="tab_title">Giỏ hàng </h4>
                        <ul className="list_item_cart">{showCartItem()}</ul>
                        <div className="order">
                            <div className="text_sum">TỔNG CỘNG: € 590,00</div>
                            <Link to="/order">
                                <div className="button_order">Tiếp tục với đơn đặt hàng</div>
                            </Link>
                            <p className="order_view">Hoặc xem qua giỏ hàng của bạn</p>
                        </div>
                        <ul className="list_item_cart" style={maxHeight}>
                            <Related_Item />
                            <Related_Item />
                            <Related_Item />
                            <Related_Item />
                            <Related_Item />
                        </ul>
                    </Fragment>
                ) : (
                        <div className="image_empty" style={styleImage}>
                            <img className="img-fluid" src="../image/empty-cart.png" alt="" />
                        </div>
                    )}
            </div>
        </div>
    );
}

const maxHeight = {
    maxHeight: "50%",
    overflowY: "scroll",
    overflowX: "hidden",
};
