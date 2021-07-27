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
                    <div className="details-container">
                        <div className="product-image-div">
                            {product && (
                                <img src={product.results[0].main_image} alt="product" className="details-img" />
                            )}
                        </div>
                        
                        <div className="text-area details-box">
                            {product && (
                                <div className="product-price">PRICE : {product.results[0].price}</div>
                            )}
                            {product && (
                                <div className="product-status">STATUS : {status}</div>
                            )}
                            <div className="form-group" style={{ marginBottom: "1rem" }}>
                                <select className="custom-select">
                                    <option>Qty 1</option>
                                    <option>Qty 2</option>
                                    <option>Qty 3</option>
                                    <option>Qty 4</option>
                                    <option>Qty 5</option>
                                </select>
                            </div>
                            <div className="cta-area">
                                <a className="btn btn-primary" id="add-cart-btn" href="   /">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="details-name">
                        {product && (
                            <strong>{product.results[0].name}</strong>
                        )}

                    </p>
                </div>
                <hr />
                <p className="details-desc">
                    Item Details:
                </p>
                <p className="details-desc">
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