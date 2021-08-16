import API from "../../API"
import {fetchProductsAction} from "./actions";

const api = new API();

export const fetchProducts = (page, category_name) => {
    return async (dispatch) => {
        return api.getProducts(page, category_name)
            .then((products) => {
                dispatch(fetchProductsAction(products))
            }).catch((error) => {
                alert("Failed to connect API: /products/")
            })
    }
}
