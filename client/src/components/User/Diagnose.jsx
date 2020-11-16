import React, { useState } from 'react'
import { MDBView,MDBMask,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../UI/Header/Header"
import Header from '../UI/Header/Header'
import TreeView from '../UI/TreeView/TreeView'
import TimeLine from '../UI/Timeline/Timeline'
const Dianose = () =>{
  const [trieuchung,setTrieuChung] = useState()
  const showTrieuChung = (e,value)=>{
    setTrieuChung(value)
  }
    return(
      <>
        <Header url={false}/>
        <main className="grey lighten-4 pb-3">
        <MDBContainer style={{paddingTop:"100px" }}>
          <MDBRow style={{height:"900px"}} className="bg-white shadow-box-example z-depth-1">
            <MDBCol sm="3" size="12" className=" pr-0 pl-0" >
              <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#2067dd "}}>
                <p className="title-2">Các bệnh trên lúa</p>
              </header>
              <TreeView show={showTrieuChung}/>
            </MDBCol>
            <MDBCol sm="9" size="12">
              <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#9e9e9e "}}>
                  <p className="title-2">Triệu chứng trên Lúa</p>
              </header>
              <TimeLine/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </main>
      </>
    )
}
export default Dianose;