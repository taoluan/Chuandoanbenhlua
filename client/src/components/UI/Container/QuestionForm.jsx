import React, { useState } from 'react'
import { MDBTypography,MDBInput, MDBRow, MDBCol } from 'mdbreact';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ShowQuestion from './ShowQuestion'
import { Hidden } from '@material-ui/core';
import LightboxPage from './LightboxPage';
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
    const [test,setTest] = useState()
    const [trieuchung,setTrieuChung]=useState([{
            ten: "Vệt bệnh lang rộng hình bầu dục",
            hinhanh: ["hinh1","hinh2"],
            show: false
        },
        {
            ten: "Vệt bệnh",
            hinhanh: ["hinh3","hinh4","hinh5", "hinhh6"],
            show: false
        }    
    ])
    return(
        <>
        <MDBCol size="12" className="pt-1 ">
            <MDBTypography  note noteColor='warning' noteTitle='Quan sát: '>
            <span className="title-5 pb-0 mb-0"> Triệu chứng xuất hiện trên lá ? </span>
            </MDBTypography>
                <MDBRow>
                    {
                        trieuchung.map((trieuchung,key)=>{
                           return ( <ShowQuestion key={key} data={trieuchung}/>)
                        })
                    }
            </MDBRow>
        </MDBCol>
        </>
    )
}
export default QuestionForm