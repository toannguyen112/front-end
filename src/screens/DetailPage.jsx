import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Nav from "../component/Nav";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import OwlCarousel from "react-owl-carousel";
import Footer from "../component/Footer";
import ViewdProducts from "../component/ViewdProducts";
import Loading from "../component/loading/Loading";

import Axios from "axios";
import ProductItem from "../component/ProductItem";
import allActions from "../redux/action";
import swal from "sweetalert";
import { message } from "antd";
export default function DetailPage() {
  const [productDetail, setproductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [listImageDetail, setListImageDetail] = useState([]);
  const listProductsRedux = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    getDetailProduct();
  }, []);

  const getDetailProduct = async () => {
    const id = window.location.href.split("/").reverse()[0];
    setLoading(false);
    const product = await Axios.get(
      `https://api-ban-hang.herokuapp.com/products/${id}`
    );
    setproductDetail(product.data);
    setListImageDetail(product.data["image_producst_detail"]);
    setLoading(true);
  };

  const addToCart = async (product) => {
    let costomer = JSON.parse(localStorage.getItem("currentUser"));
    if (!costomer) {
      return swal({ title: "Yêu cầu đăng nhập" });
    }
    const tokenCostomer = costomer["token"];

    const productCart = {
      _id: product._id,
      product_image: product.image,
      name: product.name,
      price: product.price,
      description: product.description,
      amount: 1,
    };
    await Axios.post(
      "https://api-ban-hang.herokuapp.com/cart/addtocart",
      productCart,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + tokenCostomer,
        },
      }
    );
    message.success("Thêm vào giỏ hàng thành công");
    dispatch(allActions.cartAction.addCart(product));
  };
  return (
    <div className="DetailPage">
      <Header />
      <Nav />
      {loading ? (
        <Fragment>
          <div className="DetailPage__content">
            <div className="container">
              <div className="row">
                <div className="col-md-12"></div>
                <div className="col-md-2">
                  <div className="Detail__left">
                    <ul className="Detail__left__list__image">
                      {listImageDetail.map((item, index) => {
                        return (
                          <li
                            className="Detail__left__list__image__item"
                            key={index}
                          >
                            <img
                              className="Detail__left__list__image__item__content active img-fluid"
                              src={item}
                              alt=""
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="Detail__center">
                    {loading ? (
                      <InnerImageZoom
                        src={productDetail.image}
                        zoomScale={3}
                        zoomType="hover"
                      />
                    ) : (
                        "Loading..."
                      )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="Detail__right">
                    <div className="Detail__right__logo">
                      <img
                        src="https://cdn.tgdd.vn/2020/12/banner/380x100-380x100-2.png"
                        alt=""
                        className="Detail__right__logo__content img-fluid "
                      />
                    </div>
                    <div className="Detail__right__des">
                      <p className="product_name"> {productDetail.name} </p>
                      <p className="product_code">
                        123.55.38.21.52.007 CO‑AXIAL 38MM
                      </p>
                      <p className="product_number">MSP:{productDetail._id}</p>
                      <div className="price">
                        <span className="price_old">864,500,000</span>
                        <span className="price_new">
                          {" "}
                          {productDetail.price} VNĐ
                        </span>
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
                        Thông tin số kỹ thuật
                      </button>
                      <div className="collapse" id="contentId">
                        <div className="text-left">
                          {productDetail.description}

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
                          <li className="list_more_item">
                            Giao hàng trong ngày.
                          </li>
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
                        <i className="fas fa-envelope"></i>
                      </li>
                    </ul>
                    <div className="order_box">
                      <Link to="/order" className="order__button">
                        Đặt hàng
                      </Link>
                      <button
                        className="moreContact"
                        onClick={() => addToCart(productDetail)}
                      >
                        Thêm vào giỏ
                      </button>
                    </div>
                    <div className="payment">
                      <button className="payment__button_left ">
                        Thanh toán online
                      </button>
                      <button className="payment__button_right ">
                        Trả góp 0%
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SimilarProducts" style={{ padding: "50px 0" }}>
            <div className="container">
              <h4 className="text-center my-4">SẢN PHẨM TƯƠNG TỰ</h4>
              <div className="row">

                <OwlCarousel
                  className="owl-theme"
                  loop
                  autoplay
                  items={4}
                  margin={5}



                >
                  {listProductsRedux.map((item, index) => {
                    return <ProductItem key={index} productitem={item} />;
                  })}
                </OwlCarousel>
              </div>
            </div>
          </div>
          <ViewdProducts />
        </Fragment>
      ) : (
          <Loading />
        )}
      <Footer />
    </div>
  );
}
