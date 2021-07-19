import React, { useEffect, useState } from "react";
import Loading from "../assets/img/loading.gif";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../reducks/products/selectors";
import { push } from "connected-react-router";
import ImgArrowDown from "../assets/img/icon-arrow-down.svg";
import ImgArrowRight from "../assets/img/icon-arrow-right.svg";
import ImgSampleProduct from "../assets/img/sample-product.png";
import Pagination from "../components/common/Pagination.jsx";
import { fetchProducts } from "../reducks/products/operations";

const api = new API();
const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div class="product-list">
      <div class="content">
        <div class="sidebar">
          <h3>Category Lists</h3>
          <ul>
            <li>
              <a class="active" href="">
                Phone <img src={ImgArrowDown} class="" />
              </a>
            </li>
            <li>
              <a href="">
                Camera
                <img src={ImgArrowDown} class="" />
              </a>
            </li>
            <li>
              <a href="">
                Laptop
                <img src={ImgArrowDown} class="" />
              </a>
            </li>
            <li>
              <a href="">
                Wearables
                <img src={ImgArrowDown} class="" />
              </a>
            </li>
          </ul>
        </div>
        <div class="main">
          <ul>
            {products["results"] &&
              products["results"].length > 0 &&
              products["results"].map((product) => (
                <li>
                  <img src={product.main_image} />
                  <div class="product-name">{product.name}</div>
                  <div class="product-price">PRICE : ${product.price}</div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {products["results"] && products["results"].length > 0 && (
        <Pagination
          totalCount={products["count"]}
          previous={products["previous"]}
          next={products["next"]}
          pageSize={products["page_size"]}
          pageNumber={products["page_number"]}
        />
      )}
    </div>
  );
};

export default ProductList;
