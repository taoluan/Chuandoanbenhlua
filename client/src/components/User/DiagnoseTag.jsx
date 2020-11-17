import React, { useState } from 'react'
import { MDBTypography,MDBBtn,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { useHistory ,useLocation ,useParams} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../UI/Header/Header"
import Header from '../UI/Header/Header'
import TreeView from '../UI/TreeView/TreeView'
import TimeLine from '../UI/Timeline/Timeline'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Icon from '../UI/UndrawDesigner/IconSVG'
import Progress from '../UI/Progress/Proress'
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
]
const DiagnoseTag = () =>{
  let history = useHistory();
  const [textSearch, setTextSearch] = useState()
  const [trieuchung,setTrieuChung] = useState()
  const Params = useParams();
  console.log(Params.trieuchung);
  const showTrieuChung = (e,value)=>{
    setTrieuChung(value)
  }
  const checkSearch = ()=>{
    (textSearch) ?  history.push("/chuandoan/:"+textSearch) : alert(12)
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
            <MDBRow className="d-flex justify-content-center mb-1">
              <MDBCol size="9">
              <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    onChange={(e,value)=>{setTextSearch(value)}}
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Nhập triệu chứng trên lúa ?"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                        
                      />
                    )}
                  /> 
              </MDBCol>
              <MDBCol size="2" className="d-flex align-items-center pr-0 mt-1"> 
                  <MDBBtn tag="a" size="md" floating="true" className="teal lighten-3 z-depth-0 " onClick={checkSearch} >
                      <Icon.SearchIcon/>
                  </MDBBtn>
              </MDBCol>
              <MDBCol sm="12" className="mb-0 pb-0 pt-1">
                <MDBTypography note noteColor='secondary' noteTitle='Từ khóa: '>
                   {Params.trieuchung}
                </MDBTypography>
              </MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol sm="3" size="12" className=" pr-0 pl-0" >
                <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#2067dd "}}>
                  <p className="title-2">Kết quả chuẩn đoán</p>
                </header>
                <Progress/>
              </MDBCol>
              <MDBCol sm="9" size="12" className=" pr-0 pl-0">
                <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#9e9e9e "}}>
                    <p className="title-2">Hãy quan sát thêm các triệu chứng tiếp theo <Icon.ExclamationIcon/></p>
                </header>
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
        </main>
      </>
    )
}
export default DiagnoseTag;