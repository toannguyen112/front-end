import React from 'react'

export default function Carousel() {
    return (
        <div className="carousel">
            <video loop autoPlay muted>
                <source src="https://content.rolex.com/dam/homepage/hss/watches/classic-watches/datejust/datejust-31/m278384rbr-0029/homepage-datejust-31_m278384rbr-0029.mp4" type="video/mp4" />
            </video>
            <div className="overPlay">
                <div className="overPlay__content">
                    <h2 className="intro_name">
                        Đồng hồ Datejust Mới
                </h2>
                    <p className="intro_des">Đồng hồ biểu hiện của phong cách cổ điển</p>
                </div>
            </div>


        </div>
    )
}
