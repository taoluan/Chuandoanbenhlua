import React,{useState,useEffect} from 'react';
import { MDBView,MDBMask,MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,MDBCardHeader,MDBBtn, MDBIcon,MDBFooter} from 'mdbreact';
import UndrawDesigner from '../UI/UndrawDesigner/UndrawDesigner'
import ChartThongKeBenh from '../UI/Charts/ThongKeBenh'
import ChartMap from '../UI/Charts/Map'
import {  useSelector , useDispatch} from 'react-redux'
import Search from '../UI/Search/Search'
import StepperHome from '../UI/Stepper/StepperHome'
import TabListDisesea from '../UI/Tab/TabListDisesea'
import '../../css/home.css'
import Header from '../UI/Header/Header'
import ChartThongKeKhuVuc from '../UI/Charts/ThongKeKhuVuc'
import diseseaApi from '../../api/diseseaApi'
import {countDisesea} from '../../reduxToolkit/Slice/diseseaSlice' 
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
]
const Home = ()=>{
    const [loaibenh, setLoaiBenh] = useState([])
    return(
        <>
        <Header url={true}/>
        <MDBView src={process.env.PUBLIC_URL + '/img/mbr-1920x1281.jpg'} className="pb-0 mb-0">
            <MDBMask className="flex-center flex-column text-white text-center d-flex align-items-center bd-highlight mb-3 example-parent">
            <MDBCol xl="6" lg="8" md="10" sm="10" size="12" className="d-flex align-items-center"> 
              <MDBContainer style={{backgroundColor:"white" , opacity: 0.9 }} className=" rounded mb-0 shadow-box-example z-depth-3 " >
                <h3 className="pt-4 title-3 mb-0">Chuẩn đoán bệnh theo triệu chứng</h3>
                <MDBRow className="d-flex justify-content-center pb-5">
                  <Search/>
                </MDBRow>
              </MDBContainer>
            </MDBCol>
            </MDBMask>
        </MDBView>
        <main>
        <MDBContainer>
        <MDBRow className=" d-flex justify-content-center deep-blue-gradient shadow-box-example z-depth-3 mt-4 mb-4 rounded">
            <MDBCol sm="12"  className="text-center text-dark mb-0 pb-0 pt-3 ">
              <p className="title-1 mb-0 pb-0">CÁC BƯỚC CHUẨN ĐOÁN BỆNH</p>
            </MDBCol>
            <MDBCol sm="12" lg="6" size="12" className=" d-flex align-self-center mt-0 pt-0">
              <StepperHome/>
            </MDBCol>
            <MDBCol lg="6" className=" d-flex justify-content-center mt-0 pt-0">
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
                    <p className="title-2 mt-0 mb-0">Thống kê các loại bệnh theo từng khu vực ở Việt Nam</p>
                  </MDBCardHeader>
                  <MDBCardBody className=" accent-2 p-0"  >
                        <ChartMap/>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl="6" sm="12">
                <MDBRow >
                <MDBCol sm="12" className="pb-2">
                  <MDBCard className="mb-2 w-100 h-100">
                    <MDBCardHeader className="light-blue" style={{opacity:0.7}}>
                      <p className="title-2 mt-0 mb-0">Thống kê các loại bệnh trên cây lúa</p>
                    </MDBCardHeader>
                    <MDBCardBody className="p-0">
                        <ChartThongKeBenh option="all"/>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                  <MDBCol sm="12" className="pb-2">
                <MDBCard className=" w-100 h-100" >
                    <MDBCardHeader className="light-blue" style={{opacity:0.7}}>
                      <p className="title-2 mt-0 mb-0">Thống kê các loại bệnh theo từng khu vực</p>
                    </MDBCardHeader>
                    <MDBCardBody className="p-0">
                        <ChartThongKeKhuVuc/>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                </MDBRow>
                
              </MDBCol>
            </MDBRow>
            </MDBCol>
          </MDBRow>
           
        </MDBContainer>
        <MDBContainer fluid className="pt-2" style={{backgroundColor:"white" ,height:"1000px"}}>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="10">
              <MDBCol sm="12" className="text-center pb-4">
                  <h3 className="title pt-5 pb-0 mb-0">Danh sách các bệnh trên lúa</h3>
                  <span className="line mt-0 pt-0"></span>
              </MDBCol>
              <MDBCol sm="12" size="12">
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