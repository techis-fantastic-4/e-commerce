export const ADD_WISHLIST = "ADD_WISHLIST";
export const addWishlistAction = (wishlists) => {
    return {
        type: "ADD_WISHLIST",
        payload: wishlists
    }
}
export const FETCH_WISHLIST = "FETCH_WISHLIST";
export const fetchWishlistsAction = (wishlists) => {
    return {
        type: "FETCH_WISHLIST",
        payload: wishlists
    }
}
export const DELETE_WISHLIST = "DELETE_WISHLIST";
export const deleteWishlistAction = (wishlists) => {
    return {
        type: "DELETE_WISHLIST",
        payload: wishlists
    }
}