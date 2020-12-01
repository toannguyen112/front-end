import React from "react";
import Header from "../component/Header";
import OwlCarousel from "react-owl-carousel";
import ProductItem from "../component/ProductItem";
import moduleName from '../component/Footer'
import Footer from "../component/Footer";
import ViewdProducts from "../component/ViewdProducts";
export default function DetailPage() {
    return (
        <div className="DetailPage">
            <Header />
            <div className="DetailPage__content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                        </div>
                        <div className="col-md-2">
                            <div className="Detail__left">
                                <ul className="Detail__left__list__image">
                                    <li className="Detail__left__list__image__item">
                                        <img
                                            className="Detail__left__list__image__item__content active"
                                            src="https://luxshopping.vn/Uploads/_Temp_/UploadsNewsomega-constellation-123-55-38-21-52-007-co-axial-38mmpng_60_80.jpg"
                                            alt=""
                                        />
                                    </li>
                                    <li className="Detail__left__list__image__item">
                                        <img
                                            className="Detail__left__list__image__item__content"
                                            src="https://luxshopping.vn/Uploads/_Temp_/UploadsNewsconstellation-123-55-38-21-52-007-co-axial-38mmjpg_60_80.jpg"
                                            alt=""
                                        />
                                    </li>
                                    <li className="Detail__left__list__image__item">
                                        <img
                                            className="Detail__left__list__image__item__content"
                                            src="https://luxshopping.vn/Uploads/_Temp_/UploadsImagesdsc-0390png_60_80.jpg"
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="Detail__center">
                                <img
                                    className="Detail__center__image img-fluid"
                                    src="https://luxshopping.vn/Uploads/_Temp_/UploadsNewsomega-constellation-123-55-38-21-52-007-co-axial-38mmpng_540_660.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="Detail__right">
                                <div className="Detail__right__logo">
                                    <img
                                        src="https://luxshopping.vn/Uploads/Images/luxshoppingvn6-1.png"
                                        alt=""
                                        className="Detail__right__logo__content"
                                    />
                                </div>
                                <div className="Detail__right__des">
                                    <p className="product_name">OMEGA CONSTELLATION</p>
                                    <p className="product_code">
                                        123.55.38.21.52.007 CO‑AXIAL 38MM
                  </p>
                                    <p className="product_number">MSP: 61426</p>
                                    <div className="price">
                                        <span className="price_old">864,500,000</span>
                                        <span className="price_new">838,565,000 VNĐ</span>
                                    </div>
                                </div>
                                <div className="buttonMoreInfo">
                                    <button
                                        className="button_bg_gray__color"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#contentId"
                                        aria-expanded="false"
                                        aria-controls="contentId"
                                    >
                                        Thông tin chi tiết
                  </button>
                                    <div className="collapse" id="contentId">
                                        <div className="text-left">
                                            Omega Constellation 12355382152007 Automatic 38mm
                                            DESCRIPTION The especially dramatic and enduring design
                                            concept of the OMEGA Constellation line is characterized
                                            by its famous “Griffes”, or claws, and striking dials.
                                            This model features a sun-brushed silver dial with
                                            diamond-set indexes, a date window at the 3 o'clock
                                            position and a scratch-resistant sapphire crystal. The
                                            bezel, with its diamond-set Roman numerals, is mounted on
                                            a 38 mm 18K red gold case, and is presented on a matching
                                            bracelet. At the heart of this timepiece is the OMEGA
                                            Co-Axial calibre 8501, visible through the transparent
                                            caseback. FEATURES Diamonds Chronometer Date Transparent
                                            case back Bracelet: red gold Between Lugs: 25 mm Case: Red
                                            gold Case Diameter: 38 mm Dial colour: Silver Crystal:
                                            Domed scratch-resistant sapphire crystal with
                                            anti-reflective treatment on both sides Water resistance:
                                            10 bar (100 metres / 330 feet) Self-winding movement with
                                            Co-Axial escapement. Free sprung-balance, 2 barrels
                                            mounted in series, automatic winding in both directions.
                                            Oscillating mass and balance bridge in red gold. Luxury
                                            finish with exclusive Geneva waves in arabesque.
                    </div>
                                    </div>
                                </div>
                                <div className="buttonMoreInfo">
                                    <button
                                        className="button_bg_gray__color"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#contentId2"
                                        aria-expanded="false"
                                        aria-controls="contentId"
                                    >
                                        Thông tin thêm
                  </button>
                                    <div className="collapse" id="contentId2">
                                        <ul className="list_more text-left">
                                            <li className="list_more_item">
                                                {" "}
                        Sản phẩm nhập khẩu chính hãng.
                      </li>
                                            <li className="list_more_item">
                                                Vận chuyển miễn phí toàn quốc.
                      </li>
                                            <li className="list_more_item">Giao hàng trong ngày.</li>
                                            <li className="list_more_item">
                                                Thanh toán sau khi nhận hàng.
                      </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="list__icon__social">
                                    <li className="list__icon__social__item">
                                        <i className="fab fa-facebook-f" />
                                    </li>
                                    <li className="list__icon__social__item">
                                        <i className="fab fa-twitter" />
                                    </li>
                                    <li className="list__icon__social__item">
                                        <i className="fab fa-google-plus-g" />
                                    </li>
                                    <li className="list__icon__social__item">
                                        <i class="fas fa-envelope"></i>
                                    </li>
                                </ul>
                                <div className="order_box">
                                    <button className="order__button">Đặt hàng</button>
                                    <button className="moreContact">Tư vấn thêm</button>
                                </div>
                                <div className="payment">
                                    <button className="payment__button_left ">
                                        Thanh toán online
                  </button>
                                    <button className="payment__button_right ">Trả góp 0%</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div div className="SimilarProducts" style={{ padding: "50px 0" }} >
                <div className="container">
                    <h4 className="text-center my-4">SẢN PHẨM TƯƠNG TỰ</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                center
                                margin={10}
                                nav
                                dots
                                autoplay
                            >
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
            <ViewdProducts />
            <Footer />
        </div>
    );
}
