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
                <label htmlFor="dropdown-items">Qty:</label>
                  <select class="quantity" id="dropdown-items">
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                  </select>
                  <div class="trash">
                    <img src={ImgIconTrash} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="checkout-area">
          <div class='info-total'>
            <h4 class='heading-title'>SUBTOTAL</h4>
            <h5 class='total-item'><span class='item-quantity'>(3)</span>ITEMS</h5>
            <h5 class='total-value'>$699.99</h5>
            <button class='button-name' type="submit">PROCEED TO CHECKOUT</button>

          </div>
          

        </section>

      </div>
    </div>
  );
};

export default Cart;
