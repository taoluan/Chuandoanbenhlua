import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask, MDBContainer } from "mdbreact";
import ViKhuan from '../UndrawDesigner/BgSVG'
import Icon from '../../UI/UndrawDesigner/IconSVG'
import CardTag from '../Card/CardTag'
import Box from '@material-ui/core/Box'; 
const defaultProps = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        style: { width: '300px', height: '300px' },
      };
const ProjectsPage = (props) => {
  //console.log(props.results)
  return (
      <>
      <MDBContainer>
        {
          props.results.map((x,key)=>{
              if(x.ten_loai === "Vi Khuẩn"){
                return(
                  <MDBRow key={key} className="mt-4 mb-2">
                    <MDBCol sm="5" className=" d-flex align-items-center justify-content-center ">
                        <div className="aqua-gradient z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                            <Icon.ViKhuan height="200" width="200"/>
                        </div>
                    </MDBCol>
                    <MDBCol sm="7">
                      <MDBRow className="d-flex justify-content-center">
                          <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">{x.ten_loai}</span> gây hại</p>
                      </MDBRow>
                      <MDBRow className="mb-2">
                        {
                          x.data.map((y,key)=>{
                            return(
                              <MDBCol key={key} sm="6" size="12" className="d-flex justify-content-center mb-2">
                                <CardTag results={y}/>
                              </MDBCol> 
                            )
                          })
                        }
                       
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                )
              }else if(x.ten_loai === "Virus"){
                return(
                  <MDBRow className="mt-4 mb-2">
                    <MDBCol sm="7">
                        <MDBRow className="d-flex justify-content-center">
                            <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">{x.ten_loai}</span> gây hại</p>
                        </MDBRow>
                        <MDBRow className="mb-2">
                        {
                          x.data.map((y,key)=>{
                            return(
                              <MDBCol key={key} sm="6" size="12" className="d-flex justify-content-center mb-2">
                                <CardTag results={y}/>
                              </MDBCol> 
                            )
                          })
                        }
                        </MDBRow>
                      </MDBCol>
                        <MDBCol sm="5" className=" d-flex align-items-center justify-content-center ">
                            <div className="dusty-grass-gradient z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                                <Icon.Virus  height="200" width="200"/>
                            </div>
                          </MDBCol>
                    </MDBRow>
                )
              }else if(x.ten_loai === "Tuyến Trùng"){
                return(
                  <MDBRow className="mt-4 mb-2">
                    <MDBCol sm="5" className="d-flex align-items-center justify-content-center ">
                      <div className="yellow accent-1 z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                          <Icon.TuyenTrung  height="200" width="200"/>
                      </div>
                    </MDBCol>
                    <MDBCol sm="7">
                      <MDBRow className="d-flex justify-content-center">
                          <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">{x.ten_loai}</span> gây hại</p>
                      </MDBRow>
                      <MDBRow className="mb-2">
                          {
                            x.data.map((y,key)=>{
                              return(
                                <MDBCol key={key} sm="6" size="12" className="d-flex justify-content-center mb-2">
                                  <CardTag results={y}/>
                                </MDBCol> 
                              )
                            })
                          }
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                )
              }else if(x.ten_loai === "Sâu"){
                return(
                  <MDBRow className="mt-4 mb-2">
                  <MDBCol sm="7">
                      <MDBRow className="d-flex justify-content-center">
                          <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">{x.ten_loai}</span> gây hại</p>
                      </MDBRow>
                      <MDBRow className="mb-2">
                      {
                          x.data.map((y,key)=>{
                            return(
                              <MDBCol key={key} sm="6" size="12" className="d-flex justify-content-center mb-2">
                                <CardTag results={y}/>
                              </MDBCol> 
                            )
                          })
                        }
                      </MDBRow>
                    </MDBCol>
                      <MDBCol sm="5" className=" d-flex align-items-center justify-content-center ">
                          <div className=" grey lighten-3 z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                              <Icon.Sau  height="200" width="200"/>
                          </div>
                      </MDBCol>
                  </MDBRow>
                )
              }else if(x.ten_loai === "Nắm"){
                <MDBRow className="mt-4 mb-2">
                  <MDBCol sm="5" className="d-flex align-items-center justify-content-center ">
                    <div className="deep-orange lighten-4 z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                        <Icon.Nam  height="200" width="200"/>
                    </div>
                  </MDBCol>
                  <MDBCol sm="7">
                    <MDBRow className="d-flex justify-content-center">
                        <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">{x.ten_loai}</span> gây hại</p>
                    </MDBRow>
                    <MDBRow className="mb-2">
                    {
                          x.data.map((y,key)=>{
                            return(
                              <MDBCol key={key} sm="6" size="12" className="d-flex justify-content-center mb-2">
                                <CardTag results={y}/>
                              </MDBCol> 
                            )
                          })
                        }
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              }
        })
      }
         <MDBRow className="mt-4 mb-2">
          <MDBCol sm="5" className=" d-flex align-items-center justify-content-center ">
              <div className="aqua-gradient z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                  <Icon.ViKhuan height="200" width="200"/>
              </div>
          </MDBCol>
          <MDBCol sm="7">
            <MDBRow className="d-flex justify-content-center">
                <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">Vi Khuẩn</span> gây hại</p>
            </MDBRow>
            <MDBRow className="mb-2">
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr/>
        <MDBRow className="mt-4 mb-2">
        <MDBCol sm="7">
            <MDBRow className="d-flex justify-content-center">
                <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">ViRus</span> gây hại</p>
            </MDBRow>
            <MDBRow className="mb-2">
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol> 
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        <MDBCol sm="5" className=" d-flex align-items-center justify-content-center ">
             <div className="dusty-grass-gradient z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                <Icon.Virus  height="200" width="200"/>
            </div>
          </MDBCol>
        </MDBRow>
        <hr/>
        <MDBRow className="mt-4 mb-2">
          <MDBCol sm="5" className="d-flex align-items-center justify-content-center ">
            <div className="yellow accent-1 z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                <Icon.TuyenTrung  height="200" width="200"/>
            </div>
          </MDBCol>
          <MDBCol sm="7">
            <MDBRow className="d-flex justify-content-center">
                <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">Tuyến Trùng</span> gây hại</p>
            </MDBRow>
            <MDBRow className="mb-2">
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol> 
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr/>
        <MDBRow className="mt-4 mb-2">
        <MDBCol sm="7">
            <MDBRow className="d-flex justify-content-center">
                <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">Sâu</span> gây hại</p>
            </MDBRow>
            <MDBRow className="mb-2">
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol> 
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
              <MDBCol sm="6" size="12" className="d-flex justify-content-center mb-2">
                <CardTag/>
              </MDBCol>
            </MDBRow>
          </MDBCol>
            <MDBCol sm="5" className=" d-flex align-items-center justify-content-center ">
                <div className=" grey lighten-3 z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                    <Icon.Sau  height="200" width="200"/>
                </div>
            </MDBCol>
        </MDBRow>
        <hr/>
        <MDBRow className="mt-4 mb-2">
          <MDBCol sm="5" className="d-flex align-items-center justify-content-center ">
            <div className="deep-orange lighten-4 z-depth-1 d-flex align-items-center justify-content-center rounded-circle" style={{height: "300px" ,  width : "300px"}}>
                <Icon.Nam  height="200" width="200"/>
            </div>
          </MDBCol>
          <MDBCol sm="7">
            <MDBRow className="d-flex justify-content-center">
                <p className="title-3 mb-0 pb-3">Bệnh do <span className="text-warning">Nấm</span> gây hại</p>
            </MDBRow>
            <MDBRow className="mb-2">
              
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        </>
  );
}

export default ProjectsPage;