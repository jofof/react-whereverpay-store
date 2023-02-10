import React, { Component } from 'react'
import { storeProducts, detailProducts } from '../src/Products'
import ProductService from './services/ProductService'

/* Let’s create our context object. We’ll call it ProductContext. It comes with 2 compoents => Provider and consumer */
// 2)
const ProductContext = React.createContext()
// Provider => provides info for all application, to be setup on the top of our application. The top is in index.js before router
// Consumer => We dont need a prop in a child component

// 1)
/* We want to export several things at the same time */
/* export default */
class ProductProvider extends Component {
  // declaration within a class
  // const [products, setProducts] = useState([]);
  // We will have following state: products, currentProduct

  // 1) PROD
  /*   constructor(props) {
    super(props)
    this.retrieveProducts = this.retrieveProducts.bind(this)
    this.state = {
      products: [],
    }
  } */

  // TEST
  state = {
    /* In Javascript, when we assin an object to a variable, In fact pass them as a reference.
    we asssign a propriety a array, however in a array we haave objects that have been assigned as a reference  */
    products: [],
    productDetails: detailProducts,
  }

  componentDidMount() {
    //this.retrieveProducts() // PROD
    this.setProducts() // TESTS
  }

  setProducts = () => {
    let tempProducts = []
    storeProducts.forEach((element) => {
      const singleItem = { ...element }
      tempProducts = [...tempProducts, singleItem]
    })
    this.setState(() => {
      return { products: tempProducts }
    })
  }

  retrieveProducts = async () => {
    ProductService.getAll()
      .then((response) => {
        this.setState({
          products: response.data.products,
        })
        console.log(response.data.products)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  // Handle the product details
  handleDetails = () => {
    console.log('Hello from handleDetails')
  }

  // Handle the product details
  addToCart = () => {
    console.log('Hello from addToCart')
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          /*   products: this.state.products, */
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
        }}
      >
        {/*value can also be an object*/}
        {/*As ProductContext sits on top component tree, we also need to return all the children of our app  */}
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
//3)
const ProductConsumer = ProductContext.Consumer

//4)
export { ProductProvider, ProductConsumer }
