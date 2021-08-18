import React from "react";
import ImageTechShopLogo from "../../assets/img/techshop-logo.svg";
import ImageIconCart from "../../assets/img/icon-cart.svg";
import ImageIconSearch from "../../assets/img/icon-search.svg";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../reducks/user/selectors";
import { push } from "connected-react-router";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="/">
          <img src={ImageTechShopLogo} class="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a href="/">Home</a>
            </li>
            <li class="nav-item">
              <a href="/products">Products</a>
            </li>
            <li class="nav-item">
              <a href="/wishlists">Wishlist</a>
            </li>
            {user.token ? (
              <li class="nav-item">
                <a href="/signout">Sign Out</a>
              </li>
            ) : (
              <React.Fragment>
                <li class="nav-item">
                  <a href="/signin">Sign In</a>
                </li>
                <li class="nav-item">
                  <a href="/signup">Sign Up</a>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
        <img src={ImageIconCart} onClick={() => dispatch(push("/cart"))} class="icon-cart" />
        {/* <img src={ImageIconSearch} class="icon-search" /> */}
      </nav>
    </header>
  );
};

export default Header;
