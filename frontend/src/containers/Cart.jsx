import React from "react";
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
        <div class="product-list">
          <div class="product">
            <div class="product-image">
              <img src="https://res.cloudinary.com/techis/image/upload/v1626895865/f8tmpqyozntqng0uzt9d.png" alt="" />
            </div>
            <div class="product-info">
              <div class="name">Sony Playstation 4 Pro White Version</div>
              <div class="bottom">
                <div class="price">$399.99</div>
                <div class="quantity-trash">
                  <label htmlFor="dropdown-items">Qty:</label>
                  <select class="quantity" id="dropdown-items">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <div class="trash">
                    <img src={ImgIconTrash} className="trashicon" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="product">
            <div class="product-image">
              <img src="https://res.cloudinary.com/techis/image/upload/v1626895865/f8tmpqyozntqng0uzt9d.png" alt="" />
            </div>
            <div class="product-info">
              <div class="name">Sony Playstation 4 Pro White Version</div>
              <div class="bottom">
                <div class="price">$399.99</div>
                <div class="quantity-trash">
                  <label htmlFor="dropdown-items">Qty:</label>
                  <select class="quantity" id="dropdown-items">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <div class="trash">
                    <img src={ImgIconTrash} className="trashicon" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <section class="checkout-area">
          <div class="cartinfo-total">
            <h4 class="heading">SUBTOTAL</h4>
            <div class="itemandprice">
              <h4 class="item-quantity">(3)</h4>
              <span class="items">ITEMS</span>
              <h4 class="total-value">$699.99</h4>
            </div>
            <button class="button-name" type="submit">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
