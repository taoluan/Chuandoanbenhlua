import React, { useState } from 'react'
import { MDBTypography,MDBBtn,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { useHistory ,useLocation ,useParams} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../UI/Header/Header"
import Header from '../UI/Header/Header'
import Search from '../UI/Search/Search'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Icon from '../UI/UndrawDesigner/IconSVG'
import Progress from '../UI/Progress/ProressTag'
import QuestionForm from '../UI/Container/QuestionForm'
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
]
const DiagnoseTag = () =>{
  let history = useHistory();
  const [textSearch, setTextSearch] = useState()
  const Params = useParams();
  const showTrieuChung = (e,value)=>{
    setTrieuChung(value)
  }
    return(
      <>
        <Header url={false}/>
        <main className="grey lighten-4 pb-3">
        <MDBContainer fluid style={{paddingTop:"100px" }}>
          <MDBContainer  className="bg-white shadow-box-example z-depth-1">
            <MDBRow>
              <MDBCol className="text-center">
                <p className="title-3 mb-0 pb-0 mt-3">Chuẩn đoán bệnh</p>
                <span className="line-3 mt-0 pt-0"></span>
              </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center mb-1">
                <Search/>
              <MDBCol sm="12" className="mb-0 pb-0 pt-1">
                <MDBTypography note noteColor='secondary' noteTitle='Từ khóa: '>
                   {Params.trieuchung.toString()}
                </MDBTypography>
              </MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol sm="3" size="12" className=" pr-0 pl-0 border-right"  >
                <MDBRow>
                  <MDBCol size="12">
                    <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#2067dd "}}>
                      <p className="title-2">Kết quả chuẩn đoán</p>
                    </header>
                  </MDBCol>
                  <MDBCol size="12" className="d-flex align-items-center">
                    <Progress/>
                  </MDBCol>
                </MDBRow>
                
              </MDBCol>
              <MDBCol sm="9" size="12" className=" pr-0 pl-0">
                <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#9e9e9e "}}>
                    <p className="title-2">Hãy quan sát thêm các triệu chứng tiếp theo <Icon.ExclamationIcon/></p>
                </header>
                <MDBRow>
                 <QuestionForm/>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
        </main>
      </>
    )
}
export default DiagnoseTag;