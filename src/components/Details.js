import React, { Component } from 'react'
import { ProductProvider, ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
import { detailProducts } from '../Products'

export default class Details extends Component {
  render() {
    return (
      <ProductProvider>
        <ProductConsumer>
          {(value) => {
            console.log(value.productDetails)
          }}
        </ProductConsumer>
      </ProductProvider>
    )
  }
}
