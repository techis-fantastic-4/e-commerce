import API from '../../API'
import { CartAction } from './action'

const api = new API()
console.log(api)


export const listCartProducts  = () => {
    return async (dispatch) => {
        // creating getCart() in API.js
        return api.getCart()
        .then((products) => {
            console.log(products)
            dispatch(listCartProductAction(products))
        }).catch((error) => {
            alert('Failed to connect API: /cart/')
        })
    }

}