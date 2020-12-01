import React from "react";

import Carousel from "../component/Carousel";
import Collection from "../component/Collection";
import Famous_brand from "../component/Famous_brand";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Nav from "../component/Nav";
export default function HomePage() {

    return (
        <div className="HomePage">



            <Header />
            <Nav />
            <Carousel />
            <Collection />
            <Collection />
            <Famous_brand brand="Thương hiệu nổi tiếng" />
            <Famous_brand brand="Thương hiệu Ý" />
            <Footer />






        </div>
    );
}
