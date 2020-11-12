import React,{useState,Fragment} from 'react';
import { MDBView,MDBMask,MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,MDBCardHeader,MDBBtn, MDBIcon} from 'mdbreact';
import UndrawDesigner from '../UI/UndrawDesigner/UndrawDesigner'
import ChartThongKeBenh from '../UI/Charts/ThongKeBenh'
import ChartMap from '../UI/Charts/Map'
import ReactTooltip from "react-tooltip";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { blue } from '@material-ui/core/colors';
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
]
const Home = ()=>{
  const [content, setContent] = useState(false);
    return(
        <>
        <MDBView src={process.env.PUBLIC_URL + '/img/mbr-1920x1281.jpg'} >
            <MDBMask overlay="light" className="flex-center flex-column text-white text-center d-flex align-items-center bd-highlight mb-3 example-parent">
              <MDBContainer style={{backgroundColor:"white" , opacity: 0.9 }} className="w-50 rounded mb-0 shadow-box-example z-depth-3 " >
              <h3 className="text-dark pt-4">Chuẩn đoán bệnh theo triệu chứng</h3>
                <MDBRow className="d-flex justify-content-center pb-5">
                  <MDBCol lg="8" sm="12" >
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Nhập triệu chứng trên lúa ?"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                        className="pb-1"
                      />
                    )}
                  />  
                  </MDBCol>
                  <MDBCol lg="2" sm="12" className="d-flex align-items-center">
                    <MDBBtn tag="a" size="xl" floating color="info">
                    <MDBIcon icon="search" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
        </MDBView>
        <main>
        <MDBContainer className="text-center my-5" >
            <MDBRow>
              <MDBCol xl="6" sm="12">
                <MDBCard className=" w-100 h-100">
                <MDBCardHeader className="text-center light-blue  "  style={{opacity:0.7}}>
                    <p className="font-weight-bold mt-3">Thống kê các loại bệnh theo từng khu vực ở Việt Nam</p>
                  </MDBCardHeader>
                  <MDBCardBody className="light-blue accent-2" style={{opacity:1}} >
                        <ChartMap setTooltipContent={setContent}  />
                        {content === "Đồng bằng Sông Cửu Long" 
                        ? <ReactTooltip place="right" type="light">
                            <MDBCard className="pb-0 mb-0 pl-0 pr-0 ml-0">
                              <MDBCardHeader className="pb-0">
                                <p className="font-weight-bold text-dark">Thống kê các loại bệnh ở ĐB Sông Cửu Long</p>
                              </MDBCardHeader>
                              <MDBCardBody>
                                  <ChartThongKeBenh/>
                              </MDBCardBody>
                            </MDBCard>
                        </ReactTooltip>
                        : (content === "Đồng bằng Sông Hồng")
                        ? <ReactTooltip place="right">
                              <MDBCard className="pb-0" transparent>
                                <MDBCardHeader className="pb-0">
                                  <p className="font-weight-bold text-dark">Thống kê các loại bệnh ở ĐB Sông Hồng</p>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <ChartThongKeBenh/>
                                </MDBCardBody>
                              </MDBCard>
                          </ReactTooltip>
                        : (content === "Đồng bằng Duyên Hải Miền Trung") 
                        ? <ReactTooltip place="right">
                              <MDBCard className="bg-blue">
                                <MDBCardHeader className="pb-0">
                                  <p className="font-weight-bold text-dark">Thống kê các loại bệnh ở ĐB Duyên Hải Miền Trung</p>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <ChartThongKeBenh/>
                                </MDBCardBody>
                              </MDBCard>
                          </ReactTooltip>
                        : <ReactTooltip ></ReactTooltip>
                        }
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl="6" sm="12">
                <MDBRow >
                  <MDBCard className="mb-2 w-100 h-100">
                    <MDBCardHeader className="light-blue" style={{opacity:0.7}}>
                      <p className="font-weight-bold mt-3">Thống kê các loại bệnh trên cây lúa</p>
                    </MDBCardHeader>
                    <MDBCardBody >
                        <ChartThongKeBenh/>
                    </MDBCardBody>
                  </MDBCard>
                </MDBRow>
                <MDBRow>
                <MDBCard className=" w-100 h-100" >
                    <MDBCardHeader className="light-blue" style={{opacity:0.7}}>
                      <p className="font-weight-bold mt-3">Thống kê các loại bệnh trên cây lúa</p>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <ChartThongKeBenh/>
                    </MDBCardBody>
                  </MDBCard>
                </MDBRow>
                
              </MDBCol>
            </MDBRow>
         
        </MDBContainer>
      </main>
      </>
    )
}
export default  Home;