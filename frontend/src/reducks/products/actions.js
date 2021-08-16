export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const fetchProductsAction = (products) => {
    return {
        type: "FETCH_PRODUCT",
        payload: products
    }
}
