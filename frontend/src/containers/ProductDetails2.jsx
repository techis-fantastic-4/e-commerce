import React from "react";
import ImgProductCamera from "../assets/img/product-camera.jpg";
import { connect } from 'react-redux';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        const { match: { params } } = this.props
        this.state = {
          productID: params.id,
          products: this.state.products,
          currentProduct: {}
        };
      }
    
    componentWillMount() {
        this.setState({currentProduct: this.state.products.find(product => product.id === parseInt(this.state.productId)
          )})
      }

    render() {
        return (
            <div className="product-details">
                <section className="product">
                    <div className="details-card">
                        <h1 className="details-label">Item Details</h1>
                        <img src={ImgProductCamera} alt="product" class="details-img" />    
                            {/* this.state.currentProduct.image */}
                        <div class="text-area details-box">
                            <div class="product-price">PRICE : $929.99</div>
                                {/* this.state.currentProduct.price */}
                            <div class="product-status">STATUS : Status</div>
                                {/* this.state.currentProduct.status */}
                            <div class="form-group" style={{marginBottom: "1rem"}}>
                                <label for="exampleFormControlSelect1">QUANTITY : </label>
                                <select class="form-control"  style={{backgroundColor: "#FAE706"}} id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="cta-area">
                                <a class="btn btn-primary" href="/">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <p class="details-name">
                            NAME OF PRODUCT GOES HERE!
                            {/* this.state.currentProduct.name */}
                        </p>
                    </div>
                    <hr />
                        <p class="details-desc">
                            Item Details:
                        </p>
                        <p class="details-desc">
                            Here is where there will be a lot more details related to the product.
                            {/* this.state.currentProduct.desc */}
                        </p>
                    <hr />

                </section>

            </div>
        );
    };
}

function mapStateToProps(state) {

    return {products: state.products}      
}

export default connect(mapStateToProps,null)(ProductDetails);