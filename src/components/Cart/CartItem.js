import React from 'react'
import {
  removeFromCart,
  incrementCart,
  decrementCart,
} from '../../redux/actions/cartAction'
import { useDispatch } from 'react-redux'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  //console.log('##### - CART ITEM - ######', item)
  return (
    <div className='row my-1 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={item.image}
          style={{ width: '5rem', heigth: '5rem' }}
          className='img-fluid'
          alt=''
        />
      </div>
      <div className='col-10 mx-auto col-lg-2 '>
        <span className='d-lg-none'>product :</span> {item.name}
      </div>
      <div className='col-10 mx-auto col-lg-2 '>
        <strong>
          <span className='d-lg-none'>price :</span> {item.price}FCFA
        </strong>
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0 '>
        <div className='d-flex justify-content-center'>
          <div>
            <span
              className='btn btn-black mx-1'
              onClick={() => {
                /*   return decrement() */
                dispatch(decrementCart(item.product))
              }}
            >
              -
            </span>
            <span className='btn btn-black mx-1'>{item.quantity}</span>
            <span
              className='btn btn-black mx-1'
              onClick={() => {
                dispatch(incrementCart(item.product))
                /*  return increment() */
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2 '>
        <div
          className=' cart-icon'
          onClick={() => dispatch(removeFromCart(item.product))}
        >
          <i className='fas fa-trash' />
        </div>
      </div>

      <div className='col-10 mx-auto col-lg-2 '>
        <strong>item total : {item.total} XOF </strong>
      </div>
    </div>
  )
}

export default CartItem
