import React, { useState,useEffect } from 'react'
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
import {  useSelector , useDispatch} from 'react-redux'
import {chuandoanDisesea , addFirstTrieuChung} from '../../reduxToolkit/Slice/diseseaSlice'
import diseseaApi from '../../api/diseseaApi'
import { useTabContext } from '@material-ui/lab';
const DiagnoseTag = () =>{
  let history = useHistory();
  let dispatch = useDispatch()
 // let ketqua = useSelector(state=>state.disesea.chuandoan)
  let FirstTrieuChung = useSelector(state=>state.disesea.trieuchungbandau)
  let dsTrieuChung = useSelector(state=>state.disesea.chuandoan)
  const [textSearch, setTextSearch] = useState()
  const [ketqua,setKetQua] = useState([])
  const [question, setQuestion] = useState([])
  const Params = useParams();
  const showTrieuChung = (e,value)=>{
    setTrieuChung(value)
  }
  useEffect(()=>{
    const fetchQuestion = async()=>{
      const repose = await diseseaApi.chuandoan({data: dsTrieuChung})
      setQuestion(repose)
    }
    const fetchKetQua = async()=>{
      const respose =await diseseaApi.getKetQua({data: dsTrieuChung})
      setKetQua(respose)
    }
    if(dsTrieuChung.length>0){
      fetchQuestion()
      fetchKetQua()
    }
  },[dsTrieuChung])
  useEffect(() => {
    dispatch(addFirstTrieuChung({ten_trieuchung:Params.trieuchung, vitri: Params.vitri}))
  }, [Params]);
  useEffect(() => {
    //dispatch(chuandoanDisesea({ten_trieuchung:Params.trieuchung, vitri: Params.vitri}))
    const fetchKetQua = async()=>{
      const respose =await diseseaApi.getKetQua({data: [{ten_trieuchung: Params.trieuchung, vitri: Params.vitri}]})
      setKetQua(respose)
    }
    const fetchQuestion = async()=>{
      const repose = await diseseaApi.chuandoan({data: [{ten_trieuchung: Params.trieuchung, vitri: Params.vitri}]})
      setQuestion(repose)
    }
    fetchKetQua()
    fetchQuestion()
    console.log(ketqua)
  }, [FirstTrieuChung])
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
                <MDBTypography note noteColor='primary' noteTitle='Từ khóa: '>
                   {Params.trieuchung.toString()}<span className="text-danger"> vị trí trên </span> {Params.vitri}
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
                    <Progress results={ketqua}/>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol sm="9" size="12" className=" pr-0 pl-0">
                <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#9e9e9e "}}>
                    <p className="title-2">Hãy quan sát thêm các triệu chứng tiếp theo <Icon.ExclamationIcon/></p>
                </header>
                <MDBRow>
                 <QuestionForm results={question}/>
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