import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

/*We return an async function  */
export const addToCart = (id, quantity) => async (dispatch, getSate) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      /* in reducers we're expecting an item */
      product: data.detail._id,
      company: data.detail.company,
      description: data.detail.description,
      image: data.detail.image,
      merchantId: data.detail.merchantId,
      name: data.detail.name,
      numReviews: data.detail.numReviews,
      price: data.detail.price,
      rating: data.detail.rating,
      countInstock: data.detail.countInstock,
      total: quantity * data.detail.price,
      inCart: (data.detail.inCart = true),
      quantity,
    },
  })
  /* We want to get the data we dispatch just upper, to do that we will pass getSate in both to redux, stringify  */
  localStorage.setItem('cart', JSON.stringify(getSate().cartReducer.cartItems))
}

export const removeFromCart = (id) => (dispatch, getSate) => {
  /* We just want to dispatch from this action  - when we remove, we want to know and update the state of local storage => getState*/
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      payload: id,
    },
  })
  localStorage.setItem('cart', JSON.stringify(getSate().cartReducer.cartItems))
}

export const incrementCart = (id) => (dispatch, getSate) => {
  dispatch({
    type: actionTypes.INCREMENT,
    payload: {
      id: id,
    },
  })
  localStorage.setItem('cart', JSON.stringify(getSate().cartReducer.cartItems))
}

export const decrementCart = (id) => (dispatch, getSate) => {
  dispatch({
    type: actionTypes.DECREMENT,
    payload: {
      id: id,
    },
  })
  localStorage.setItem('cart', JSON.stringify(getSate().cartReducer.cartItems))
}
