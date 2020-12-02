import React, { useState } from 'react'
import {MDBRow, MDBCol } from 'mdbreact';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Image as ImageCloud} from 'cloudinary-react';
import {addDisesea} from '../../../reduxToolkit/Slice/diseseaSlice'
import {  useSelector , useDispatch} from 'react-redux'
function ShowImage(props){
    if(props.hinhanh  === ""){
        return(
            <MDBCol sm="6" className="d-flex justify-content-center">
                <MDBRow>
                        <MDBCol sm="12" className="d-flex justify-content-center" style={{height:"200px"}}>
                        </MDBCol>
                        <MDBCol sm="12" className="d-flex justify-content-center">
                            <FormControlLabel  value='other' control={<Radio color="primary" />} label="Không giống" labelPlacement="top"/>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
            )
    }else{
        return(
            <MDBCol sm="6" className="d-flex justify-content-center">
                <MDBRow>
                    <MDBCol sm="12" className="d-flex justify-content-center">
                    <ImageCloud cloudName="taoluanby" publicId={props.hinhanh} width="350" height="200" crop="scale"/>  
                    </MDBCol>
                    <MDBCol sm="12" className="d-flex justify-content-center">
                        <FormControlLabel   control={<Radio color="primary" value={props.hinhanh} />}labelPlacement="top"/>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        )
    }
        

    
}
const ImageHiden = ()=>{
    return (<MDBRow>
        <MDBCol sm="4">
            <MDBCol sm="12">
                <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />  
            </MDBCol>
            <MDBCol sm="12" className="d-flex justify-content-sm-center">
                <FormControlLabel value="famale" control={<Radio color="primary" />} labelPlacement="top"/>
            </MDBCol>
        </MDBCol>
        <MDBCol sm="4" >
            <MDBCol sm="12">
                <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />  
            </MDBCol>
            <MDBCol sm="12" className="d-flex justify-content-sm-center">
                <FormControlLabel value="male" control={<Radio color="primary" />} labelPlacement="top"/>
            </MDBCol>
        </MDBCol>
        <MDBCol sm="4" className="d-flex align-items-end">
            <MDBCol sm="12" className="d-flex justify-content-sm-center">
                <FormControlLabel value="other" control={<Radio color="primary" />} label="Dấu hiệu khác" labelPlacement="top"/>
            </MDBCol>
        </MDBCol>
    </MDBRow>)
}
export default ShowImage