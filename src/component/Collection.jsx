import React from "react";
import OwlCarousel from "react-owl-carousel";

import ProductItem from "./ProductItem";
export default function Collection({ title, products }) {

    return (
        <div className="collection">
            <div className="container">
                <div className="collection_name">
                    <span className="day">09</span>
                    <p className="month">NOVEMBER</p>
                    <h3 className="name_section"> {title} </h3>
                </div>
                <OwlCarousel className="owl-theme" loop margin={10} items={4} >
                    {products.map((productitem, index) => {
                        return <ProductItem key={index} productitem={productitem} />;
                    })}
                </OwlCarousel>
            </div>
        </div>
    );
}
