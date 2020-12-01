import { Progress } from 'antd';
import 'antd/dist/antd.css'
import {MDBBtn,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import Icon from '../UndrawDesigner/IconSVG'
import Popover from './Popover'
const ProgressTag = (props) => {
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
                  <Popover uri={x.uri_benh}/>               
              </MDBCol>
              <MDBCol sm="12" className="d-flex justify-content-center">
                <Link target="_blank"
                to={{
                  pathname: `/benh/${x.tenbenhlabel}`,
                }}
                ><p className="title-4">{x.tenbenh} </p>  </Link>
              
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