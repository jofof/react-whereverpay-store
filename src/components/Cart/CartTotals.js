import React from 'react'
import { Link } from 'react-router-dom'
/* import PayPalButton from './PayPalButton' */
import { useSelector, useDispatch } from 'react-redux'

const CartTotals = ({ value }) => {
  /*
  console.log('####### - TOTAL- #########', value)
    getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0
    state.cart.map((item) => (subTotal += item.total))
    const tempTax = subTotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax
    return {
      subTotal,
      tax,
      total,
    }
  }
  
  addTotals = () => {
    const totals = this.getTotals()
    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total,
        }
      },
      () => {
        // console.log(this.state);
      }
    )
  }

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] }
      },
      () => {
        this.setProducts()
        this.addTotals()
      }
    )
  } */
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
            <Link to='/'>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                type='button'
                onClick={() => {
                  /* clearCart() */
                }}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className='text-title'> subtotal :</span>{' '}
              <strong>$ {'cartSubTotal'} </strong>
            </h5>
            <h5>
              <span className='text-title'> tax :</span>{' '}
              <strong>$ {'cartTax'} </strong>
            </h5>
            <h5>
              <span className='text-title'> total :</span>{' '}
              <strong>$ {'cartTotal'} </strong>
            </h5>
            {/* <PayPalButton
              totalAmount={'cartTotal'}
              clearCart={'clearCart'}
              history={'history'}
            /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CartTotals
