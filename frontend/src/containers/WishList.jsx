import React, { useEffect, useState } from "react";
import Like from '../assets/img/Like.png';
import Unlike from '../assets/img/unlike.png';
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../reducks/products/selectors";
import { push } from "connected-react-router";
import Pagination from "../components/common/Pagination.jsx";
import { fetchProducts } from "../reducks/products/operations";
import queryString from "query-string";


const api = new API();
const ProductList = () => {
    const parsed = queryString.parse(window.location.search);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const products = getProducts(selector);
    const [show, setShow] = useState(false);
    const [likeUnlike, setLikeUnlike] = useState(true);
    const [editDone, setEditDone] = useState(true);
    

    useEffect(() => {
        if (parsed.page == undefined) {
        dispatch(fetchProducts(1));
        } else {
        setPage(parsed.page);
        dispatch(fetchProducts(parsed.page));
        }
    }, []);

        return (
        
            <> 
                <div>
                    <div className="fav-header">
                            <h1 className="favorites">Favorites</h1>
                            <button className="edit-button" onClick={() => {setShow(true); setEditDone(false)}}>
                                {editDone? "Edit":"Done"}
                            </button>
                    </div>                                                                        
                </div>         
                <div class="Card">
                        <ul>
                        {products["results"] &&
                            products["results"].length > 0 &&
                            products["results"].map((product) => (
                            <li>
                                <div className="like">
                                {likeUnlike ? 
                                    <div >
                                            {
                                                show?<div className="like" onClick={() => setLikeUnlike(false)}>
                                                        <img src={Like} alt="" />
                                                    </div> :null
                                            }
                                    </div>
                                    :<div className="like" onClick={() => 
                                                                setLikeUnlike(false)}>
                                                                <img src={Unlike} alt="" />
                                    </div>
                                }
                                </div>
                                <img src={product.main_image} />
                                <div class="product-name">{product.name}</div>
                                <div class="product-price">PRICE : ${product.price}</div>
                            </li>
                            ))}
                        </ul>
                
                </div>
                
                {products["results"] && products["results"].length > 0 && (
                <Pagination
                    totalCount={products["count"]}
                    previous={products["previous"]}
                    next={products["next"]}
                    pageSize={6}
                    pageNumber={page}
                />
                )}
            </>    
        );
};
  
export default ProductList;

