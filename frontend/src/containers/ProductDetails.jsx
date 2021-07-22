import React, { useEffect, useState } from "react";
import ImgProductCamera from "../assets/img/product-camera.jpg";
import { useDispatch } from "react-redux";
import API from "../API";


const api = new API();

const ProductDetails = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    
    let id = window.location.pathname.split("/products")[1];
    if (id !== "") {
        id = id.split("/")[1];
    }

    useEffect(() => {
        api.getProduct(id).then((product) => {
          setProduct(product);
        });
      }, []);

    
    console.log(product.results);
    return (
        <div className="product-details">
            <section className="product">
                <div className="details-card">
                    <h1 className="details-label">Item Details</h1>
                    <img src={ImgProductCamera} alt="product" class="details-img" />    
                        {/* this.state.product.image */}
                    <div class="text-area details-box">
                        <div class="product-price">PRICE : $929.99</div>
                            {/* this.state.product.price */}
                        <div class="product-status">STATUS : In Stock</div>
                            {/* this.state.product.status */}
                        <div class="form-group" style={{marginBottom: "1rem"}}>
                            <label for="exampleFormControlSelect1">QUANTITY : </label>
                            <select class="form-control"  style={{backgroundColor: "#FAE706"}} id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="cta-area">
                            <a class="btn btn-primary" id="add-cart-btn" href="   /">
                                Add to Cart
                            </a>
                        </div>
                    </div>
                    <p class="details-name">
                        <strong>SONY PLAYSTATION 4 PRO WHITE VERSION</strong>
                        {/* this.state.product.name */}
                    </p>
                </div>
                <hr />
                    <p class="details-desc">
                        Item Details:
                    </p>
                    <p class="details-desc">
                        Play the greatest games and PS4 eclusive, take your adventures online with PS plus and Stream or download TV shows and movies from Netflix, PS store or wherever you get your favourite entertainment.
                        {/* this.state.product.desc */}
                    </p>
                <hr />

            </section>

        </div>
    );
};

export default ProductDetails;