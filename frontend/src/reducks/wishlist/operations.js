import { push } from "connected-react-router";
import API from "../../API";
import {
  fetchWishlistsAction,
  addWishlistAction,
  deleteWishlistAction,
} from "./actions";

const api = new API();

export const fetchWishlists = (token, page) => {
  return async (dispatch) => {
    return api.getWishlist(token, page)
      .then((wishlists) => {
        dispatch(fetchWishlistsAction(wishlists));
      })
      .catch((error) => {
        alert("Failed to connect API: /wishlists/");
      });
  };
};

export const addWishlist = (token, id) => {
  return async (dispatch, getState) => {
    return api
      .addWishlist(token, id)
      .then((wishlist) => {
        const prevWishlists = getState().wishlists.results
        const nextWishlists = [wishlist, ...prevWishlists]
        dispatch(addWishlistAction(nextWishlists));
      })
      .catch((error) => {
        alert("Failed to connect API to add a wishlist");
        console.log(error);
      });
  };
};

export const deleteWishlist = (token, id) => {
  return async (dispatch, getState) => {
    return api
      .deleteWishlist(token, id)
      .then((response) => {
        const prevWishlists = getState().wishlists.results;
        const nextWishlists = prevWishlists.filter(
          (wishlist) => wishlist.id !== id
        );
        dispatch(deleteWishlistAction(nextWishlists));
      })
      .catch((error) => {
        alert("Failed to connect API to delete a wishlist");
        console.log(error);
      });
  };
};
