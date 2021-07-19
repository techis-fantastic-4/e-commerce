import React from 'react'

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
            <h2>Shopping cart</h2>
            <section>
            <div className="col card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                    <h2>Subtotal</h2>
                    <p><span>(3)</span>ITEMS<span>$</span><p>649.97</p></p>
                    <button>Proceed to checkout</button>
                </div>
            </div>

            </section>
        
            
        </>
        
            
        
    )
}

export default Cart
