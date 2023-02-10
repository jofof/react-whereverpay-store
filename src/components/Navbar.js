import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
  render() {
    /* on small screen padding will be 5 px*/
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark  me-auto px-sm-5'>
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' />
        </Link>
        {/* ul.navbar-nav align-items-center */}
        {/* https://stackoverflow.com/questions/63948287/bootstrap-5-navbar-align-items-right */}
        <ul className='navbar-nav align-items-center me-auto'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            {/*  <FontAwesomeIcon icon={faCartPlus} /> */}
            <span className='mr-2'>
              <i className='fas fa-cart-plus' />
            </span>
            Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
