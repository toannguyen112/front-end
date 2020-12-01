import React from 'react'
import { Link } from "react-router-dom";

export default function ProductItem() {
    return (
        <div class="item" style={{ textAlign: "center" }} >
            <img
                src="https://content.rolex.com/dam/2020/upright-bba/m126334-0014.png?impolicy=v6-upright"
                alt=""
            />
            <div className="detail">
                <h4 className="product_name" >
                    SKIJACKE
                        </h4>
                <p className="des" >
                    Skijacke aus technischem Nylon in Gelb
                        </p>
                <p className="price"  >
                    € 2.500,00
                        </p>
                <Link to="/detail">
                    <button className="discover" style={{ borderRadius: "3.75rem", padding: "8px 30px", backgroundColor: "white", cursor: "pointer", border: "0.75px solid black" }} >
                        Discover
                                </button>
                </Link>
            </div>

        </div>
    )
}
