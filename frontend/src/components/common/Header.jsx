import React from "react";
import ImageTechShopLogo from "../../assets/img/techshop-logo.svg";
import ImageIconCart from "../../assets/img/icon-cart.svg";
import ImageIconSearch from "../../assets/img/icon-search.svg";

const Header = () => {
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
              <a href="/">Categories</a>
            </li>
            <li class="nav-item">
              <a href="/">Items Lists</a>
            </li>
            <li class="nav-item">
              <a href="/">Sign In</a>
            </li>
            <li class="nav-item">
              <a href="/">Sign Up</a>
            </li>
          </ul>
        </div>
        <img src={ImageIconCart} class="icon-cart" />
        <img src={ImageIconSearch} class="icon-search" />
      </nav>
    </header>
  );
};

export default Header;
