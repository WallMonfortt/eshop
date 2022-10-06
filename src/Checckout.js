import React from "react";
import "./Checkout.css";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M31s/Phase2/1500x300._CB404200111_.jpg" alt="ad" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
            </div>
            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout