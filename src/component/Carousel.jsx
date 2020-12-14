import React from "react";

export default function Carousel() {
    return (
        <div className="carousel">
            <video loop autoPlay={true} muted>
                <source src="./iphone_itnro.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
