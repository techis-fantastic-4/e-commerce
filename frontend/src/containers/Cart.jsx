import React from "react";
import productCameraImage from "../assets/img/product-camera.jpg";
import ImgIconTrash from "../assets/img/icon-trash.svg";

//object
// const cart = [
//     {
//     name: 'Sony Playstation Pro White Version',
//     price:'399.99',
//     image: ''
// },
// {
//     name: 'Airpods Wireless Bluetooth HeadPhones',
//     price:'399.99',
//     image: ''
// },
// ]

const Cart = () => {
  return (
    <div class="cart-list">
      <h2>SHOPPING CART</h2>
      <div class="content">
        <section class="product-list">
          <div class="product">
            <img src="https://res.cloudinary.com/techis/image/upload/v1626895865/f8tmpqyozntqng0uzt9d.png" alt="" />
            <div class="product-info">
              <div class="name">Sony Playstation 4 Pro White Version</div>
              <div class="bottom">
                <div class="price">$399.99</div>
                <div class="quantity-trash">
                  <div class="quantity">Quantity</div>
                  <div class="trash">
                    <img src={ImgIconTrash} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="checkout-area"></section>
      </div>
    </div>
  );
};

export default Cart;
