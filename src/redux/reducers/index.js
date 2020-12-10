
import { combineReducers } from 'redux'
import currentUser from './currentUser'
import orders from './orders'
import products from './products'
import costomers from './costomers'
import cart from './cart'





const rootReducer = combineReducers({
    currentUser,
    orders,
    products,
    costomers,
    cart


})

export default rootReducer