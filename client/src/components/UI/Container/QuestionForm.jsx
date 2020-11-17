import React, { useState } from 'react'
import { MDBTypography,MDBInput, MDBRow, MDBCol } from 'mdbreact';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ShowImage from './ShowImage'
import { Hidden } from '@material-ui/core';
const check = (arr,temp) =>{
    let result ={temp: false , vt:null}
    arr.map((x,y)=>{
        if(x.ten === temp){
            result = {temp : true , vt:y}
            return result
        }
    })
    return result
}
const QuestionForm = () => {
    const [defaultInline3,setdefaultInline3] = useState(false)
    const [trieuchung,setTrieuChung]=useState([{
        ten: "Vệt bệnh lang rộng hình bầu dục",
        hinhanh: ["hinh1","hinh2"],
        show: false
        },
        {
            ten: "Vệt bệnh",
            hinhanh: ["hinh3","hinh4"],
            show: false
        }    
    ])
    const handleCheckBox = (e)=>{
        let ip_trieuchung = e.target.value
        let rs = check(trieuchung,ip_trieuchung)
        setTrieuChung(
            trieuchung[rs.vt] = {
                ...trieuchung[rs.vt],
                show: true
            }
        )
    }
    return(
        <>
        <MDBCol size="12" className="pt-1 ">
            <MDBTypography  note noteColor='warning' noteTitle='Quan sát: '>
            <span className="title-5 pb-0 mb-0"> Triệu chứng xuất hiện trên lá ? </span>
            </MDBTypography>
            <MDBRow>
                <MDBCol md="12"  className=" pl-3 mb-0 pb-3 ">
                <div className="custom-control custom-checkbox custom-control-inline pt-1 ml-2" style={{fontSize:"20px"}}>
                    <input type="checkbox" className="custom-control-input title-6" id="defaultInline3" value={"Vệt bệnh lang rộng hình bầu dục"} onChange={handleCheckBox} />
                    <label className="custom-control-label title-6  mb-0 pb-0" htmlFor="defaultInline3" >Vệt bệnh lang rộng hình bầu dục</label>
                </div>
                <ShowImage hinhanh={["hinh1" , "hinh2"]} show={false}/>
                </MDBCol>
                <MDBCol md="6"  className=" pl-3 mb-0 pb-3 ">
                <div className="custom-control custom-checkbox custom-control-inline pt-1 ml-2" style={{fontSize:"20px"}}>
                    <input type="checkbox" className="custom-control-input title-6" id="defaultInline2" value={"Vệt bệnh"} onChange={handleCheckBox} />
                    <label className="custom-control-label title-6  mb-0 pb-0" htmlFor="defaultInline2" >Vệt bệnh lang rộng hình bầu dục</label>
                </div>
                <ShowImage hinhanh={["hinh3" , "hinh4"]} show={false}/>
                </MDBCol>
            </MDBRow>
        </MDBCol>
        
        </>
    )
}
export default QuestionForm