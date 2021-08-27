import { createSelector } from "reselect";

const CartlistsSelector = state => state.cartlists

export const getCartlists = createSelector(
    [CartlistsSelector],
    state => state.list
);

export const getSubtotal = createSelector(
    [CartlistsSelector],
    state => state.subtotal
);