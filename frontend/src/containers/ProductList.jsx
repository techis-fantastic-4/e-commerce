import React, { useEffect, useState } from "react";
import Loading from "../assets/img/loading.gif";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../reducks/user/selectors";
import { push } from "connected-react-router";

const api = new API();

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const [users, setUsers] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div class="product-list">
        <div class="content">
            <div class="sidebar">
                
            </div>
            <div class="main">

            </div>
        </div>
        <div class="pagination">
            
        </div>
    </div>
  );
};

export default ProductList;
