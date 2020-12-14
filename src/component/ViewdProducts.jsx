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
                                    <img className="ViewdProducts__content__list__item__img img-fluid" src="https://cdn.tgdd.vn/Products/Images/42/228743/iphone-12-pro-max-xam-new-600x600-600x600.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="ViewdProducts__content__list__item">
                                    <img className="ViewdProducts__content__list__item__img img-fluid" src="https://cdn.tgdd.vn/Products/Images/42/225380/iphone-mini-do-new-600x600-600x600.jpg" alt="" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
