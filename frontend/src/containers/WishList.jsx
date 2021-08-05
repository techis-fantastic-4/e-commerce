import React, { useEffect, useState } from "react";
import ImgLike from "../assets/img/icon-like.svg";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { getWishlists } from "../reducks/wishlist/selectors";
import { getUser } from "../reducks/user/selectors";
import { push } from "connected-react-router";
import Pagination from "../components/common/Pagination.jsx";
import queryString from "query-string";
import { fetchWishlists, deleteWishlist } from "../reducks/wishlist/operations";

const api = new API();
const WishList = () => {
  const parsed = queryString.parse(window.location.search);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const wishlists = getWishlists(selector);
  const [show, setShow] = useState(false);
  const [editDone, setEditDone] = useState(true);
  const user = getUser(selector);

  useEffect(() => {
    if (user.token != "") {
      if (parsed.page == undefined) {
        dispatch(fetchWishlists(user.token, 1));
      } else {
        setPage(parsed.page);
        dispatch(fetchWishlists(user.token, parsed.page));
      }
    }
  }, [user]);

  const unLikeWishlist = (id) => {
    dispatch(deleteWishlist(user.token, id));
  };

  return (
    <div class="wishlist">
      <div>
        <div className="fav-header">
          <h1 className="favorites">Favorites</h1>
          <button
            className="edit-button"
            onClick={() => {
              setShow(!show);
              setEditDone(!editDone);
            }}
          >
            {editDone ? "Edit" : "Done"}
          </button>
        </div>
      </div>
      <div class="Card">
        <ul>
          {wishlists["results"] &&
            wishlists["results"].map((wishlist) => (
              <li>
                {show && (
                  <div
                    className="like"
                    onClick={() => {
                      unLikeWishlist(wishlist.id);
                      window.location.reload();
                    }}
                  >
                    <img src={ImgLike} alt="" />
                  </div>
                )}
                <img src={"https://res.cloudinary.com/techis/" + wishlist.product.main_image} />
                <div class="product-name">{wishlist.product.name}</div>
                <div class="product-price">PRICE : ${wishlist.product.price}</div>
              </li>
            ))}
        </ul>
      </div>

      {wishlists["results"] && wishlists["results"] > 6 && (
        <Pagination totalCount={wishlists["count"]} previous={wishlists["previous"]} next={wishlists["next"]} pageSize={6} pageNumber={page} />
      )}
    </div>
  );
};

export default WishList;
