import React, { useState } from 'react'
import { MDBIcon,MDBBtn,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { useHistory } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../UI/Header/Header"
import Header from '../UI/Header/Header'
import TreeView from '../UI/TreeView/TreeView'
import TimeLine from '../UI/Timeline/Timeline'
import TextField from '@material-ui/core/TextField';
import Search from '../UI/Search/Search'
import Icon from '../UI/UndrawDesigner/IconSVG'
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
]
const Dianose = () =>{
  let history = useHistory();
  const [textSearch, setTextSearch] = useState()
  const [trieuchung,setTrieuChung] = useState()
  const showTrieuChung = (e,value)=>{
    setTrieuChung(value)
  }
  const checkSearch = ()=>{
    (textSearch) ?  history.push("/chuandoan/"+textSearch) : alert(12)
  }
    return(
      <>
        <Header url={false}/>
        <main className="grey lighten-4 pb-3">
        <MDBContainer fluid style={{paddingTop:"100px" }}>
          <MDBContainer style={{height:"900px"}} className="bg-white shadow-box-example z-depth-1">
            <MDBRow>
              <MDBCol className="text-center">
                <p className="title-3 mb-0 pb-0 mt-3">Chuẩn đoán bệnh</p>
                <span className="line-3 mt-0 pt-0"></span>
              </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center mb-4">
                <Search/>
            </MDBRow>
            <MDBRow >
              <MDBCol sm="3" size="12" className=" pr-0 pl-0" >
                <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#2067dd "}}>
                  <p className="title-2">Các bệnh trên lúa</p>
                </header>
                <TreeView show={showTrieuChung}/>
              </MDBCol>
              <MDBCol sm="9" size="12" className=" pr-0 pl-0">
                <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#9e9e9e "}}>
                    <p className="title-2">Triệu chứng trên Lúa</p>
                </header>
                <TimeLine/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
        </main>
      </>
    )
}
export default Dianose;