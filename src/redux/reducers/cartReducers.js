import * as actionTypes from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload
      const existingItem = state.cartItems.find(
        /*  product: data.detail._id => from cartAction.js */
        (y) => y.product === item.product
      )
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((y) =>
            y.product === existingItem.product ? item : y
          ),
        }
      } else {
        /* First time it's added into the cart */
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case actionTypes.REMOVE_FROM_CART:
      const itemId = action.payload.payload
      return {
        ...state,
        /* Add everything to the new cart item array where the product is not equal */
        cartItems: state.cartItems.filter((item) => item.product !== itemId),
      }
    case actionTypes.INCREMENT:
      const cartItem = state.cartItems.find(
        (item) => item.product === action.payload.id
      )
      cartItem.quantity = cartItem.quantity + 1
      cartItem.total = cartItem.quantity * cartItem.price

      console.log(cartItem.total)
      return {
        ...state,
      }

    case actionTypes.DECREMENT:
      const cartItemDec = state.cartItems.find(
        (item) => item.product === action.payload.id
      )
      cartItemDec.quantity = cartItemDec.quantity - 1
      if (cartItemDec.quantity === 0) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.product !== action.payload.id
          ),
        }
      } else {
        cartItemDec.total = cartItemDec.quantity * cartItemDec.price
      }
      return {
        ...state,
      }

    default:
      return state
  }
}
