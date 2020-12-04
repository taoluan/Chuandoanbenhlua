import { useLoading, BallTriangle } from '@agney/react-loading';
import { MDBView,MDBMask,MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,MDBCardHeader,MDBBtn, MDBIcon,MDBFooter} from 'mdbreact';
function Loading() {
    const { containerProps, indicatorEl } = useLoading({
      loading: true,
      indicator: <BallTriangle width="50" />,
    });
  
    return (
      <section {...containerProps}>
          <MDBContainer fluid className="purple-gradient" style={{height:"949px"}}>
          <MDBMask className="flex-center flex-column text-white text-center d-flex align-items-center justify-content-center bd-highlight mb-3 example-parent">
                    <MDBCol xl="6" lg="8" md="10" sm="10" size="12" className="d-flex align-items-center">
                        <MDBContainer className="rounded-circle" >
                           {indicatorEl}
                        </MDBContainer>
                    </MDBCol>
               
                </MDBMask>
            
          </MDBContainer>
      </section>
    );
  }
export default Loading