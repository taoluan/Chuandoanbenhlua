import React,{useEffect , useState} from 'react';
import { MDBCard, MDBCardBody,MDBBadge, MDBIcon,MDBProgress, MDBRow, MDBCol, MDBCardText , MDBTypography } from 'mdbreact';
import diseseaApi from '../../../api/diseseaApi'
import Icon from '../../UI/UndrawDesigner/IconSVG'
const AdminCardSection1 = () => {
  const [data, setdata] = useState({});
  useEffect(() => {
    const fetchData = async()=>{
      const respose =  await diseseaApi.thongkeLoaiBenh()
      let total = respose.dataset.reduce((a,b)=>{return a + b},0)
      setdata({
        total: total,
        respose
      })
    }
    fetchData()
  }, []);
  if(data.total !== undefined){
    console.log(data)
    return (
      <>
      <MDBRow className="mb-4">
          <MDBCol xl="4" md="6" className="mb-r">
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon className="warning-color">
                  <Icon.Nam height="40" width="40" />
                  </MDBIcon>
                  <div className="data">
                  <MDBTypography tag='h6'>{data.respose.label[0]}</MDBTypography>
                    <h4>
                    <MDBBadge color="warning">+{data.respose.dataset[0]}</MDBBadge>                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <MDBProgress color="warning" value={Math.round((data.respose.dataset[0]/data.total)*100)} className="mb-1"/>
                  <MDBCardText>Chiếm {Math.round((data.respose.dataset[0]/data.total)*100)}% trong tổng số loại bệnh</MDBCardText>
                </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol xl="4" md="6" className="mb-r">
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon className="primary-color ">
                  <Icon.Sau height="40" width="40" />
                  </MDBIcon>
                  <div className="data">
                  <MDBTypography tag='h6'>{data.respose.label[1]}</MDBTypography>
                    <h4>
                    <MDBBadge color="primary">+{data.respose.dataset[1]}</MDBBadge>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <MDBProgress value={Math.round((data.respose.dataset[1]/data.total)*100)} className="mb-1"/>
                  <MDBCardText>Chiếm {Math.round((data.respose.dataset[1]/data.total)*100)}% trong tổng số loại bệnh</MDBCardText>
                </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol xl="4" md="6" className="mb-r">
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon className="light-blue lighten-1 ">
                  <Icon.ThieuChatDD height="40" width="40" />
                  </MDBIcon>
                  <div className="data">
                  <MDBTypography tag='h6'>{data.respose.label[2]}</MDBTypography>
                    <h4>
                    <MDBBadge color="info">+{data.respose.dataset[2]}</MDBBadge>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <MDBProgress color="info" value={Math.round((data.respose.dataset[2]/data.total)*100)} className="mb-1"/>
                  <MDBCardText>Chiếm {Math.round((data.respose.dataset[2]/data.total)*100)}% trong tổng số loại bệnh</MDBCardText>
                </MDBCardBody>
              </MDBCard>
          </MDBCol>
      </MDBRow>
      <MDBRow className="mb-4 ">
      <MDBCol xl="4" md="6" className="mb-r">
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon className="red accent-2">
                  <Icon.TuyenTrung height="40" width="40" />
                  </MDBIcon>
                  <div className="data">
                  <MDBTypography tag='h6'>{data.respose.label[3]}</MDBTypography>
                    <h4>
                    <MDBBadge color="danger">+{data.respose.dataset[3]}</MDBBadge>
                    
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <MDBProgress color="danger" value={Math.round((data.respose.dataset[2]/data.total)*100)} className="mb-1"/>
                  <MDBCardText>Chiếm {Math.round((data.respose.dataset[2]/data.total)*100)}% trong tổng số loại bệnh</MDBCardText>
                </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol xl="4" md="6" className="mb-r">
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon className="purple lighten-2">
                  <Icon.ViKhuan height="40" width="40" />
                  </MDBIcon>
                  <div className="data">
                  <MDBTypography tag='h6'>{data.respose.label[4]}</MDBTypography>
                    <h4>
                    <MDBBadge color="secondary">+{data.respose.dataset[4]}</MDBBadge>                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <MDBProgress color="secondary" value={Math.round((data.respose.dataset[4]/data.total)*100)} className="mb-1"/>
                  <MDBCardText>Chiếm {Math.round((data.respose.dataset[4]/data.total)*100)}% trong tổng số loại bệnh</MDBCardText>
                </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol xl="4" md="6" className="mb-r">
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon className="grey darken-4">
                  <Icon.Virus height="40" width="40" />
                  </MDBIcon>
                  <div className="data">
                  <MDBTypography tag='h6'>{data.respose.label[5]}</MDBTypography>
                    <h4>
                    <MDBBadge color="dark">+{data.respose.dataset[5]}</MDBBadge>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <MDBProgress color="dark" value={Math.round((data.respose.dataset[5]/data.total)*100)} className="mb-1"/>
                  <MDBCardText>Chiếm {Math.round((data.respose.dataset[5]/data.total)*100)}% trong tổng số loại bệnh</MDBCardText>
                </MDBCardBody>
              </MDBCard>
          </MDBCol>
      </MDBRow>
    </>
    )
  }else{
    return(
      <></>
    )
  }
}

export default AdminCardSection1;

