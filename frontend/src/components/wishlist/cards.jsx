import React, {useEffect, useState} from 'react'
import ImgHomeMainPc from "./img/home-main-pc.jpg"


const Cards = () => {

    return (
        <div className="fav-container">
            <div className="Card">
                <div className="card-image">
                    <img src={ImgHomeMainPc} class="main-pc-img" />
                </div>
                <div className="card-body">
                    <h3>Product</h3>
                    <p>EOS 80D DSLR</p>
                    <p>Price: $$$</p>
                </div>
            </div>

            <div className="Card">
                <div className="card-image">
                    <img src={ImgHomeMainPc} class="main-pc-img" />
                </div>
                <div className="card-body">
                    <h3>Product</h3>
                    <p>EOS 80D DSLR</p>
                    <p>Price: $$$</p>
                </div>
            </div>
            <div className="Card">
                <div className="card-image">
                    <img src={ImgHomeMainPc} class="main-pc-img" />
                </div>
                <div className="card-body">
                    <h3>Product</h3>
                    <p>EOS 80D DSLR</p>
                    <p>Price: $$$</p>
                </div>
            </div>
            <div className="Card">
                <div className="card-image">
                    <img src={ImgHomeMainPc} class="main-pc-img" />
                </div>
                <div className="card-body">
                    <h3>Product</h3>
                    <p>EOS 80D DSLR</p>
                    <p>Price: $$$</p>
                </div>
            </div>
            <div className="Card">
                <div className="card-image">
                    <img src={ImgHomeMainPc} class="main-pc-img" />
                </div>
                <div className="card-body">
                    <h3>Product</h3>
                    <p>EOS 80D DSLR</p>
                    <p>Price: $$$</p>
                </div>
            </div>
            <div className="Card">
                <div className="card-image">
                    <img src={ImgHomeMainPc} class="main-pc-img" />
                </div>
                <div className="card-body">
                    <h3>Product</h3>
                    <p>EOS 80D DSLR</p>
                    <p>Price: $$$</p>
                </div>
            </div>
        </div>
            
    )
}

export default Cards
