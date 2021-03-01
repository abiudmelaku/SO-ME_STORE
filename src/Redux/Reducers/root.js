import {combineReducers}  from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '../Reducers/user'
import cartReducer from '../Reducers/cart'
import itemReducer from '../Reducers/items'
import collectionReducer from '../Reducers/collection'
const persistConfig = {
    'key':'root',
    storage,
    whitelist:['cart']
}
const rootReducer =  combineReducers(
    {
        user:userReducer,
        cart:cartReducer, 
        item:itemReducer,
        collection:collectionReducer,
    }
    )

export default persistReducer(persistConfig , rootReducer)