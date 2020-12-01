import React from 'react'
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import ProductItem from './ProductItem';
export default function Collection() {
    return (
        <div className="collection">
            <div className="container">
                <div className="collection_name">
                    <span className="day">09</span>
                    <p className="month" >
                        NOVEMBER
                    </p>
                    <h3 className="name_section" >
                        Nam</h3>
                </div>
                <OwlCarousel className="owl-theme" loop margin={10} nav items={4}>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </OwlCarousel>
            </div>
        </div>
    )
}
