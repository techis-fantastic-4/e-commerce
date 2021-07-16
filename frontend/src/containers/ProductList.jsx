import React, { useEffect, useState } from "react";
import Loading from "../assets/img/loading.gif";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../reducks/products/selectors";
import { push } from "connected-react-router";
import ImgArrowDown from "../assets/img/icon-arrow-down.svg";
import ImgArrowRight from "../assets/img/icon-arrow-right.svg";

const api = new API();
const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const product = getProducts(selector);
  const [products, setProducts] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div class="product-list">
        <div class="content">
            <div class="sidebar">
            <h3>Category Lists</h3>
              <ul>
                <li><a class="active" href="">Phone <img src={ImgArrowDown} class="" /></a></li>
                <li><a href="">Camera<img src={ImgArrowDown} class="" /></a></li>
                <li><a href="">Laptop<img src={ImgArrowDown} class="" /></a></li>
                <li><a href="">Wearables<img src={ImgArrowDown} class="" /></a></li>
              </ul>
            </div>
            <div class="main">
              <ul>
                <li>Apple Watch</li>
                <li>Apple Watch</li>
                <li>Apple Watch</li>
              </ul>
              <ul>
                <li>Apple Watch</li>
                <li>Apple Watch</li>
                <li>Apple Watch</li>
              </ul>
            </div>
        </div>
        <div class="pagination">
            
        </div>
    </div>
  );
};

export default ProductList;
