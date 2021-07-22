import React, { useEffect, useState } from "react";
import ImgProductCamera from "../assets/img/product-camera.jpg";
import { useDispatch } from "react-redux";
import API from "../API";


const api = new API();

const ProductDetails = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    
    let id = window.location.pathname.split("/products")[1];
    if (id !== "") {
        id = id.split("/")[1];
    }

    useEffect(() => {
        api.getProduct(id).then((product) => {
          setProduct(product);
          console.log(product.results[0]);
        });
      }, []);

    
    
    let status = "";
    if (product && product.results[0].quantity > 0) {
        status = "In Stock";
    } else {
        status = "Out of Stock"
    }

    return (
        <div className="product-details">
            <section className="product">
                <div className="details-card">
                    <h1 className="details-label">Item Details</h1>
                    {product && (
                        <img src={ImgProductCamera} alt="product" class="details-img" />    
                    )}
                    
                        {/* product.results[0].main_image */}
                    <div class="text-area details-box">
                    {product && (
                        <div class="product-price">PRICE : {product.results[0].price}</div>
                    )}  
                    {product && (
                        <div class="product-status">STATUS : {status}</div>
                    )}    
                        <div class="form-group" style={{marginBottom: "1rem"}}>
                            <select class="custom-select">
                                <option>Qty 1</option>
                                <option>Qty 2</option>
                                <option>Qty 3</option>
                                <option>Qty 4</option>
                                <option>Qty 5</option>
                            </select>
                        </div>
                        <div class="cta-area">
                            <a class="btn btn-primary" id="add-cart-btn" href="   /">
                                Add to Cart
                            </a>
                        </div>
                    </div>
                    <p class="details-name">
                    {product && (
                        <strong>{product.results[0].name}</strong>
                    )}    
                        
                    </p>
                </div>
                <hr />
                    <p class="details-desc">
                        Item Details:
                    </p>
                    <p class="details-desc">
                    {product && (
                        <div>{product.results[0].description}</div>
                    )}
                        
                    </p>
                <hr />

            </section>

        </div>
    );
};

export default ProductDetails;