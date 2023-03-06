import * as actionTypes from '../constants/productConstants'

// ALL PRODUCTS
export const getProductsReducer = (state = { products: [] }, action) => {
  //we can also wite : const { type, payload } = action
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true /* allows our app to wait until this value equal to false before we display */,
        products: [],
      }
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload }
    case actionTypes.GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// SINGLE PRODUCT
export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true }
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      }
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return { product: {} }
    default:
      return state
  }
}
