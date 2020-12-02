import { Progress } from 'antd';
import 'antd/dist/antd.css'
import {MDBBtn,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom'
import React, { useState,useEffect } from 'react';
import Icon from '../UndrawDesigner/IconSVG'
// import Popover from './Popover'
import { Popover, Button } from 'antd';
import diseseaApi from '../../../api/diseseaApi'
import {  useSelector , useDispatch} from 'react-redux'
const checkArray = (list, object)=>{
  let i;
  for (i = 0; i < list.length; i++) {
      if (list[i].ten_trieuchung === object.ten_trieuchung && list[i].vitri === object.vitri) {
          return {result: true , vitri:i};
      }
  }
  return {result: false};
}
const ProgressTag = (props) => {
    const dataRidux = useSelector(state=>state.disesea.chuandoan)
    const [dataResult, setdataResult] = useState([]);
    const [data, setdata] = useState([]);
      useEffect(() => {
        const fetchTrieuChung = async ()=>{
            const respose = await diseseaApi.getTrieuChung({uri_benh: props.results.uri_benh})
            let arr = []
            respose.map(x=>{
                arr.push({ten_trieuchung : x.ten_trieuchung.value , vitri: x.vitri.value , check : false})
            })
            let arrNew = [...arr]
            dataRidux.map(x=>{
                if(checkArray(arrNew,x).result){
                    let vitri = checkArray(arrNew,x).vitri
                    let temp = arrNew[vitri]
                    temp.check = true
                    arrNew[vitri] = temp
                }
            })
            setdata(arrNew)
        }
        fetchTrieuChung()
        // let arrNew = [...data]
        // dataRidux.map(x=>{
        //     if(checkArray(arrNew,x).result){
        //         let vitri = checkArray(arrNew,x).vitri
        //         let temp = arrNew[vitri]
        //         temp.check = true
        //         arrNew[vitri] = temp
        //     }
        // })
        // setdata(arrNew)
      //  setdataResult(arrNew)
    }, [props.results]);
    //  useEffect(() => {
    //     let arrNew = [...dataResult]
    //     dataRidux.map(x=>{
    //         if(checkArray(dataResult,x).result){
    //             let vitri = checkArray(dataResult,x).vitri
    //             let temp = dataResult[vitri]
    //             temp.check = true
    //             arrNew[vitri] = temp
    //         }
    //     })
    //     setdata(arrNew)
    //    // setdataResult(arrNew)
    // }, [dataRidux]);
    return (
    <>
     <MDBRow className=" mt-2">
        <MDBCol sm="12" className="d-flex justify-content-center">
          <Progress
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                percent={props.results.tyle}
              />
           {(data.length > 0)
                  && (<Popover content={
                    <div>
                        {
                          
                          data.map((x,key)=>{
                                if(x.check === true){
                                    return (
                                        <p key={key} className="text-success"><img src={process.env.PUBLIC_URL + '/img/tick.png'} height="15" width="15" className="mb-1"/>   {x.ten_trieuchung} vị trí {x.vitri}</p>
                                    )
                                }else{
                                    return (
                                        <p key={key} className="text-danger"> <img src={process.env.PUBLIC_URL + '/img/negative.png'} height="15" width="15" className="mb-1"/> {x.ten_trieuchung} vị trí {x.vitri}</p>
                                    )
                                }
                            })
                        }
                    </div>
                        } title={<p className="mb-0"> Các triệu chứng <span className="text-primary float-right">{props.results.tyle} %</span></p>}>
                                  <Button size="small" type="link"  style={{backgroundColor: "rgba(0, 0, 0, 0.0)"}} shape="circle" icon={<Icon.Warning height="19" width="19" mr="pb-1"/>} />
                  </Popover>)
                  }
          </MDBCol>
          <MDBCol sm="12" className="d-flex justify-content-center">
            <Link target="_blank"
              to={{
                pathname: `/benh/${props.results.tenbenhlabel}`,
              }}
              ><p className="title-4">{props.results.tenbenh}  
                </p>  
            </Link>

        </MDBCol>
      </MDBRow>
    {/* <MDBContainer>
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
    </MDBContainer> */}
  </>
    )
}
export default ProgressTag