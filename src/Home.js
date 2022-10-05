import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-e-commerce-background-image_401504599.jpg" alt="e-commerce" className="home__image" />
                    <div className="home__row">
                        <Product />
                        <Product />
                    </div>
                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />

                    </div>
                    <div className="home__row">
                        <Product />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home