import React, { useEffect, useState } from "react";
import Loading from "../assets/img/loading.gif";
import ImgLike from "../assets/img/icon-like.svg";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../reducks/products/selectors";
import { push } from "connected-react-router";
import ImgArrowDown from "../assets/img/icon-arrow-down.svg";
import ImgArrowRight from "../assets/img/icon-arrow-right.svg";
import ImgSampleProduct from "../assets/img/sample-product.png";
import Pagination from "../components/common/Pagination.jsx";
import { fetchProducts } from "../reducks/products/operations";
import { addWishlist } from "../reducks/wishlist/operations";
import { getUser } from "../reducks/user/selectors";

import queryString from "query-string";

const api = new API();
const ProductList = () => {
  const parsed = queryString.parse(window.location.search);
  const [page, setPage] = useState(1);
  const [category_name, setCategoryName] = useState(null);
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);
  const [show, setShow] = useState(false);
  const [editDone, setEditDone] = useState(true);
  const user = getUser(selector);

  useEffect(() => {
    if (parsed.page != undefined) {
      setPage(parsed.page);
    }
    if (parsed.category_name != undefined) {
      setCategoryName(parsed.category_name);
    }
    if (parsed.search != undefined) {
      setSearch(parsed.search);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchProducts(page, category_name, search));
  }, [page, category_name, search]);

  const likeWishlist = (productId) => {
    dispatch(addWishlist(user.token, productId));
  };

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
          <div className="button">
            <button
              className="edit-button"
              onClick={() => {
                setShow(!show);
                setEditDone(!editDone);
              }}
            >
              {editDone ? "Edit" : "Done"}
            </button>
          </div>
          <ul>
            {products["results"] &&
              products["results"].length > 0 &&
              products["results"].map((product) => (
                <li>
                  {show && (
                    <div
                      className="like"
                      onClick={() => {
                        likeWishlist(product.id);
                      }}
                    >
                      <img src={ImgLike} alt="" />
                    </div>
                  )}
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
          key={1}
          totalCount={products["count"]}
          previous={products["previous"]}
          next={products["next"]}
          pageSize={6}
          pageNumber={page}
        />
      )}
    </div>
  );
};

export default ProductList;
