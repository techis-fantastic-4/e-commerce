import { createSelector } from "reselect";

const CartSelector = state => state.products

export const cartProducts = createSelector(
    [CartSelector],
    state => state
);