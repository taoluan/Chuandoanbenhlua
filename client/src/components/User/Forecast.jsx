import React, { useState } from 'react'
import { MDBMask,MDBView,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { useHistory } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../UI/Header/Header"
import Header from '../UI/Header/Header'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

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
const Dianose = () =>{
    const [show, setShow] = useState(false)
    return(
      <>
        <Header url={true}/>
        <MDBView src={process.env.PUBLIC_URL + '/img/mbr-1920x1281.jpg'} className="pb-0 mb-0 smooth-scroll ">
            <MDBMask className="flex-center flex-column text-white text-center d-flex align-items-center bd-highlight mb-3 example-parent">
              <MDBContainer style={{backgroundColor:"white" , opacity: 0.9 }} className="w-50 rounded mb-0 shadow-box-example z-depth-3 " >
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
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="VỤ MÙA" variant="outlined" />}
                            />
                        </MDBCol>
                        <MDBCol sm="6" className="d-flex justify-content-center ">
                            <Autocomplete
                                id="combo-box-demo"
                                options={giaiDoan}
                                getOptionLabel={(option) => option.title}
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
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="GIỐNG LÚA" variant="outlined" />}
                            />
                        </MDBCol>
                        <MDBCol sm="6" className="d-flex justify-content-center ">
                            <Autocomplete
                                id="combo-box-demo"
                                options={khuVuc}
                                getOptionLabel={(option) => option.title}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="KHU VỰC" variant="outlined" />}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="d-flex justify-content-center pt-2">
                        <Button variant="contained" color="primary" disableElevation onClick={()=>{setShow(true)}}>
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
        <main className="grey lighten-4 smooth-scroll"  style={{height:"1000px" , display: show ? "block" : "none"}}>
        <MDBContainer className="bg-white" >

        </MDBContainer>
        </main>
      </>
    )
}
export default Dianose;