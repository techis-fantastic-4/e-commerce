import React, { useEffect, useState } from "react";
import Loading from "../assets/img/loading.gif";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../reducks/products/selectors";
import { push } from "connected-react-router";
import ImgArrowDown from "../assets/img/icon-arrow-down.svg";
import ImgArrowRight from "../assets/img/icon-arrow-right.svg";
import ImgSampleProduct from "../assets/img/sample-product.png";
import Pagination from "../components/common/Pagination.jsx"
import {fetchProducts} from "../reducks/products/operations"

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
              <li><img src={ImgSampleProduct} /><div class="product-name">Samsung Note</div><div class="product-price">PRICE : $399.99</div></li>
              <li><img src={ImgSampleProduct} /><div class="product-name">Samsung Note</div><div class="product-price">PRICE : $399.99</div></li>
              <li><img src={ImgSampleProduct} /><div class="product-name">Samsung Note</div><div class="product-price">PRICE : $399.99</div></li>
              <li><img src={ImgSampleProduct} /><div class="product-name">Samsung Note</div><div class="product-price">PRICE : $399.99</div></li>
              <li><img src={ImgSampleProduct} /><div class="product-name">Samsung Note</div><div class="product-price">PRICE : $399.99</div></li>
              <li><img src={ImgSampleProduct} /><div class="product-name">Samsung Note</div><div class="product-price">PRICE : $399.99</div></li>
              <li><img src={ImgSampleProduct} /><div class="product-name">Samsung Note</div><div class="product-price">PRICE : $399.99</div></li>
              <li><img src={ImgSampleProduct} /><div class="product-name">Samsung Note</div><div class="product-price">PRICE : $399.99</div></li>
              <li><img src={ImgSampleProduct} /><div class="product-name">Samsung Note</div><div class="product-price">PRICE : $399.99</div></li>
              </ul>
            </div>
        </div>
        <Pagination
              totalCount={10}
              // resultCount={6}
              previous={'https://google.com'}
              next={'https://google.com'}
              pageSize={6}
              pageNumber={2}
            />
    </div>
  );
};

export default ProductList;
