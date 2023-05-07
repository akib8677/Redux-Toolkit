import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Layout = () => {
  const cartProduct = useSelector(state => state.cart)

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Redux-Toolkit</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" aria-current="page">Product</Link>
              </li>
            </ul>
            <Link to={'cart'} className="nav-link text-black" aria-current="page">
              <AiOutlineShoppingCart size={25} /> 
              <span className='mb-3' style={{marginBottom: '3px'}}>{cartProduct.length}</span>
              </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout