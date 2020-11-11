import React from 'react';
import { Switch ,Route} from 'react-router-dom';
import { MDBView,MDBMask,MDBContainer } from 'mdbreact';
import Diagnose from './Diagnose'
import ListDisesea from './ListDisesea'
import Disesea from './Disesea'
import Header from '../UI/Header/Header'
const Home = ()=>{
    return(
        <>
        <Header/>
        <MDBView src={process.env.PUBLIC_URL + '/img/mbr-1920x1281.jpg'} >
            <MDBMask overlay="light" className="flex-center flex-column text-white text-center">
              <h2>This Navbar is fixed</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
        </MDBView>
        <main>
        <MDBContainer className="text-center my-5">
          <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </MDBContainer>
      </main>
      </>
    )
}
export default  Home;