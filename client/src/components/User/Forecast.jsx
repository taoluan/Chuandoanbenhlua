import React, { useState , useRef} from 'react'
import { MDBMask,MDBView,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { useHistory } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../UI/Header/Header"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Header from '../UI/Header/Header'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import DuBaoBenh from '../UI/Container/CtnDuBaoBenh'
const khuVuc = [
  { title: 'Đồng bằng Sông Cửu Long', year: 1994 },
  { title: 'Đồng bằng Sông Hồng', year: 1972 },
  { title: 'Đồng bằng Duyên Hải Miền Trung', year: 1974 },
]
const vuMua = [
    { title: 'Hè Thu', year: 1994 },
    { title: 'Đông Xuân', year: 1972 },
    { title: 'Mùa', year: 1974 },
  ]
  const giaiDoan = [
    { title: 'Mạ', year: 1994 },
    { title: 'Đẻ Nhánh', year: 1972 },
    { title: 'Làm Đồng', year: 1974 },
    { title: 'Chính', year: 1974 },
  ]
  const giongLua = [
    { title: 'OM1903', year: 1994 },
    { title: 'OM1239', year: 1972 },
    { title: 'OM1230', year: 1974 },
  ]
const Forecast = () =>{
    const [show, setShow] = useState(false)
    const [vumua, setVumua] = useState()
    const [khuvuc, setKhuvuc] = useState()
    const [giong, setGiong] = useState()
    const [giaidoan,setGiaidoan] = useState()
    const bottomRef = useRef();
    const handelClick = async(e)=>{
      if(vumua !== undefined && giong !== undefined && khuvuc !== undefined && giaidoan !== undefined){
        await setShow(true)
        document.querySelector('#onBottom').scrollIntoView({ behavior: 'smooth', block: 'start' })
      }else{
        alert("no no no")
      } 
    }
    return(
      <div className="grey lighten-3">
        <Header url={true}/>
        <MDBView src={process.env.PUBLIC_URL + '/img/mbr-1920x1281.jpg'} className="pb-0 mb-0 smooth-scroll ">
            <MDBMask className="flex-center flex-column text-white text-center d-flex align-items-center bd-highlight mb-3 example-parent">
              <MDBContainer  style={{backgroundColor:"white" , opacity: 0.9 }} className="w-50 rounded mb-0 shadow-box-example z-depth-3 " >
              <h3 className="text-dark title-1 mb-4 pt-5">Dự Báo Các Loại Bệnh Có Thể  Bị Trên Cây Lúa</h3>
              <span className="line-3 mt-0 pt-0 warning-color-dark mb-4"></span>
                <MDBRow className="d-flex justify-content-center pb-5">
                  <MDBCol lg="12" sm="12" >
                  <MDBRow>
                <MDBCol sm="12">
                    <MDBRow className="mb-4">
                        <MDBCol sm="6" className="d-flex justify-content-center pb-4">
                            <Autocomplete
                                id="combo-box-demo"
                                options={vuMua}
                                getOptionLabel={(option) => option.title}
                                onInputChange={(e,value)=>{setVumua(value)}}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="VỤ MÙA" variant="outlined" />}
                            />
                        </MDBCol>
                        <MDBCol sm="6" className="d-flex justify-content-center ">
                            <Autocomplete
                                id="combo-box-demo"
                                options={giaiDoan}
                                getOptionLabel={(option) => option.title}
                                onInputChange={(e,value)=>{setGiaidoan(value)}}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="GIAI ĐOẠN" variant="outlined" />}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="6" className="d-flex justify-content-center  pb-4">
                            <Autocomplete
                                id="combo-box-demo"
                                options={giongLua}
                                getOptionLabel={(option) => option.title}
                                onInputChange={(e,value)=>{setGiong(value)}}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="GIỐNG LÚA" variant="outlined" />}
                            />
                        </MDBCol>
                        <MDBCol sm="6" className="d-flex justify-content-center ">
                            <Autocomplete
                                id="combo-box-demo"
                                options={khuVuc}
                                getOptionLabel={(option) => option.title}
                                onInputChange={(e,value)=>{setKhuvuc(value)}}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="KHU VỰC" variant="outlined" />}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="d-flex justify-content-center pt-2">
                        <Button variant="contained" color="primary" disableElevation onClick={handelClick}>
                            DỰ BÁO
                        </Button>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
        </MDBView>
        <main className=" smooth-scroll pb-4"  style={{ display: show ? "block" : "none"}} id="onBottom" >
        <MDBContainer className="bg-white mt-4 shadow-box-example z-depth-1 pb-2" >
          <MDBRow>
            <header className=" align-self-md-center w-100" style={{backgroundColor:"rgb(250, 170, 11)"}}>
                    <p className="title-7 pb-0 mb-0">Dự báo các bệnh có thể gặp phải  <ErrorOutlineIcon fontSize="large" className="pb-1"/></p>
            </header>
          </MDBRow>
          <MDBRow className="mt-4">
            <MDBCol sm="6" className="text-center mb-3">
              <p className="title-text mb-0 ">Khu Vực</p> 
              <span className="title-text-small">{khuvuc}</span>
            </MDBCol>
            <MDBCol sm="6" className="text-center mb-3">
              <p className="title-text mb-0">Vụ Mùa</p>
              <span className="title-text-small">{vumua}</span>
            </MDBCol>
            <MDBCol sm="6" className="text-center mb-3">
              <p className="title-text mb-0">Giai Đoạn</p>
              <span className="title-text-small">{giaidoan}</span>
            </MDBCol>
            <MDBCol sm="6" className="text-center mb-3">
              <p className="title-text mb-0">Giống Lúa</p>
              <span className="title-text-small">{giong}</span>
            </MDBCol>
          </MDBRow>
          <hr/>
          <MDBRow>
            <DuBaoBenh/>
          </MDBRow>
        </MDBContainer>
        </main>
      </div>
    )
}
export default Forecast;