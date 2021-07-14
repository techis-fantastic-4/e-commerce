import React from "react";
import ImgProductCamera from "../assets/img/product-camera.jpg";


const ProductDetails = () => {
  return (
    <div class="product-details">
      <section class="product">
        <div class="details-card">
            <h1 class="details-label">Item Details</h1>
            <img src={ImgProductCamera} alt="product" class="details-img" />
            <div class="text-area details-box">
                <div class="product-price">PRICE : $929.99</div>
                <div class="product-status">STATUS : Status</div>
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
                    <a class="btn btn-primary" href="/">
                        Add to Cart
                    </a>
                </div>
            </div>
            <p class="details-name">
                NAME OF PRODUCT GOES HERE!
            </p>
        </div>
        <hr />
            <p class="details-desc">
                Item Details:
            </p>
            <p class="details-desc">
                Here is where there will be a lot more details related to the product.
            </p>
        <hr />

      </section>

    </div>
  );
};

export default ProductDetails;
