import React from 'react'
import { MDBView,MDBMask,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../UI/Header/Header"
import Header from '../UI/Header/Header'
import TreeView from '../UI/TreeView/TreeView'
const Dianose = () =>{
    return(
      <>
        <Header url={false}/>
        <main className="grey lighten-4 pb-3">
        <MDBContainer  style={{height:"1000px",paddingTop:"100px" }}>
          <MDBRow style={{height:"900px"}} className="bg-white shadow-box-example z-depth-1 block-example">
            <MDBCol sm="3" size="12" className=" pr-0 pl-0" >
              <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#2067dd "}}>
                <p className="title-2">Các bệnh trên lúa</p>
              </header>
              <TreeView/>
            </MDBCol>
            <MDBCol sm="9" size="12">

            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </main>
      </>
    )
}
export default Dianose;