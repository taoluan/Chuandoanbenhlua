import { Progress } from 'antd';
import 'antd/dist/antd.css'
import { MDBBadge,MDBBtn,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
const ProgressTag = (props) => {
  const [tenbenh,setTenBenh] = useState("Bệnh Vàng Lùn")
  if(props.results.length > 0){ 
    return (
    <>
    <MDBContainer>
      {
        props.results.map((x,key)=>{
          return(
            <MDBRow key={key} className=" mt-2">
              <MDBCol sm="12" className="d-flex justify-content-center">
              <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                    percent={x.tyle}
                  />
              </MDBCol>
              <MDBCol sm="12" className="d-flex justify-content-center">
                <Link 
                to={{
                  pathname: `/benh/${x.tenbenh}`,
                }}
                ><p className="title-4">{x.tenbenh}</p></Link>
              </MDBCol>
            </MDBRow>
          )
        })
      }
    </MDBContainer>
  </>
  )
  }else{
    return(
      <></>
    )
  }
}
export default ProgressTag