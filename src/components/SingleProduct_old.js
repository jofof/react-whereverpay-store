import { useParams } from 'react-router-dom'
import React, { Component } from 'react'
import ProductService from '../services/ProductService'
import { Link } from 'react-router-dom'
import { ProductConsumer, ProductProvider } from '../context'
import { ButtonContainer } from './Button'

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />
}

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productDetail: [],
      quantity: 1,
    }
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    const id = this.props.params.id
    console.log(id)
    this.getProductDetail(id)
    //this.addToCart(this.state.productDetail)
  }

  getProductDetail = async (id) => {
    console.log('Hello from get product detail function')
    try {
      const response = await ProductService.get(id)
      const newDetailProduct = response.data.product
      console.log('JSON', newDetailProduct)
      this.setState(
        () => {
          return { productDetail: newDetailProduct }
        },
        () => {
          console.log('THIS STATE DETAIL PRODUCT : ', this.state.productDetail)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  getItem = (id) => {
    // callback function => if item.id matches with id then return the item
    const product = this.State.cart.find((item) => item.id === id)
    return product
  }

  isProductInCart = (id) => {
    let found = false
    this.state.cart.items.forEach((item) => {
      if (item.id == id) {
        found = true
      }
    })
    return found
  }

  addToCart = (event) => {
    /*  console.log(product)
    if (!this.isProductInCart(product._id)) {
      product.inCart = true
      product.countInstock = 1
      this.state.cart.items.push(product)
    } */
    /*  event.preventDefault()
    console.log('ADD TO CART : ', this.state.productDetail._id)
    console.log('ADD TO CART : ', this.state.quantity)
    this.props.history.push(
      `/cart/${this.state.productDetail._id}?this.state.quantity=${this.state.quantity}`
    ) */
    console.log(this.props.params)
  }

  render() {
    return (
      /* This is a boostrap container */
      /* JSX expression - py-5 padding top - bottom */
      <div className='container py-5'>
        {/* title */}
        <div className='row'>
          <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
            <h1>{this.state.productDetail.name}</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3 '>
            {/* img-fluid (bootstrap): image does not overflow outside the div in which it is */}
            <img
              src={`../${this.state.productDetail.image}`}
              className='img-fluid'
              alt='product'
            />
          </div>
          {/* product text */}
          <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
            <h2>modele : {this.state.productDetail._id}</h2>
            <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
              made by :{' '}
              <span className='text-uppercase'>
                {this.state.productDetail.company}
              </span>
            </h4>
            <h4 className='text-blue'>
              <strong>
                price : {this.state.productDetail.price} <span>F CFA</span>
              </strong>
            </h4>
            <p className='text-capitalize font-weight-bold mt-3 mb-0'>
              <h5>Description du produit:</h5>
            </p>
            <p className='text-muted lead'>
              {this.state.productDetail.description}
            </p>
            {/* buttons */}
            <div>
              <Link to='/'>
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
              <ButtonContainer
                /* we can pass a props to styled component, "cart" below is a prop */
                cart /* cart is property, see Button component */
                disabled={this.state.productDetail.inCart ? true : false}
                onClick={(event) => this.addToCart(event)}
              >
                {this.state.productDetail.inCart ? 'inCart' : 'add to cart'}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withParams(SingleProduct)
