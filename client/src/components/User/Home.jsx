import React,{useState,Fragment} from 'react';
import { MDBView,MDBMask,MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,MDBCardHeader,MDBBtn, MDBIcon,MDBFooter} from 'mdbreact';
import UndrawDesigner from '../UI/UndrawDesigner/UndrawDesigner'
import ChartThongKeBenh from '../UI/Charts/ThongKeBenh'
import ChartMap from '../UI/Charts/Map'
import ReactTooltip from "react-tooltip";
import TextField from '@material-ui/core/TextField';
import Search from '../UI/Search/Search'
import StepperHome from '../UI/Stepper/StepperHome'
import TabListDisesea from '../UI/Tab/TabListDisesea'
import '../../css/home.css'
import Header from '../UI/Header/Header'
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
]
const Home = ()=>{
  const [content, setContent] = useState(false);
    return(
        <>
        <Header url={true}/>
        <MDBView src={process.env.PUBLIC_URL + '/img/mbr-1920x1281.jpg'} className="pb-0 mb-0">
            <MDBMask className="flex-center flex-column text-white text-center d-flex align-items-center bd-highlight mb-3 example-parent">
              <MDBContainer style={{backgroundColor:"white" , opacity: 0.9 }} className="w-50 rounded mb-0 shadow-box-example z-depth-3 " >
              <h3 className="text-dark pt-4">Chuẩn đoán bệnh theo triệu chứng</h3>
                <MDBRow className="d-flex justify-content-center pb-5">
                  <Search/>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
        </MDBView>
        <main>
        <MDBContainer>
          <MDBRow className=" d-flex justify-content-center deep-blue-gradient shadow-box-example z-depth-3 mt-4 mb-4 rounded bg">
            <MDBCol sm="12"  className="text-center title text-dark mb-0 pb-0 pt-3 ">
              <p>CÁC BƯỚC CHUẨN ĐOÁN BỆNH</p>
            </MDBCol>
            <MDBCol sm="12" lg="6" size="12" className=" d-flex align-self-center mt-0 pt-0">
              <StepperHome/>
            </MDBCol>
            <MDBCol lg="6" className=" d-flex align-self-center mt-0 pt-0">
              <UndrawDesigner/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid className="text-center pt-4 pb-4 rgba-blue-slight" >
        <MDBRow className="d-flex justify-content-center">
            <MDBCol sm="8">
               <MDBRow >
              <MDBCol xl="6" sm="12" className="pb-2">
                <MDBCard className=" w-100 h-100 ">
                <MDBCardHeader className="text-center light-blue  "  style={{opacity:0.7}}>
                    <p className="font-weight-bold mt-3">Thống kê các loại bệnh theo từng khu vực ở Việt Nam</p>
                  </MDBCardHeader>
                  <MDBCardBody className="light-blue accent-2"  >
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
                <MDBCol sm="12" className="pb-2">
                  <MDBCard className="mb-2 w-100 h-100">
                    <MDBCardHeader className="light-blue" style={{opacity:0.7}}>
                      <p className="font-weight-bold mt-3">Thống kê các loại bệnh trên cây lúa</p>
                    </MDBCardHeader>
                    <MDBCardBody >
                        <ChartThongKeBenh/>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                  <MDBCol sm="12" className="pb-2">
                <MDBCard className=" w-100 h-100" >
                    <MDBCardHeader className="light-blue" style={{opacity:0.7}}>
                      <p className="font-weight-bold mt-3">Thống kê các loại bệnh trên cây lúa</p>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <ChartThongKeBenh/>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                </MDBRow>
                
              </MDBCol>
            </MDBRow>
            </MDBCol>
          </MDBRow>
           
        </MDBContainer>
        <MDBContainer fluid className="pt-2" style={{backgroundColor:"white"}}>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="10">
              <MDBCol sm="12" className="text-center pb-4">
                  <h3 className="title pt-5 pb-0 mb-0">Danh sách các bệnh trên lúa</h3>
                  <span className="line mt-0 pt-0"></span>
              </MDBCol>
              <MDBCol sm="12">
                  <TabListDisesea/>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </main>
      </>
    )
}
export default  Home;