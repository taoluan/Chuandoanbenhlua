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
import QuestionDefault from '../UI/Container/QuestionDefault'
import {  useSelector , useDispatch} from 'react-redux'
import {addData , addFirstTrieuChung,resetDisessea} from '../../reduxToolkit/Slice/diseseaSlice'
import diseseaApi from '../../api/diseseaApi'
import { useTabContext } from '@material-ui/lab';
import { Route } from 'react-router-dom';
const DiagnoseTag = () =>{
  let dispatch = useDispatch()
 // let ketqua = useSelector(state=>state.disesea.chuandoan)
  let FirstTrieuChung = useSelector(state=>state.disesea.trieuchungbandau)
  let dsTrieuChung = useSelector(state=>state.disesea.chuandoan)
  const [textSearch, setTextSearch] = useState()
  const [ketqua,setKetQua] = useState([])
  const [question, setQuestion] = useState([])
  const [datadefault,setdatadefault] = useState({
      khuvuc: null,
      vumua: null,
      giaidoan: null
  })
  const Params = useParams();
  const fetchKetQua = async(data)=>{
    const respose =await diseseaApi.getKetQua(data)
    setKetQua(respose)
  }
  const fetchQuestion = async(data)=>{
    const repose = await diseseaApi.chuandoan(data)
    setQuestion(repose)
  }
  useEffect(()=>{
    if(dsTrieuChung.length>0 && datadefault.vumua && datadefault.khuvuc && datadefault.giaidoan){
      fetchQuestion({data: dsTrieuChung , datadefault: datadefault})
      fetchKetQua({data: dsTrieuChung, datadefault: datadefault})
     // dispatch(addData(question))
    }
  },[datadefault])
  useEffect(()=>{
    if(dsTrieuChung.length>1 && datadefault.vumua && datadefault.khuvuc && datadefault.giaidoan){
      fetchQuestion({data: dsTrieuChung , datadefault: datadefault})
      fetchKetQua({data: dsTrieuChung, datadefault: datadefault})
     // dispatch(addData(question))
    }
  },[dsTrieuChung])
  useEffect(() => {
    setdatadefault({})
    setKetQua([])
    dispatch(addFirstTrieuChung({ten_trieuchung:Params.trieuchung, vitri: Params.vitri}))
  }, [Params]);
  useEffect(() => {
    if(datadefault.vumua && datadefault.khuvuc && datadefault.giaidoan){
      fetchKetQua({data: [{ten_trieuchung: Params.trieuchung, vitri: Params.vitri}]})
      fetchQuestion({data: [{ten_trieuchung: Params.trieuchung, vitri: Params.vitri}]})
    }
    //fetchKetQua({data: [{ten_trieuchung: Params.trieuchung, vitri: Params.vitri}]})
   // dispatch(addData(question))
    if(FirstTrieuChung.ten_trieuchung !== undefined){
       dispatch(resetDisessea(FirstTrieuChung))
    }
  }, [FirstTrieuChung])
  return(
        <>
          <Header url={false}/> 
          <Route>
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
                  <MDBRow >
                    <MDBCol size="12">
                      <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#2067dd "}}>
                        <p className="title-2">Kết quả chuẩn đoán</p>
                      </header>
                    </MDBCol>
                    <MDBCol size="12" className="d-flex align-items-center">
                      <MDBContainer>
                        {
                          ketqua.map((x,key)=>{
                            return (<Progress key={key} results={x}/>)
                          })
                        }
                      </MDBContainer>
                      {/* <Progress results={ketqua}/> */}
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol sm="9" size="12" className=" pr-0 pl-0">
                  <header className=" align-self-md-center" style={{height:"40px" , backgroundColor:"#9e9e9e "}}>
                      <p className="title-2">Hãy quan sát thêm các triệu chứng tiếp thedata <Icon.ExclamationIcon/></p>
                  </header>
                  <MDBRow>
                    <QuestionDefault data={datadefault} khuvuc={(e)=>setdatadefault({...datadefault, khuvuc: e})} vumua={(e)=>setdatadefault({...datadefault, vumua: e})} giaidoan={(e)=>setdatadefault({...datadefault, giaidoan: e})}/>
                    <MDBCol style={{display: datadefault.vumua && datadefault.khuvuc && datadefault.giaidoan ? "block" : "none"}}>
                      {
                        question.map((x,key)=>{
                          return (<QuestionForm key={key} results={x}/>)
                        })
                      }
                    </MDBCol>
                  {/* <QuestionForm results={question}/> */}
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBContainer>
          </main>
        </Route>
        </>
    )
}
export default DiagnoseTag;