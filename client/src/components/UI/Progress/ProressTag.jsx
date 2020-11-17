import { Progress } from 'antd';
import 'antd/dist/antd.css'
import { MDBBadge,MDBBtn,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
const ProgressTag = () => {
  const [tenbenh,setTenBenh] = useState("Bệnh Vàng Lùn")
  return (
    <>
    <MDBContainer>
      <MDBRow className=" mt-2">
        <MDBCol sm="12" className="d-flex justify-content-center">
        <Progress
              type="circle"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
        </MDBCol>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <Link 
          to={{
            pathname: "/benh/"+tenbenh,
          }}
          ><p className="title-4">Bệnh Vàng Lùn</p></Link>
        </MDBCol>
      </MDBRow>
      <MDBRow className=" mt-2">
        <MDBCol sm="12" className="d-flex justify-content-center">
        <Progress
              type="circle"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={80}
            />
        </MDBCol>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <p className="title-4">Bệnh Bạc Lá</p>
        </MDBCol>
      </MDBRow>
      <MDBRow className=" mt-2">
        <MDBCol sm="12" className="d-flex justify-content-center">
        <Progress
              type="circle"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={80}
            />
        </MDBCol>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <p className="title-4">Bệnh Cháy Lá</p>
        </MDBCol>
      </MDBRow>
      <MDBRow className=" mt-2">
        <MDBCol sm="12" className="d-flex justify-content-center">
        <Progress
              type="circle"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={80}
            />
        </MDBCol>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <p className="title-4">Bệnh Cháy Lá</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  </>
);
}
export default ProgressTag