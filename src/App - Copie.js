import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import SingleProduct from './components/SingleProduct'

class App extends Component {
  render() {
    return (
      /* React.Fragment simulates the html tag, we won't need to write section, div.It works as a pareent container */
      <React.Fragment>
        {/* Navbar should be displayed in every pages of the applicatioin */}
        <Navbar />
        <Routes>
          {/* component is replaced by  element={} in react 6 */}
          {/* How we can be sure that all the elements have access to the same information/share the same products as well as methods(adding/moving the products from the cart? 
          => context api. We have one source of true and can have access to all the information(https://www.carlrippon.com/playing-with-the-context-api-in-react-16-3/)
          */}
          <Route exact path='/' element={<ProductList />} />
          {/*  <Route path='/details' element={<Details />} /> */}
          <Route path='/details/:id' element={<SingleProduct />} />
          <Route path='/cart/:id?' element={<Cart />} />
          <Route path='*' element={<Default />} />
        </Routes>
      </React.Fragment>
    )
  }
}
/* function App() {
  return (
    <Router>
      <Switch></Switch>
    </Router>
  )
} */

export default App
