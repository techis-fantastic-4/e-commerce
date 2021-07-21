import API from "../../API"
import {fetchProductsAction} from "./actions";

const api = new API();

export const fetchProducts = () => {
    return async (dispatch) => {
        return api.getProducts()
            .then((products) => {
                dispatch(fetchProductsAction(products))
            }).catch((error) => {
                alert("Failed to connect API: /products/")
            })
    }
}
