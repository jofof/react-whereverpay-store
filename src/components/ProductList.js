import React, { useEffect } from 'react'
import Title from './Title'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux'

// Actions
// listProducts to avoid collision with getAllProducts
import { getProducts } from '../redux/actions/productActions'

const ProductList = () => {
  const dispatch = useDispatch()
  // productList => from store
  const getProductsReducer = useSelector((state) => state.getProductsReducer)
  const { products, loading, error } = getProductsReducer
  /* Use to initialise our products */
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <React.Fragment>
      <div className='py-5'>
        <div className='container'>
          <Title name='our' title='products' />
          <div className='row'>
            {
              /* if loading is done, then display, if error display the error, if there is no loading and error*/
              loading ? (
                <h2>Loading ...</h2>
              ) : error ? (
                <h3>{error}</h3>
              ) : (
                products.products?.map((product) => (
                  <Product
                    key={product._id}
                    product={product}
                    /* image={product.image}
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    company={product.company}
                    merchantId={product.merchantId}
                    inCart={product.inCart}
                    rating={product.rating}
                    numReviews={product.numReviews}
                    countInstock={product.countInstock}
                    quantity={product.quantity}
                    total={product.total} */
                  />
                ))
              )
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductList
