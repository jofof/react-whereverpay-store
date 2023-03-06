import React from 'react'
import styled from 'styled-components'
// when clink on the the product, we should go to the details page
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types' // code more robust, in case product data like inCart, price is modified
import { useState } from 'react'

/*  Code comments
ProductWraper will be using with bootstrap
const { id, name, image, company ...} are from ProductList
'card' is from a bootsrap class
image will be in a container we will be styling 
'card-img-top' is a bootstrap class
line 38: if the product is in cart, then true else false */

const Product = ({ product }) => {
  const [cart, setCart] = useState([])
  // from ProductList
  const displayCartContent = (product) => {
    product.inCart = true
    product.quantity = 1
    const price = product.price
    product.total = price
    cart.push(product)
    setCart(...cart)
  }
  return (
    <ProductWraper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
      {/* card is a bootsrap class */}
      <div className='card'>
        <div className='img-container p-5'>
          <Link to={`details/${product._id}`}>
            {/* card-img-top is a bootstrap class */}
            <img src={product.image} alt='product' className='card-img-top' />
          </Link>
          <button
            className='cart-btn'
            disabled={product.inCart ? true : false}
            onClick={() => {
              displayCartContent(product)
            }}
          >
            {product.inCart ? (
              <p className='text-capitalize mb-0' disabled>
                in cart
              </p>
            ) : (
              <i className='fas fa-cart-plus' />
            )}
          </button>
        </div>

        {/* image will be in a container we will be styling */}

        {/* card footer */}
        <div className='card-footer d-flex justify-content-between'>
          {/*align-self-center: allow to display on the same line several compnents with different weight */}
          <p className='align-self-center mb-0'>{product.name}</p>
          <h5 className='h5 text-blue-font-italic mb-0'>
            {product.price}
            <span className='mr-1'>FCFA</span>
          </h5>
        </div>
      </div>
    </ProductWraper>
  )
}

export default Product

Product.propTypes = {
  product_: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    company: PropTypes.string,
    price: PropTypes.number,
    merchantId: PropTypes.string,
    inCart: PropTypes.bool,
  }),
}

/* Product css */
const ProductWraper = styled.div`
  .card {
    border-color: transparent;
    transition: all 2s linear;
  }
  .card-footer {
    border-color: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      bakground: rgba(247, 247, 247);
    }
  }
  /* Zooming the image */
  .img-container {
    position: relative; /* because we want to set the button to postion absolute, so the parent container to relative  */
    overflow: hidden; /* if the image becomes bigger */
  }
  /* Scaling the image */
  .card-img-top {
    transition: all 1s linear;
  }
  /* I want to scale the image */
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem; /* one for top bottom and bottom  */
    background: var(--lightBlue);
    color: var(--mainWhite);
    border: none;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear; /* the change happened over the time */
  }
  /* The button appears only when we hover the container */
  .img-container:hover .cart-btn {
    transform: translate(0, 0); /* put the button at its initial position */
  }

  .cart-btn:hover {
    color: var(
      --mainBlue
    ); /* when the mouse in on the cart logo, color is changing */
    cursor: pointer;
  }
`
