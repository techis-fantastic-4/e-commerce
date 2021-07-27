import * as Actions from './actions'
import  initialState from '../store/initialState'

export const WishlistsReducer = (state = initialState.wishlists, action) => {
    switch(action.type) {
        case Actions.ADD_WISHLIST:
            return {
                ...state,
                ...action.payload
            }
        case Actions.FETCH_WISHLIST:
            return {
                ...state,
                ...action.payload
            }
        case Actions.DELETE_WISHLIST:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}