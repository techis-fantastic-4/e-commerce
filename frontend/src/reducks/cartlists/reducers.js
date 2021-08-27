import * as Actions from './action'
import initialState from '../store/initialState'

export const CartlistsReducers = (state = initialState.cartlists, action) => {
    switch(action.type ) {
        case Actions.CARTLIST_FETCH:
            return {
                list: action.list,
                subtotal: action.subtotal,
            }
        default:
            return state
    }
}