import React from 'react'

export default function ViewdProducts() {
    return (
        <div className="ViewdProducts" >
            <div className="ViewdProducts__content">
                <div className="container">
                    <h4 className="ViewdProducts__content__title" >
                        SẢN PHẨM ĐÃ XEM
                </h4>
                    <div className="ViewdProducts__content__listProducts">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="ViewdProducts__content__list__item">
                                    <img className="ViewdProducts__content__list__item__img img-fluid" src="https://luxshopping.vn/Uploads/_Temp_/UploadsNewshublot-big-bang-tutti-frutti-watch-41mmjpg_540_660.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="ViewdProducts__content__list__item">
                                    <img className="ViewdProducts__content__list__item__img img-fluid" src="https://24kara.com/files/sanpham/4983/1/jpg/dong-ho-rolex-submarinerdate-automatic-116613lb.jpg" alt="" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
