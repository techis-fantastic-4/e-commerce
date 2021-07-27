import React, {useEffect, useState} from 'react'
import Like from "./img/Like.png"
import Unlike from "./img/unlike.png"
import API from "../../API";
import { useSelector, useDispatch } from "react-redux";
import { getWishlists } from "../../reducks/wishlist/selectors";
import { push } from "connected-react-router";
import Pagination from "../../components/common/Pagination";
import { fetchWishlists } from "../../reducks/wishlist/operations";
import queryString from "query-string";

const api = new API();
const Cards = () => {

    const parsed = queryString.parse(window.location.search);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const wishlists = getWishlists(selector);

    useEffect(() => {
        if (parsed.page == undefined) {
          dispatch(fetchWishlists(1));
        } else {
          setPage(parsed.page);
          dispatch(fetchWishlists(parsed.page));
        }
      }, []);

    const [show, setShow] = useState(false);
    const [likeUnlike, setLikeUnlike] = useState(true);
    const [editDone, setEditDone] = useState(true);

    return (
        <div>
            <div className="fav-header">
                    <h1 className="favorites">Favorites</h1>
                    <button className="edit-button" onClick={() => {setShow(true); setEditDone(false)}}>
                        {editDone? "Edit":"Done"}
                    </button>
            </div>
                      
            <div className="fav-container" >
                
                <ul>
                    {wishlists["results"] &&
                    wishlists["results"].length > 0 &&
                    wishlists["results"].map((wishlist) => (
                        <li>
                        <img src={wishlist.main_image} />
                        <div class="product-name">{wishlist.name}</div>
                        <div class="product-price">PRICE : ${wishlist.price}</div>
                        </li>
                    ))}
                </ul>
                
            </div>
           
            
        </div>
            
    )
}

export default Cards
