import React from 'react'
import productCameraImage from '../assets/img/product-camera.jpg'

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
        <>
        <h2>SHOPPING CART</h2>
        <section className="cart-component">
            <div className="card">
                <img className="imageview" 
                src={productCameraImage}/>
                <p>Sony PlayStation 4 Pro White Version</p>
                <p><span>$</span>399.99</p>
                
                <div class="dropdown">
  
                <select name="cartitems" id="itemnumber">
                    <option value="1">1</option> 
                    <option value="2">2</option>      
                    <option value="3">3</option>       
                    <option value="4">4</option>
                </select>
            </div> |
            <span><img src="https://img.icons8.com/material-two-tone/24/000000/trash.png"/></span>
            
            </div>
            <hr/>
            
        </section>
        <div className="col card mb-3" >
        <div className="row g-0">
            <h2>Subtotal</h2>
            <p><span>(3)</span>ITEMS<span>$</span><p>649.97</p></p>
            <button>Proceed to checkout</button>
        </div>
    </div>
    </>
      )
}

export default Cart
