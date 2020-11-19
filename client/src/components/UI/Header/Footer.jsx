import React from 'react'
import {MDBIcon,MDBFooter,MDBContainer} from 'mdbreact'; 
const Footer = (params) => {
    return(
        <MDBFooter className="font-small">
            <div className="footer-copyright text-center py-3 blue lighten-5">
            <MDBContainer fluid className="text-dark">
                &copy; {new Date().getFullYear()} Created by: <a href="https://www.facebook.com/tvl98n" className="text-dark"> Tào Luân <MDBIcon className="text-dark" fab icon="facebook" /></a>      
            </MDBContainer>
            </div>
      </MDBFooter>
    )
}
export default Footer;
