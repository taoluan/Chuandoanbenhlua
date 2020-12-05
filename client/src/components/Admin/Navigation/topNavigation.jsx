import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';

const TopNavigation = ()=> {
    const [state, setState] = useState({
        collapse: false,
        dropdownOpen: false
    });

    const onClick = () => {
        setState({
            ...state,
            collapse: !state.collapse
        })
    }

    const toggle = () => {
        setState({
            ...state,
            dropdownOpen: !state.dropdownOpen
        });
    }
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling  fixed="top" >
                <MDBNavbarBrand href="/">
                    <strong>Dr.Rice</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { onClick } />
                <MDBCollapse isOpen = { state.collapse } navbar >
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="#">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" target="_blank" className="nav-link Ripple-parent" href="http://localhost:3001" target="_blank">Client Site</a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://mdbootstrap.com/products/react-ui-kit/" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>Go Pro</a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
}

export default TopNavigation;