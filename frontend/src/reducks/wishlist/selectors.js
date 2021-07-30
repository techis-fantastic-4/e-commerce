import { createSelector } from "reselect";

const wishlistsSelector = (state) => state.wishlists;

export const getWishlists = createSelector(
    [wishlistsSelector],
    state => state
);