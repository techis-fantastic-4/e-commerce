import API from "../../API"
import {fetchWishlistsAction, addwiWshlistAction, deleteWishlistAction} from "./actions";

const api = new API();

export const fetchWishlists = () => {
    return async (dispatch) => {
        return api.getWishlists()
            .then((wishlists) => {
                dispatch(fetchWishlistsAction(wishlists))
            }).catch((error) => {
                alert("Failed to connect API: /wishlists/")
            })
    }
}

export const deleteWishlist = (id) => {
    return async (dispatch, getState) => {
        return api.deleteWishlist(id)
            .then((response) => {
                const prevWishlists = getState().wishlists.list
                const nextWishlists = prevWishlists.filter(wishlist => wishlist.id !== id)
                dispatch(deleteWishlistAction(nextWishlists))
            }).catch((error) => {
                alert("Failed to connect API to delete a wishlist")
                console.log(error);
            })
   }
}


