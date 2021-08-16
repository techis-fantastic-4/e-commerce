import React from "react";
import ImgHomeMainPc from "../assets/img/home-main-pc.jpg";
import ImgHomeMainSp from "../assets/img/home-main-sp.jpg";
import ImgCategoryPhone from "../assets/img/category-phone.svg";
import ImgCategoryCamera from "../assets/img/category-camera.svg";
import ImgCategoryLaptop from "../assets/img/category-laptop.svg";
import ImgCategoryPlaystation from "../assets/img/category-playstation.svg";
import ImgCategoryPods from "../assets/img/category-pods.svg";
import ImgCategoryWatch from "../assets/img/category-watch.svg";
import ImgProductCamera from "../assets/img/product-camera.jpg";
import ImgProductMac from "../assets/img/product-mac.jpg";
import ImgProductPhone from "../assets/img/product-phone.jpg";
import ImgProductPods from "../assets/img/product-pods.jpg";

const Home = () => {
  return (
    <div class="home">
      <section class="main">
        <img src={ImgHomeMainPc} class="main-pc-img" />
        <img src={ImgHomeMainSp} class="main-sp-img" />
        <div class="text-area">
          <div class="title">Canon</div>
          <div class="product-name">EOS 80D DSLR</div>
          <div class="product-price">$929.99</div>
          <div class="cta-area">
            <a class="btn btn-primary" href="/products/8/">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section class="category">
        <h2>CATEGORIS</h2>
        <ul>
          <li>
            <a href="/">
              <img src={ImgCategoryPhone} class="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ImgCategoryCamera} class="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ImgCategoryLaptop} class="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ImgCategoryPlaystation} class="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ImgCategoryWatch} class="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ImgCategoryPods} class="" />
            </a>
          </li>
        </ul>
      </section>

      <section class="product">
        <div class="text-area">
          <div class="title">One Plus</div>
          <div class="product-name">EOS 80D DSLR</div>
          <div class="product-price">$929.99</div>
          <div class="cta-area">
            <a class="btn btn-primary" href="/products/24/">
              Learn More
            </a>
          </div>
        </div>
        <img src={ImgProductPhone} class="pc" />
        <img src={ImgProductPhone} class="sp" />
      </section>

      <section class="product">
        <img src={ImgProductCamera} class="pc" />
        <div class="text-area">
          <div class="title">Canon</div>
          <div class="product-name">EOS 80D DSLR</div>
          <div class="product-price">$929.99</div>
          <div class="cta-area">
            <a class="btn btn-primary" href="/products/8/">
              Learn More
            </a>
          </div>
        </div>
        <img src={ImgProductCamera} class="sp" />
      </section>

      <section class="product">
        <div class="text-area">
          <div class="title">Laptop</div>
          <div class="product-name">EOS 80D DSLR</div>
          <div class="product-price">$929.99</div>
          <div class="cta-area">
            <a class="btn btn-primary" href="/products/6/">
              Learn More
            </a>
          </div>
        </div>
        <img src={ImgProductMac} class="pc" />
        <img src={ImgProductMac} class="sp" />
      </section>

      <section class="product">
        <img src={ImgProductPods} class="pc" />
        <div class="text-area">
          <div class="title">Canon</div>
          <div class="product-name">EOS 80D DSLR</div>
          <div class="product-price">$929.99</div>
          <div class="cta-area">
            <a class="btn btn-primary" href="/products/35/">
              Learn More
            </a>
          </div>
        </div>
        <img src={ImgProductPods} class="sp" />
      </section>
    </div>
  );
};

export default Home;
