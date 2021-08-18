import * as Actions from './action'
import initialState from '../store/initialState'

export const CartProductReducers = (state = initialState, action) => {
    switch(action.type ) {
        case Actions.CART_PRODUCT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}