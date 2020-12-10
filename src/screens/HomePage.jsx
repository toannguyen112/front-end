import React, { Fragment, useEffect, useState } from "react";

import Carousel from "../component/Carousel";
import Collection from "../component/Collection";
import Famous_brand from "../component/Famous_brand";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Nav from "../component/Nav";
import axios from "axios";
import Loading from "../component/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../redux/action";
export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const listProductsRedux = useSelector((state) => state.products);
    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        setLoading(false);
        const res = await axios.get("https://api-ban-hang.herokuapp.com/products");
        dispatch(allActions.productsAction.setProducts(res.data));
        setLoading(true);
    };

    return (
        <div className="HomePage">
            <Header />
            <Nav />
            <Carousel />
            {loading ? (
                <Fragment>
                    <Collection products={listProductsRedux} />
                    <Collection products={listProductsRedux} />
                </Fragment>
            ) : (
                    <Loading />
                )}
            <Famous_brand brand="Thương hiệu nổi tiếng" />
            <Famous_brand brand="Thương hiệu Ý" />
            <Footer />
        </div>
    );
}
