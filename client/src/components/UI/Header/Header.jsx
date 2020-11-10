import React, {useState} from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter  ,Link} from 'react-router-dom';
const Header = () =>{
    return(
        <nav>
        <ul>
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/query-reducer">useQueryReducer</Link>
          </li>
          <li>
            <Link to="/location-state">LocationState</Link>
          </li>
          <li>
            <Link to="/array-demo">Array</Link>
          </li>
        </ul>
      </nav>
    )
}
export default Header