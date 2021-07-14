export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const fetchProductssAction = (products) => {
    return {
        type: "FETCH_PRODUCT",
        payload: products
    }
}
