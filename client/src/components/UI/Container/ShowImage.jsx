import React, { useState } from 'react'
import {MDBRow, MDBCol } from 'mdbreact';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ReactImageZoom from 'react-image-zoom';
function ShowImage(props){
        return(
                <MDBCol sm="4">
                    <MDBCol sm="12">
                    <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />  
                    </MDBCol>
                    <MDBCol sm="12" className="d-flex justify-content-center">
                        <FormControlLabel value={props.hinhanh} control={<Radio color="primary" />}labelPlacement="top"/>
                    </MDBCol>
                </MDBCol>
            )

    
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