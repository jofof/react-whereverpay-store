import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartReducer = useSelector((state) => state.cartReducer)
  const { cartItems } = cartReducer

  const getSubTotal = () => {
    let subTotal = 0
    cartItems.map((item) => (subTotal += item.total))
    return subTotal
  }

  const getCartTax = () => {
    let subTotal = 0
    cartItems.map((item) => (subTotal += item.total))
    const tempTax = subTotal * 0.1
    return parseFloat(tempTax.toFixed(2))
  }

  const getCartTotal = () => {
    let subTotal = 0
    cartItems.map((item) => (subTotal += item.total))
    const tempTax = subTotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax
    return total
  }

  return (
    <section>
      {cartItems.length > 0 ? (
        <React.Fragment>
          <Title name='your' title='cart' />
          <CartColumns />
          <div className='container-fluid'>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          {/*  <CartTotals value={cartItems} history={''} /> */}
          <div className='container'>
            <div className='row'>
              <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-end'>
                <Link to='/'>
                  <button
                    className='btn btn-outline-danger text-uppercase mb-3 px-5'
                    type='button'
                    onClick={() => {}}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className='text-title'> subtotal :</span>
                  <strong>{getSubTotal()} FCFA</strong>
                </h5>
                <h5>
                  <span className='text-title'> tax :</span>{' '}
                  <strong>{getCartTax()} FCFA</strong>
                </h5>
                <h5>
                  <span className='text-title'> total :</span>{' '}
                  <strong>{getCartTotal()} FCFA</strong>
                </h5>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <EmptyCart />
      )}
    </section>
  )
}

export default Cart
