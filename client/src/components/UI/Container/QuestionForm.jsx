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
const QuestionForm = (props) => {
    const [defaultInline3,setdefaultInline3] = useState(false)

    if(props.results.length > 0){
    return(
        <>
        {
            props.results.map((x,key)=>{
                return(
                    <MDBCol key={key} size="12" className="pt-1 ">
                        <MDBTypography  note noteColor='warning' noteTitle='Quan sát: '>
                        <span className="title-5 pb-0 mb-0"> Triệu chứng xuất hiện trên {x.vi_tri} ? </span>
                        </MDBTypography>
                            <MDBRow>
                                {
                                    x.data.map((trieuchung,key)=>{
                                    return ( <ShowQuestion key={key} data={trieuchung} vitri={x.vi_tri} />)
                                    })
                                }
                        </MDBRow>
                    </MDBCol>
                )
            })
        }
        
        </>
    )
    }else{
        return(
            <></>
        )
    }
}
export default QuestionForm