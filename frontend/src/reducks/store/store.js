import { 
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';

import {PostsReducer} from '../posts/reducers';
import {UserReducer} from '../user/reducers';
import {ProductsReducer} from '../products/reducers';
import {WishlistsReducer} from '../wishlist/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            wishlists: WishlistsReducer,
            posts: PostsReducer,           
            user: UserReducer,
            products: ProductsReducer,            
        }),
       compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // DEBUG MODE
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    )
}