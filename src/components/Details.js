import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
  render() {
    return (
      /* This is a boostrap container */
      /* JSX expression - py-5 padding top - bottom */
      <div className='container py-5'>
        {/* title */}
        <div className='row'>
          <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
            <h1>{}</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3 '>
            {/* img-fluid (bootstrap): image does not overflow outside the div in which it is */}
            <img src={''} className='img-fluid' alt='product' />
          </div>
          {/* product text */}
          <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
            <h2>modele : {}</h2>
            <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
              made by : <span className='text-uppercase'>{'company'}</span>
            </h4>
            <h4 className='text-blue'>
              <strong>
                price : {} <span>F CFA</span>
              </strong>
            </h4>
            <p className='text-capitalize font-weight-bold mt-3 mb-0'>
              <h5>Description du produit:</h5>
            </p>
            <p className='text-muted lead'>{}</p>
            {/* buttons */}
            <div>
              <Link to='/'>
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
              <ButtonContainer
                /* we can pass a props to styled component, cart brlow is a prop */
                cart
                disabled={'inCart' ? true : false}
                onClick={() => {
                  /*  value.addToCart(_id) */
                }}
              >
                {'inCart' ? 'inCart' : 'add to cart'}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
