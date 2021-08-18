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
import SearchByCategory from "../components/common/ProductSearchByCategory";

import queryString from "query-string";

const api = new API();
const ProductList = () => {
  const parsed = queryString.parse(window.location.search);
  const [page, setPage] = useState(1);
  const [category_name, setCategoryName] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  useEffect(() => {
    if (parsed.page != undefined) {
      setPage(parsed.page);
    }
    if (parsed.category_name != undefined) {
      setCategoryName(parsed.category_name);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchProducts(page, category_name));
  }, [page, category_name]);

  return (
    <div class="product-list">
      <div class="content">
        <div class="sidebar">
          <h3>Category Lists</h3>
          <ul>
            <li>
              <a href="/products/?category_name=phone">
                Phone <img src={ImgArrowDown} class="" />
              </a>
            </li>
            <li>
              <a href="/products/?category_name=camera">
                Camera
                <img src={ImgArrowDown} class="" />
              </a>
            </li>
            <li>
              <a href="/products/?category_name=laptop">
                Laptop
                <img src={ImgArrowDown} class="" />
              </a>
            </li>
            <li>
              <a href="/products/?category_name=watch">
                Wearables
                <img src={ImgArrowDown} class="" />
              </a>
            </li>
            <li>
              <a href="/products/?category_name=play_station">
                Play Station
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
                <li onClick={() => dispatch(push("/products/" + product.id + "/"))}>
                  <img src={product.main_image} />
                  <div class="product-name">{product.name}</div>
                  <div class="product-price">PRICE : ${product.price}</div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {products["results"] && products["results"].length > 0 && (
        <Pagination key={1} totalCount={products["count"]} previous={products["previous"]} next={products["next"]} pageSize={6} pageNumber={page} />
      )}
    </div>
  );
};

export default ProductList;
