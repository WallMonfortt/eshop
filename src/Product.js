import React from "react";
import "./Product.css";

function Product() {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Tittle product</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>19.99</strong>
                    </p>
                    <div className="product__rating">
                        <p>⭐⭐⭐⭐</p>
                    </div>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt="product" />
                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product