import { createStore, combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  getProductsReducer,
  getProductDetailsReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

/* Because we only have a single store in a Redux application. 
We use reducer composition instead of many stores to split data handling logic. */
const reducer = combineReducers({
  cartReducer: cartReducer,
  getProductsReducer: getProductsReducer,
  getProductDetailsReducer: getProductDetailsReducer,
})

const initialState = {}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
