import React,{useState,useEffect} from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = (props)=>{
    const [collapse,setCollapse] = useState(false)
    const [istransparent,setTransparent] = useState(props.url)
    return(
          <header>
            <MDBNavbar color="white"  dark expand="md" scrolling fixed="top" transparent={istransparent}>
            <MDBContainer>
              <MDBNavbarBrand href="/">
              <strong className="text-dark font-weight-bold pr-2 "> DOCTER</strong>
              <img
                src={process.env.PUBLIC_URL + '/img/mbr-121x134.png'}
                className="img-fluid pr-2"
                alt=""
                width="50" height="50"
              />
              <strong className="text-dark font-weight-bold pr-2 "> RICE</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler className="text-dark" onClick={()=>{setCollapse(!collapse)} } />
              <MDBCollapse isOpen = { collapse }  navbar>
                <MDBNavbarNav  left>
                  <MDBNavItem  active>
                      <MDBNavLink  className="text-dark font-weight-bold " to="/" >Trang chủ</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink className="text-dark font-weight-bold" to="/chuandoan">Chuẩn đoán</MDBNavLink>
                  </MDBNavItem>
                  
                  <MDBNavItem>
                      <MDBNavLink className="text-dark font-weight-bold" to="/dubao">Dự báo</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink className="text-dark font-weight-bold" to="/benh">Bệnh</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon className="text-dark" fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon className="text-dark" fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </header>
    );
}

export default Header;