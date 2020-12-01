
import { combineReducers } from 'redux'
import currentUser from './currentUser'
import orders from './orders'
import products from './products'
import costomers from './costomers'




const rootReducer = combineReducers({
    currentUser,
    orders,
    products,
    costomers

})

export default rootReducer