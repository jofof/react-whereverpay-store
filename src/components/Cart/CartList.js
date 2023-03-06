import React from 'react'
import CartItem from './CartItem'

const CartList = ({ cartItems }) => {
  //const { cart } = cartItems
  //console.log('###########', cart)
  ;<div className='container-fluid'>
    {cartItems.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>
}

export default CartList
