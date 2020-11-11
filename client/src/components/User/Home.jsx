import React,{useState} from 'react';
import { MDBView,MDBMask,MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,MDBCardHeader,Tooltip } from 'mdbreact';
import UndrawDesigner from '../UI/UndrawDesigner/UndrawDesigner'
import Chart_ThongKeBenh from '../UI/Charts/ThongKeBenh'
import Chart_Map from '../UI/Charts/Map'
const Home = ()=>{
  const [content, setContent] = useState("");
    return(
        <>
        <MDBView src={process.env.PUBLIC_URL + '/img/mbr-1920x1281.jpg'} >
            <MDBMask overlay="light" className="flex-center flex-column text-white text-center">
            <MDBCard className="mb-4" transparent>
                  <MDBCardHeader className="pb-0">
                    <p className="font-weight-bold">Thống kê các loại bệnh trên cây lúa</p>
                  </MDBCardHeader>
                  <MDBCardBody>
                      <Chart_ThongKeBenh/>
                  </MDBCardBody>
                </MDBCard>
            
            </MDBMask>
        </MDBView>
        <main>
        <MDBContainer className="text-center my-5">
            <MDBRow>
              <MDBCol xl="6">  
                <MDBCard>
                  <MDBCardBody>
                      <Chart_Map setTooltipContent={setContent}/>
   
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl="6">
                <MDBCard className="mb-4">
                  <MDBCardHeader className="pb-0">
                    <p className="font-weight-bold">Thống kê các loại bệnh trên cây lúa</p>
                  </MDBCardHeader>
                  <MDBCardBody>
                      <Chart_ThongKeBenh/>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
         
        </MDBContainer>
      </main>
      </>
    )
}
export default  Home;