import API from '../../API'
import { cartlistsFetchAction } from './action'

const api = new API()

export const fetchCartlists = (token, page) => {
    return async (dispatch) => {
        return api.getCartlists(token, page)
        .then((cartlists) => {
            console.log(cartlists)
            dispatch(cartlistsFetchAction(cartlists, 10))
        }).catch((error) => {
            alert('Failed to connect API: /cartlists/')
        })
    }
}