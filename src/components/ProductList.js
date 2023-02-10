import React, { Component, useState, useEffect } from 'react'
import Title from './Title'
import { storeProducts } from '../Products'
import { ProductConsumer, ProductProvider } from '../context'
import Product from './Product'

export default class ProductList extends Component {
  state = {
    products: storeProducts,
  }

  /* We want to access the information about the product whether it's in the cart, in the details, in the product.
  There has to be a way where all of the components have access to the information. */

  render() {
    //console.log(this.state.products)
    return (
      <React.Fragment>
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
                      return <Product key={product.id} product_={product} />
                    })
                  }}
                </ProductConsumer>
              </ProductProvider>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
