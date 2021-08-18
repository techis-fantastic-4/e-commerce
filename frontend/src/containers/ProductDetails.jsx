import React, { useEffect, useState } from "react";
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
      console.log(product);
    });
  }, []);

  let status = "";
  if (product && product.quantity > 0) {
    status = "In Stock";
  } else {
    status = "Out of Stock";
  }

  return (
    <div class="product-details">
      <section className="product">
        <div className="details-card">
          <h1 className="details-label" id="details-label">
            Item Details
          </h1>
          <div className="details-container">
            <div className="product-image-div">
              {product && <img src={product.main_image} alt="product" className="details-image" id="details-image" />}
            </div>
            <p className="details-name-1" id="details-name-1">
              {product && <strong>{product.name}</strong>}
            </p>
            <div id="details-box" className="details-box">
              {product && <div className="product-price">PRICE : {product.price}</div>}
              {product && <div className="product-status">STATUS : {status}</div>}
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
          <p className="details-name" id="details-name-2">
            {product && <strong>{product.name}</strong>}
          </p>
        </div>
        <hr id="break" />
        <p className="details-desc" id="details-desc">
          Item Details:
        </p>
        <p className="details-desc" id="details-description-text">
          {product && <div>{product.description}</div>}
        </p>
        <hr id="break2" style={{ marginBottom: "5rem" }} />
      </section>
    </div>
  );
};

export default ProductDetails;
