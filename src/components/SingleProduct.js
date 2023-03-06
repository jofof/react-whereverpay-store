import React from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartAction'
const SingleProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getProductDetailsReducer = useSelector(
    (state) => state.getProductDetailsReducer
  )
  const { loading, error, product } = getProductDetailsReducer

  /* Use to initialise our products */
  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id))
    }
  }, [])

  const addToCartHandler = (event) => {
    event.preventDefault()
    // Dispatch to our reducer
    dispatch(addToCart(product.detail._id, 1))
    navigate('/cart')
  }

  if (product) {
    return (
      <div className='container py-5'>
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3> error</h3>
        ) : (
          <React.Fragment>
            <div className='container py-5'>
              {/* title */}
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                  <h1>{product.detail?.name}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img
                    src={product.detail?.image}
                    className='img-fluid'
                    alt=''
                  />
                </div>
                {/* prdoduct info */}
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                  <h1>model : {product.detail?.name}</h1>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    made by :{' '}
                    <span className='text-uppercase'>
                      {product.detail?.company}
                    </span>
                  </h4>
                  <h4 className='text-blue'>
                    <strong>
                      price : {product.detail?.price} <span>FCFA</span>
                    </strong>
                  </h4>
                  <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                    some info about product :
                  </p>
                  <p className='text-muted lead'>
                    {/* if I don't want all description to display => product.detail.description.substring(0, 100)...*/}
                    {product.detail?.description}
                  </p>
                  {/* buttons */}
                  <div>
                    <Link to='/'>
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      /* Optional chaining (?.) */
                      disabled={product.detail?.inCart ? true : false}
                      onClick={addToCartHandler}
                    >
                      {product.detail?.inCart ? 'in cart' : 'add to cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
          //console.log('Single Product', product)
        )}
      </div>
    )
  } else {
    return null
  }
}

export default SingleProduct
