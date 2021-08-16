import * as Actions from './actions'
import  initialState from '../store/initialState'

export const ProductsReducer = (state = initialState.products, action) => {
    switch(action.type) {
        case Actions.FETCH_PRODUCT:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}