import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div>
      <div className='container-fluid px-0'>
        <div className='row justify-content-center mx-0'>
          <img className='img-fluid w-25' src={logo} alt={logo} />
        </div>
        <nav className="bg-dark py-2 text-center">
            <a className="nav-link d-inline-block text-white" href="/shop">Shop</a>
            <a className="nav-link d-inline-block text-white" href="/order">Order</a>
            <a className="nav-link d-inline-block text-white" href="/manage">Manage Order</a>
        </nav>
      </div>
    </div>
  )
}

export default Header
