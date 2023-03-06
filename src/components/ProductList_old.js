import React from 'react'
import Title from './Title'
import Product from './Product'
import styled from 'styled-components'
import { ProductConsumer, ProductProvider } from '../Context/contextApi'

const ProductList = () => {
  return (
    <React.Fragment>
      <ProductWrapper className='py-5'>
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='products' />
            <div className='row'>
              {/* we dont use props */}
              <ProductProvider>
                <ProductConsumer>
                  {(value) => {
                    /*  return <h1>{value}</h1> // the value is a simple string. */
                    //console.log(value) //
                    // map (callback function {what you want to do with each evrey product})
                    return value.products.map((product) => {
                      return <Product key={product.id} product={product} />
                    })
                  }}
                </ProductConsumer>
              </ProductProvider>
            </div>
          </div>
        </div>
      </ProductWrapper>
    </React.Fragment>
  )
}

export default ProductList

const ProductWrapper = styled.section``
